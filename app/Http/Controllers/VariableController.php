<?php

namespace App\Http\Controllers;

use App\Classes\ValueObjects\Constants\GeneralConstant;
use App\Models\Currency;
use App\Models\Variable;
use App\Services\FetchesGstTax;
use Illuminate\Http\Request;

class VariableController extends Controller
{
    protected $fetchesGstTax;

    public function __construct(FetchesGstTax $fetchesGstTax)
    {
        $this->fetchesGstTax = $fetchesGstTax;
    }

    public function fetchesGst()
    {
        return $this->fetchesGstTax->execute();
    }

    public function updateGst(Request $request)
    {
        $request->validate([
            'value' => 'required|numeric',  // Ensure the value is numeric
        ]);
        
        $variable = Variable::updateOrCreate(
            ['general_constant_id' => GeneralConstant::GST_CONFIGURATION],
            ['name' => 'Gst Percentage', 'value' => $request->value]
        );
    
        return response()->json(['message' => 'GST Percentage updated successfully.', 'variable' => $variable]);
    }
    
}
