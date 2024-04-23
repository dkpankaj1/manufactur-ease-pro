import React, { lazy, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { usePage } from '@inertiajs/react';

import createNewBtnDropdownItem from '../menus/createNewBtnDropdownItem'
import mainMenu from '../menus/MainMenu'

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/icons.min.css';
import '../../assets/css/theme.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../Components/Breadcrumb';


const ProfileDropdown = lazy(() => import('../Components/ProfileDropdown'))
const HeaderDropdownBtn = lazy(() => import('../Components/HeaderDropdownBtn'))
const SidebarMenuItem = lazy(() => import('../Components/SidebarMenuItem'))
const DashboardFooter = lazy(() => import('../Components/DashboardFooter'))


function AuthLayout({ children }) {

    const [showSidebar, setShowSidebar] = useState(false);
    const { flash } = usePage().props;

    useEffect(() => {
        const bodyClasses = document.body.classList;
        showSidebar
            ? bodyClasses.add('enable-vertical-menu')
            : bodyClasses.remove('enable-vertical-menu')
    }, [showSidebar])

    useEffect(() => {
        flash.success && toast.success(flash.success);
        flash.danger && toast.error(flash.danger);
    }, [flash]);

    return (
        <>
            <div id="layout-wrapper">

                <header id="page-topbar">
                    <div className="navbar-header">

                        <div className="d-flex align-items-left">

                            <button
                                type="button"
                                className="btn btn-sm mr-2 d-lg-none px-3 font-size-16 header-item"
                                id="vertical-menu-btn"
                                onClick={() => setShowSidebar(!showSidebar)}
                            >
                                <i className="fa fa-fw fa-bars"></i>
                            </button>

                            <HeaderDropdownBtn icon={"mdi mdi-plus"} title={"Create New"} items={createNewBtnDropdownItem} />
                        </div>

                        <div className="d-flex align-items-center">
                            <ProfileDropdown />
                        </div>
                    </div>
                </header>


                <div className="vertical-menu" style={{ overflowY: "scroll", scrollbarWidth: "auto" }}>

                    <div className="h-100">

                        <div className="navbar-brand-box">
                            <a href="#" className="logo">
                                <span>
                                    X-acton
                                </span>
                            </a>
                        </div>

                        <div id="sidebar-menu">
                            <ul className="metismenu list-unstyled" id="side-menu">
                                {mainMenu.map((item, index) => (
                                    <SidebarMenuItem key={index} item={item} />
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>

                <div className="main-content">

                    <div className="page-content">
                        <div className="container-fluid">
                            <Breadcrumb />
                            {children}
                        </div>
                    </div>

                    <DashboardFooter />

                </div>


            </div>
            <div className="menu-overlay" onClick={() => setShowSidebar(false)}></div>
            <ToastContainer />
        </>
    )
}

export default AuthLayout