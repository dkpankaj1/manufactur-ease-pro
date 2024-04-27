import { Link } from '@inertiajs/react'
import React from 'react'
import { usePermission } from '../Composable/Permission'

function LinkButton({ permissionName, children, ...prop }) {
    const { hasPermission } = usePermission()
    return (
        <>
            {
                hasPermission(permissionName) && <Link  {...prop}>
                    {children}
                </Link>
            }
        </>
    )
}

export default LinkButton