import React, { lazy } from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Head } from '@inertiajs/react'

const LinkButton = lazy(() => import('../../Components/LinkButton'))
const DeleteBtn = lazy(() => import('../../Components/DeleteBtn'))

function List({ users }) {

    return (
        <AuthLayout>
            <Head title='User List' />

            <div className="card">
                <div className="card-body">

                    <div className="d-flex align-items-center justify-content-end mb-3">
                        <LinkButton className='btn btn-primary' permissionName={'user.create'} href={route('user.create')}>
                            <i className='fas fa-plus-square '></i> Create
                        </LinkButton>
                    </div>

                    <div className="table-responsive">
                        <table className='table table-sm'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                    <th>Created At</th>
                                    <th>Last Login</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.data.map((user, index) => {
                                        return <tr key={index}>
                                            <td>{++index}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.roles.map((role, index) => <span key={index} className='badge badge-primary'>{role.name}</span>)}</td>
                                            <td>{user.created_at_human}</td>
                                            <td>{user.last_login}</td>
                                            <td>
                                                <div className="btn-group btn-group-sm ">
                                                    <LinkButton
                                                        permissionName={"user.edit"} className='btn btn-primary'
                                                        href={route('user.edit', user.id)}
                                                    >
                                                        <i className='fas fa-edit'></i>
                                                    </LinkButton>
                                                    <DeleteBtn
                                                        permissionName={"user.destroy"}
                                                        url={route('user.destroy', user)}
                                                        className="btn btn-danger"
                                                    />

                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </AuthLayout>
    )
}

export default List