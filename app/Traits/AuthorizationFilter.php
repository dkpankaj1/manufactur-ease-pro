<?php
namespace App\Traits;

use App\Exceptions\UnauthorizeException;
use Illuminate\Support\Facades\Gate;


trait AuthorizationFilter
{
    public function authorizeOrFail($ability, ...$args)
    {
        if(Gate::denies($ability, $args)){
            throw new UnauthorizeException();
        }
    }
}