import React from 'react'
import Guest from '../../Layouts/Guest'
import { Head, Link, useForm } from '@inertiajs/react'

function Login() {

  const { data, setData, post, processing, errors } = useForm({
    email: "super@email.com",
    password: ""
  })

  const handleLogin = () => {
    post('/')
  }

  return (
    <Guest>
      <Head title='Login'/>
      <h1 className="h5 mb-1">Welcome Back!</h1>
      <p className="text-muted mb-4">Enter your email address and password to access admin panel.</p>
      <div className="user">
        <div className="form-group">
          <input
            type="email" className="form-control form-control-user" placeholder="Email Address"
            value={data.email} onChange={e => setData('email', e.target.value)}
          />
          {errors.email && <span className='invalid-feedback d-block'>{errors.email}</span>}
        </div>
        <div className="form-group">
          <input 
          type="password" className="form-control form-control-user" placeholder="Password" 
          value={data.password} onChange={e => setData('password', e.target.value)}
          />
           {errors.password && <span className='invalid-feedback d-block'>{errors.password}</span>}
        </div>
        <button className="btn btn-success btn-block" onClick={handleLogin} disabled={processing}> {processing ? "Log In.." : "Log In"} </button>
      </div>

      <div className="row mt-4">
        <div className="col-12 text-center">
          <p className="text-muted mb-2"><Link href={route('password.request')} className="text-muted font-weight-medium ml-1">Forgot your password?</Link></p>
        </div>
      </div>
    </Guest>
  )
}

export default Login