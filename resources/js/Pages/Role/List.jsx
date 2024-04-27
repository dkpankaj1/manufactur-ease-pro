import React, { lazy } from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import { Head, Link } from '@inertiajs/react'

const DeleteBtn = lazy(() => import('../../Components/DeleteBtn'))
const LinkButton = lazy(() => import('../../Components/LinkButton'))
const Pagination = lazy(() => import('../../Components/Pagination'))
function List({ roles }) {
    return (
        <AuthLayout>
            <Head title='Role' />

            <div className="card">

                <div className="card-body">

                    <div className="d-flex align-items-center justify-content-end mb-3">
                        <LinkButton className='btn btn-primary' permissionName={'role.create'} href={route('role.create')}>
                            <i className='fas fa-plus-square '></i> Create
                        </LinkButton>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-sm table-hover">
                            <thead className='thead-dark'>
                                <tr>
                                    <th >#</th>
                                    <th >Name</th>
                                    <th >Created At</th>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roles.data.length <= 0
                                        ? (
                                            <tr>
                                                <td className="text-truncate">No Role found.. </td>
                                            </tr>
                                        )
                                        : (roles.data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.created_at_human}</td>
                                                    <td>
                                                        <div className="btn-group btn-group-sm">
                                                            <LinkButton
                                                                permissionName={"role.index"} className='btn btn-success'
                                                                href={route('role.show', item)}
                                                            >
                                                                <i className='far fa-eye'></i>
                                                            </LinkButton>
                                                            <LinkButton
                                                                permissionName={"role.edit"} className='btn btn-primary'
                                                                href={route('role.edit', item.id)}
                                                            >
                                                                <i className='fas fa-edit'></i>
                                                            </LinkButton>
                                                            <DeleteBtn
                                                                permissionName={"role.destroy"}
                                                                url={route('role.destroy', item)}
                                                                className="btn btn-danger"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }))
                                }
                            </tbody>
                        </table>
                        <div className="py-3">
                            <hr />
                            <Pagination links={roles.links} />
                        </div>
                    </div>

                </div>
            </div>
        </AuthLayout>
    )
}

export default List