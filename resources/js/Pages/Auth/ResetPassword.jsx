import React, { useEffect } from 'react'
import Guest from '../../Layouts/Guest'
import { Head, Link, useForm } from '@inertiajs/react'

function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleSubmit = (e) => {
        // console.log(data)
        post(route('password.update'));
    };

    return (
        <Guest>
            <Head title='Reset Password'/>
            <h1 className="h5 mb-4">Reset Password</h1>
            <div>

                <div className="form-group">
                    <input
                        type="email" className="form-control form-control-user"
                        placeholder="Email Address"
                        defaultValue={data.email}
                        disabled={true}
                    />
                    {errors.email && <span className='invalid-feedback d-block'>{errors.email}</span>}
                </div>
                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                            type="password" className="form-control form-control-user"
                            placeholder="Password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />
                        {errors.password && <span className='invalid-feedback d-block'>{errors.password}</span>}
                    </div>
                    <div className="col-sm-6">
                        <input
                            type="password" className="form-control form-control-user"
                            placeholder="Repeat Password"
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                        />
                    </div>
                </div>

                <button className="btn btn-success btn-block waves-effect waves-light" 
                onClick={handleSubmit} 
                disabled={processing}
                >{processing? "Resting...": "Reset"}</button>

            </div>

            <div className="row mt-5">
                <div className="col-12 text-center">
                    <p className="text-muted">Already have account?  <Link href={route('login')} className="text-muted font-weight-medium ml-1"><b>Sign In</b></Link></p>
                </div>
            </div>
        </Guest>
    )
}

export default ResetPassword