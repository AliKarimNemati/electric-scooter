import Swal from "sweetalert2";

export const useShowAlert = () => {
    function showAlert() {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            width: "20rem",
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: "success",
            title: "added to cart successfully",
        });
    }

    return {
        showAlert
    }
}