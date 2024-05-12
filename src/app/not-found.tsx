import Link from "next/link";
import AppLinks from "@/constants/appLinks";

export default function NotFound() {
    return (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-primary mb-4">404</h1>
                <p className="fs-3 text-uppercase text-secondary mb-4">Página no encontrada</p>
                <p className="text-muted mb-5">
                    La página que estás buscando no existe o ha sido movida.
                </p>
                <Link href={AppLinks.HOME.toString()} className="btn btn-primary btn-lg">Volver al inicio</Link>
            </div>
        </div>
    );
}