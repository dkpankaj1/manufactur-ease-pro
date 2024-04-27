import { Link, usePage } from '@inertiajs/react'
import React from 'react'

function Breadcrumb() {
    const { breadcrumb } = usePage().props;
    return (
        breadcrumb && (
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0 font-size-18">{breadcrumb.title}</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                {
                                    breadcrumb.items.map((item, index) => {
                                        return item.url === window.location.href
                                            ? (
                                                <li key={index} className="breadcrumb-item active">
                                                    <a >{item.title}</a>
                                                </li>
                                            )

                                            : (
                                                <li key={index} className="breadcrumb-item">
                                                    <Link href={item.url}>{item.title}</Link>
                                                </li>
                                            )

                                    })
                                }
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
        )
    )
}

export default Breadcrumb