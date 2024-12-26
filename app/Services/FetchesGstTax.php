<?php

namespace App\Services;

use App\Classes\ValueObjects\Constants\GeneralConstant;
use App\Models\Variable;

class FetchesGstTax
{
    public function execute()
    {
        // Fetch the value, and default to 6 if not found
        return Variable::where('general_constant_id', GeneralConstant::GST_CONFIGURATION)
            ->first()
            ->value ?? 6;
    }
}
