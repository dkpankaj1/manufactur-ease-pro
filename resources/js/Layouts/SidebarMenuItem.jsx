import { Link } from '@inertiajs/react';
import React, { useState } from 'react'
import { usePermission } from '../Composable/Permission';

function SidebarMenuItem() {

    const [openSubMenu, setOpenSubMenu] = useState("")
    const { hasPermission, anyPermission } = usePermission()

    const toggleSubMenu = (menuId) => {
        setOpenSubMenu(openSubMenu === menuId ? '' : menuId);
    };
    return (
        <>
            {
                anyPermission(['role.index', 'user.index']) && <li className="menu-title">System</li>
            }

            {
                anyPermission(['role.index', 'user.index']) && (
                    <li className={openSubMenu === "users" ? "mm-active" : ""} style={{ cursor: "pointer" }}>
                        <a href='#' className="has-arrow" onClick={() => toggleSubMenu("users")}>
                            <i className="feather-user"></i>
                            <span>Users Management</span>
                        </a>
                        <ul className={openSubMenu === "users" ? "sub-menu mm-collapse mm-show" : "sub-menu mm-collapse"}>
                            {subMenuItems("Users", "user.index")}
                            {subMenuItems("Role & Permission", "role.index")}
                        </ul>
                    </li>
                )
            }

        </>
    )

}
function subMenuItems(title, routeName) {
    const { hasPermission } = usePermission()
    return hasPermission(routeName) && <li><Link href={route(routeName)}>{title}</Link></li>
}


export default SidebarMenuItem