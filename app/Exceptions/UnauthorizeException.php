<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UnauthorizeException extends Exception
{
    public function render()
    {
        return Inertia::render('Errors/Error403');
    }
}
