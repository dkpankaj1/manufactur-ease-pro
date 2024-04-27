import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Head, useForm } from '@inertiajs/react'

function Create({ roles }) {
    const { data, setData, processing, errors, post } = useForm({
        name: "",
        email: "",
        phone: "",
        password: '',
        password_confirmation: '',
        role: ''
    })


    const handleSubmit = () => {
        post(route('user.store'))
    }

    return (
        <AuthLayout>
            <Head title='Create User' />

            <div className="card">
                <div className="card-body">

                    <h4 className="card-title">add new user</h4>

                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="form-horizontal">
                                <div className="form-group row mb-3">
                                    <label htmlFor="inputEmail3" className="col-3 col-form-label">Name</label>
                                    <div className="col-9">
                                        <input type="text" className="form-control"
                                            placeholder="Enter Name"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                        />
                                        {errors.name && <span className='invalid-feedback d-block'>{errors.name}</span>}
                                    </div>
                                </div>

                                <div className="form-group row mb-3">
                                    <label htmlFor="inputEmail3" className="col-3 col-form-label">Email</label>
                                    <div className="col-9">
                                        <input type="email" className="form-control"
                                            placeholder="Enter Email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                        />
                                        {errors.email && <span className='invalid-feedback d-block'>{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="form-group row mb-3">
                                    <label htmlFor="inputEmail3" className="col-3 col-form-label">Phone</label>
                                    <div className="col-9">
                                        <input type="text" className="form-control"
                                            placeholder="Enter Phone"
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                        />
                                        {errors.phone && <span className='invalid-feedback d-block'>{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="form-group row mb-3">
                                    <label htmlFor="inputPassword3" className="col-3 col-form-label">Password</label>
                                    <div className="col-9">
                                        <input type="password" className="form-control"
                                            placeholder="Password"
                                            value={data.password}
                                            onChange={e => setData('password', e.target.value)}
                                        />
                                        {errors.password && <span className='invalid-feedback d-block'>{errors.password}</span>}
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor="inputPassword5" className="col-3 col-form-label">Confirm Password</label>
                                    <div className="col-9">
                                        <input type="password" className="form-control"
                                            placeholder="Confirm Password"
                                            value={data.password_confirmation}
                                            onChange={e => setData('password_confirmation', e.target.value)}
                                        />
                                        {errors.password_confirmation && <span className='invalid-feedback d-block'>{errors.password_confirmation}</span>}
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label htmlFor="inputPassword5" className="col-3 col-form-label">Role</label>
                                    <div className="col-9">
                                        <select className="form-control"
                                            value={data.role}
                                            onChange={e => setData('role', e.target.value)}
                                        >
                                            <option>-- select role --</option>
                                            {roles.map((role, index) => <option key={index} value={role.name}>{role.name}</option>)}

                                        </select>
                                        {errors.role && <span className='invalid-feedback d-block'>{errors.role}</span>}
                                    </div>
                                </div>

                                <div className="form-group mb-0 justify-content-end row">
                                    <div className="col-9">
                                        <hr />
                                        <button type="submit" className="btn btn-info" disabled={processing} onClick={handleSubmit}>{processing ? "Creating..." : "Create"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </AuthLayout>
    )
}

export default Create