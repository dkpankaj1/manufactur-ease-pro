import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout';
import { Link } from '@inertiajs/react';
import Img403 from '../../../assets/images/403.svg'

function Error403() {
    return (
        <AuthLayout>
            <div className="text-center">
                <img src={Img403} alt="error" height="140" />
                <h1 className="h4 mb-3 mt-4">Access Denied</h1>
                <p className="text-muted mb-4 w-75 m-auto">You do not have permission. Please check your credentials and try again,</p>
            </div>

            <div className="row mt-4">
                <div className="col-12 text-center">
                    <Link href={route('dashboard')} className="btn btn-success waves-effect waves-light">
                        <i className="mdi mdi-home mr-2"></i>
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Error403