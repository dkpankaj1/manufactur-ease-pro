import { usePage } from "@inertiajs/react";

export function usePermission() {

    const hasRole = name => usePage().props.auth.user.roles.includes(name);

    const hasPermission = name => hasRole("super_admin") ? true : usePage().props.auth.user.permissions.includes(name);
    const anyPermission = arr => hasRole("super_admin") ? true : arr.some(item => usePage().props.auth.user.permissions.includes(item))

    return { hasPermission, anyPermission }
}
