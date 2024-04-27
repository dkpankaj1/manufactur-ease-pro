import React, { useState } from 'react';
import AuthLayout from '../../Layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';

function Create({ permissionGroup }) {

    const { data, setData, post, errors, processing } = useForm({
        name: "",
        selectedPermissions: [] // Corrected the state key name
    });

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setData('selectedPermissions', [...data.selectedPermissions, value]);
        } else {
            setData('selectedPermissions', data.selectedPermissions.filter(permission => permission !== value));
        }
    };

    // Function to handle form submission
    const handleSubmit = () => {
        post(route('role.store'))
    };

    return (
        <AuthLayout>
            <Head title='Create Role' />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                Create new Role
                            </h4>
                            <div>
                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Enter Role name"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                        />
                                        {errors.name && <span className='invalid-feedback d-block'>{errors.name}</span>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Permission</label>
                                    <div className="col-sm-10">

                                        <div className='table-responsive-md'>
                                            <table className='table table-sm table-hover nowrap table-bordered '>
                                                <tbody>
                                                    {permissionGroup.map((group, index) => (
                                                        <tr key={index}>
                                                            <td className='bg-light' style={{ fontWeight: "bold" }}>{group.name}</td>
                                                            {group.permissions.map((permission, item) => (
                                                                <td key={item}>
                                                                    <div className="row">
                                                                        <label className='col'>
                                                                            {permission.name}
                                                                        </label>
                                                                        <div className="col">
                                                                            <input
                                                                                type="checkbox"
                                                                                value={permission.name}
                                                                                onChange={handleCheckboxChange} // Attach the event handler here
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-0 justify-content-end row">
                                    <div className="col-10">
                                        <hr />
                                        <button
                                            className='btn btn-primary'
                                            onClick={handleSubmit}
                                            disabled={processing}
                                        >
                                            {processing ? "Creating..." : "Create"}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Create;
