<?php

namespace App\Http\Controllers;

use App\Models\PaymentReceiver;
use Illuminate\Http\Request;

class PaymentReceiverController extends Controller
{
    public function listNameAndId(Request $request)
    {
        return PaymentReceiver::all()
            ->map(function ($category) {
                $category->name = ucwords($category->name);
                return $category;
            })
            ->pluck('name', 'id'); //tod0-new: add currecy also 
    }
}
