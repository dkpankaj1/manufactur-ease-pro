import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Head, useForm } from '@inertiajs/react'

function ChangePassword() {
    const { data, setData, errors, put, reset, processing } = useForm({
        current_password: "",
        password: "",
        password_confirmation: ""
    })

    const updatePassword = () => {
        put(route('password.change'), {
            onSuccess: () => reset(),
        })
    }
    return (
        <AuthLayout>
            <Head title='Change Password' />

            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Update your password</h4>
                            <div>

                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Current Password</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="password" className="form-control"
                                            placeholder="Enter Current Password"
                                            value={data.current_password}
                                            onChange={e => setData('current_password', e.target.value)}
                                        />
                                        {errors.updatePassword?.current_password && <span className='invalid-feedback d-block'>{errors.updatePassword.current_password}</span>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">New Password</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="password" className="form-control"
                                            placeholder="Enter New Password"
                                            value={data.password}
                                            onChange={e => setData('password', e.target.value)}
                                        />
                                        {errors.updatePassword?.password && <span className='invalid-feedback d-block'>{errors.updatePassword.password}</span>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Confirm Password</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="password" className="form-control"
                                            placeholder="Confirm Password"
                                            value={data.password_confirmation}
                                            onChange={e => setData('password_confirmation', e.target.value)}
                                        />
                                        {errors.updatePassword?.password_confirmation && <span className='invalid-feedback d-block'>{errors.updatePassword.password_confirmation}</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <hr />
                                    <button className='btn btn-primary' onClick={updatePassword} disabled={processing} >{processing ? "Changing..." : "Change Password"}</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </AuthLayout>
    )
}

export default ChangePassword