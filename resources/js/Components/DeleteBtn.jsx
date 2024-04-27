import React from "react";
import Swal from "sweetalert2";
import { Link, useForm } from "@inertiajs/react";
import { usePermission } from '../Composable/Permission'

function DeleteBtn({ url, permissionName, ...prop }) {
    const { hasPermission } = usePermission()
    const { delete: destroy, processing } = useForm();
    const handleDelete = () => {
        Swal.fire({
            title: "Delete",
            text: "Do you want to delete",
            confirmButtonText: "Delete",
            confirmButtonColor: "#f00",
            showCancelButton: !0,
        }).then((e) => {
            e.isConfirmed && destroy(url);
        });
    };

    return (
        hasPermission(permissionName) && <Link
            as="button"
            disabled={processing}
            onClick={handleDelete}
            {...prop}
        >
            {processing ? (
                <div className="spinner-border spinner-border-sm text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <i className="far fa-trash-alt"></i>
            )}
        </Link>
    );
}

export default DeleteBtn;