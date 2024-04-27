<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ByRoleName
{
    protected $request;
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function handle(Builder $builder, \Closure $next)
    {
        return $next($builder)->when(
            $this->request->filled('role'),
            function ($query) {
                return $query->whereHas('roles', function ($roleQuery) {
                    $roleQuery->where('name', 'like', '%' . $this->request->input('role') . '%');
                });
            }
        );
    }
}
