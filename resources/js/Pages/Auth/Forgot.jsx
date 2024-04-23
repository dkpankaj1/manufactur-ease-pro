import React from 'react'
import Guest from '../../Layouts/Guest'
import { Head, Link, useForm } from '@inertiajs/react'

function Forgot() {

    const { data, setData, post, errors, processing, reset } = useForm({
        email: ""
    })

    const handleSubmit = () => {
        post(route('password.email'))
    }

    return (
        <Guest>
            <Head title='Forgot Password'/>
            <h1 className="h5 mb-1">Forgot Password</h1>
            <p className="text-muted mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email Address</label>
                    <input
                        type="email" className="form-control form-control-user"
                        placeholder="Email Address" value={data.email}
                        onChange={e => setData('email', e.target.value)}
                    />
                    {errors.email && <span className='invalid-feedback d-block'>{errors.email}</span>}
                </div>
                <button className="btn btn-success btn-block waves-effect waves-light" 
                onClick={handleSubmit}
                disabled={processing}
                >{processing ? "Sending..." : "Send Link"}</button>

            </div>

            <div className="row mt-5">
                <div className="col-12 text-center">
                    <p className="text-muted">Already have account?  <Link href={route('login')} className="text-muted font-weight-medium ml-1"><b>Sign In</b></Link></p>
                </div>
            </div>
        </Guest>
    )
}

export default Forgot