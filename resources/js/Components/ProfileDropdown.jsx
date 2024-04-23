import React, { useState } from 'react'
import userAvatar from '../../assets/images/users/avatar-3.jpg'
import { Link, useForm } from '@inertiajs/react'
import { usePage } from '@inertiajs/react';

function ProfileDropdown() {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const { post, processing } = useForm()
    const { auth } = usePage().props

    const handleLogout = () => {
        post(route('logout'))
    }

    return (
        <div className={showProfileDropdown ? "dropdown d-inline-block ml-2 show" : "dropdown d-inline-block ml-2"}>
            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img
                    className="rounded-circle header-profile-user" src={userAvatar}
                    alt="Header Avatar" loading='lazy'
                />
                <span className="d-none d-sm-inline-block ml-1">{auth.user.name}</span>
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
            </button>
            <div className={showProfileDropdown ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"}>
                <Link className="dropdown-item d-flex align-items-center justify-content-between" href={route('profile.edit')}>
                    <span>Profile</span>
                </Link>
                <Link className="dropdown-item d-flex align-items-center justify-content-between" href={route('password.edit')}>
                    <span>Change Password</span>
                </Link>
                <button
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    onClick={handleLogout} disabled={processing}
                >
                    <span>{processing ? "Please wait.." : "Log Out"}</span>
                </button>
            </div>
        </div>
    )
}

export default ProfileDropdown