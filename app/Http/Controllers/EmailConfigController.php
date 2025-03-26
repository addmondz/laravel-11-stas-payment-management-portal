<?php

namespace App\Http\Controllers;

use App\Models\EmailConfig;
use App\Models\EmailTemplate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class EmailConfigController extends Controller
{
    public function get(Request $req)
    {
        $user = auth()->user();

        $config = EmailConfig::where('user_id', $user->id)->first();

        return response()->json([
            'data' => $config,
        ], 200);
    }

    public function upsert(Request $req)
    {
        // Validate the incoming request
        $validated = $req->validate([
            'mail_mailer' => 'required',
            'mail_host' => 'required',
            'mail_port' => 'required|max:250',
            'mail_username' => 'required|max:250',
            'mail_password' => 'required|max:250',
            'mail_encryption' => 'required',
            'mail_from_address' => 'required|max:250|email',
            'mail_from_name' => 'required|max:250',
        ]);

        $user = auth()->user();

        $data = [
            'user_id' => $user->id,
            'mail_mailer' => $validated['mail_mailer'],
            'mail_host' => $validated['mail_host'],
            'mail_port' => $validated['mail_port'],
            'mail_username' => $validated['mail_username'],
            'mail_password' => $validated['mail_password'],
            'mail_encryption' => $validated['mail_encryption'],
            'mail_from_address' => $validated['mail_from_address'],
            'mail_from_name' => $validated['mail_from_name'],
        ];

        try {
            $has_config = EmailConfig::where('user_id', $user->id)->exists();

            if ($has_config) {
                EmailConfig::where('user_id', $user->id)->update($data);
            } else {
                EmailConfig::create($data);
            }
        } catch (\Exception $e) {
            Log::error('Error submitting config: '.$e->getMessage());

            return response()->json([
                'error' => 'An error occurred while submitting the config.',
            ], 500);
        }

        // Return success in JSON
        return response()->json([
            'success' => 'SMTP config submitted successfully!',
        ], 201);
    }

    public function testConfig()
    {
        try {
            $user = auth()->user();
            $ec = EmailConfig::where('user_id', $user->id)->first();

            if ($ec == null) {
                return response()->json([
                    'error' => 'SMTP settings are incomplete',
                ], 400);
            }

            Config::set('mail.mailers.smtp.host', $ec->mail_host);
            Config::set('mail.mailers.smtp.port', $ec->mail_port);
            Config::set('mail.mailers.smtp.encryption', $ec->mail_encryption == 'none' ? null : $ec->mail_encryption);
            Config::set('mail.mailers.smtp.username', $ec->mail_username);
            Config::set('mail.mailers.smtp.password', $ec->mail_password);
            Config::set('mail.from.address', $ec->mail_from_address);
            Config::set('mail.from.name', $ec->mail_from_name);

            Mail::raw('Testing Mail Config BODY', function ($message) {
                $message->subject('Testing Mail Config')
                    ->to('exian97@gmail.com');
            });

            return response()->json([
                'success' => 'Test email sent successfully! Check your inbox.',
            ], 200);
        } catch (\Exception $e) {
            Log::error('SMTP Error: '.$e->getMessage());

            return response()->json([
                'success' => 'Failed to send.',
            ], 400);
        }
    }

    public function getTemplates(Request $req)
    {
        $user = auth()->user();
        $query = EmailTemplate::where('user_id', $user->id)->orderBy('id', 'desc');

        $templates = $query->paginate($req->input('per_page', 10));

        return response()->json([
            'success' => true,
            'data' => $templates,
            'message' => 'Payment receivers listed successfully',
        ]);
    }

    public function upsertTemplate(Request $req, EmailTemplate $et)
    {
        // Validate the incoming request
        $validated = $req->validate([
            'receiver_email' => 'required',
            'template_name' => 'required|max:250',
            'subject' => 'required|max:250',
            'body' => 'required',
        ]);

        $user = auth()->user();

        $data = [
            'user_id' => $user->id,
            'receiver_emails' => $validated['receiver_email'],
            'name' => $validated['template_name'],
            'subject' => $validated['subject'],
            'body' => $validated['body'],
        ];

        try {
            if ($et->id != null) {
                $et->update($data);
            } else {
                EmailTemplate::create($data);
            }
        } catch (\Exception $e) {
            Log::error('Error submitting template: '.$e->getMessage());

            return response()->json([
                'error' => 'An error occurred while submitting the template.',
            ], 500);
        }

        // Return success in JSON
        return response()->json([
            'success' => 'Template submitted successfully!',
        ], 201);
    }

    public function templateSendMail(EmailTemplate $et)
    {
        try {
            $user = auth()->user();
            $ec = EmailConfig::where('user_id', $user->id)->first();

            if ($ec == null) {
                return response()->json([
                    'error' => 'SMTP settings are incomplete',
                ], 400);
            }

            $receivers = explode(',', $et->receiver_emails);

            Config::set('mail.mailers.smtp.host', $ec->mail_host);
            Config::set('mail.mailers.smtp.port', $ec->mail_port);
            Config::set('mail.mailers.smtp.encryption', $ec->mail_encryption == 'none' ? null : $ec->mail_encryption);
            Config::set('mail.mailers.smtp.username', $ec->mail_username);
            Config::set('mail.mailers.smtp.password', $ec->mail_password);
            Config::set('mail.from.address', $ec->mail_from_address);
            Config::set('mail.from.name', $ec->mail_from_name);

            for ($i = 0; $i < count($receivers); $i++) {
                Mail::raw($et->body, function ($message) use ($ec, $et) {
                    $message->to($ec->mail_from_address)
                        ->subject($et->subject);
                });
            }

            return response()->json([
                'success' => 'Mail sent successfully! Check your inbox.',
            ], 200);
        } catch (\Exception $e) {
            Log::error('SMTP Error: '.$e->getMessage());

            return response()->json([
                'success' => 'Failed to send mail.',
            ], 400);
        }
    }
}
