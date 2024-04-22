import React from 'react'
import Guest from '../../Layouts/Guest'
import { Link } from '@inertiajs/react'

function Forget() {
    return (
        <Guest>
            <h1 class="h5 mb-1">Forget Password</h1>
            <p class="text-muted mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail">Email Address</label>
                    <input type="email" class="form-control form-control-user" placeholder="Email Address"/>
                </div>
                <a href="" class="btn btn-success btn-block waves-effect waves-light">send</a>

            </form>

            <div class="row mt-5">
                <div class="col-12 text-center">
                    <p class="text-muted">Already have account?  <Link href={route('login')} class="text-muted font-weight-medium ml-1"><b>Sign In</b></Link></p>
                </div>
            </div>
        </Guest>
    )
}

export default Forget