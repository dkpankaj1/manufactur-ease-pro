import React from 'react'
import Guest from '../../Layouts/Guest'
import { Link } from '@inertiajs/react'

function Login() {
  return (
    <Guest>
      <h1 className="h5 mb-1">Welcome Back!</h1>
      <p className="text-muted mb-4">Enter your email address and password to access admin panel.</p>
      <div className="user">
        <div className="form-group">
          <input type="email" className="form-control form-control-user" placeholder="Email Address" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control form-control-user" placeholder="Password" />
        </div>
        {/* <button href="" className="btn btn-success btn-block waves-effect waves-light"> Log In </button> */}
        <Link href="/dashboard" className="btn btn-success btn-block waves-effect waves-light"> Log In </Link>
      </div>

      <div className="row mt-4">
        <div className="col-12 text-center">
          <p className="text-muted mb-2"><Link href={route('forget.password')} className="text-muted font-weight-medium ml-1">Forgot your password?</Link></p>
        </div>
      </div>
    </Guest>
  )
}

export default Login