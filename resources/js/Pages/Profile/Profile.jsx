import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Head, useForm, usePage } from '@inertiajs/react'

function Profile() {

    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing } = useForm({
        name: user.name,
        email: user.email,
    });

    const updateProfile = () => {
        patch(route('profile.update'));
    };

    return (
        <AuthLayout>
            <Head title='Profile' />

            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Update your Profile</h4>
                            <div>

                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Enter Profile name"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                        />
                                        {errors.name && <span className='invalid-feedback d-block'>{errors.name}</span>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="email" className="form-control"
                                            placeholder="Enter Email Address"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                        />
                                        {errors.email && <span className='invalid-feedback d-block'>{errors.email}</span>}
                                    </div>
                                </div>

                                <hr />
                                <div className="form-group">
                                    <button
                                        className='btn btn-primary'
                                        onClick={updateProfile}
                                        disabled={processing}
                                    >
                                        {processing ? "Updating..." : "Update Profile"}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthLayout>
    )
}

export default Profile