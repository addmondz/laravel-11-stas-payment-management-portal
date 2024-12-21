<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function listShortCode()
    {
        return Currency::all()->pluck('short_code');
    }
}
