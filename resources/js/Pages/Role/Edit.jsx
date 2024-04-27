import React, { useState } from 'react';
import AuthLayout from '../../Layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';

function Edit({ role, roleHasPermission, permissionGroup }) {

    const { data, setData, put, errors, processing } = useForm({
        name: role.name,
        selectedPermissions: roleHasPermission
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

    // Function to determine if a permission is checked
    const isPermissionChecked = (permissionName) => {
        return data.selectedPermissions.includes(permissionName);
    };

    // Function to handle form submission
    const handleSubmit = () => {
        put(route('role.update', role));
    };

    return (
        <AuthLayout>
            <Head title='Edit Role' />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">

                            <h4 className="card-title">
                                Edit Role
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
                                    <div className="col-sm-10 ">
                                        <div className='table-responsive-md'>
                                            <table className='table table-sm table-hover nowrap table-center '>
                                                <tbody>
                                                    {permissionGroup.map((group, index) => (
                                                        <tr key={index}>
                                                            <td className='bg-light' style={{fontWeight:"bold"}}>{group.name}</td>
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
                                                                                defaultChecked={isPermissionChecked(permission.name)}
                                                                                onChange={handleCheckboxChange}
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
                                        {processing ? "Updating..." : "Update"}
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

export default Edit;
