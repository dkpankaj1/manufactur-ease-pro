import React, { useState } from 'react'
import userAvatar from '../../assets/images/users/avatar-3.jpg'
import { Link } from '@inertiajs/react'

function ProfileDropdown() {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)

    return (
        <div className={showProfileDropdown ? "dropdown d-inline-block ml-2 show" : "dropdown d-inline-block ml-2"}>
            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle header-profile-user" src={userAvatar}
                    alt="Header Avatar" />
                <span className="d-none d-sm-inline-block ml-1">Jamie D.</span>
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
            </button>
            <div className={showProfileDropdown ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"}>
                <a className="dropdown-item d-flex align-items-center justify-content-between" href="">
                    <span>Inbox</span>
                    <span>
                        <span className="badge badge-pill badge-info">3</span>
                    </span>
                </a>
                <a className="dropdown-item d-flex align-items-center justify-content-between" href="">
                    <span>Profile</span>
                    <span>
                        <span className="badge badge-pill badge-warning">1</span>
                    </span>
                </a>
                <a className="dropdown-item d-flex align-items-center justify-content-between" href="">
                    Settings
                </a>
                <Link className="dropdown-item d-flex align-items-center justify-content-between" href="">
                    <span>Lock Account</span>
                </Link>
                <Link className="dropdown-item d-flex align-items-center justify-content-between" href="/">
                    <span>Log Out</span>
                </Link>
            </div>
        </div>
    )
}

export default ProfileDropdown