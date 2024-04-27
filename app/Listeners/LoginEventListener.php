<?php

namespace App\Listeners;

use App\Events\LoginEvent;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class LoginEventListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(LoginEvent $event): void
    {
        auth()->user()->update(['last_login' => Carbon::now()]);
    }
}
