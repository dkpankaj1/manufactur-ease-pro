import { Link } from '@inertiajs/react'
import React, { useState } from 'react'


function HeaderDropdownBtn({ icon, title, items }) {
    const [showDropdown, setShowDropDown] = useState(false)

    return (
        <div className={showDropdown ? "dropdown d-none d-sm-inline-block show" : "dropdown d-none d-sm-inline-block"}>
            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" onClick={() => setShowDropDown(!showDropdown)}
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className={icon}></i>{title}
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
            </button>
            <div className={showDropdown ? "dropdown-menu show" : "dropdown-menu"}>
                {
                    items.map((item, key) => {
                        return (
                            <Link key={key} href={item.href} className="dropdown-item notify-item">
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderDropdownBtn