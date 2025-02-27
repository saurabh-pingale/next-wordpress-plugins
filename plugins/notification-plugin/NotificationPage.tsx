import { useState } from "react";
import Toast from "./Toast";

function NotificationPage() {
    const [message, setMessage] = useState<string | null>(null);
    const [show, setShow] = useState(false);

    const showToast = (msg: string) => {
        setMessage(msg);
        handleShowToast();
    };

    const handleShowToast = () => {
        setShow(true);
        setTimeout(() => handleHideToast(), 3000);
    }

    const handleHideToast = () => {
        setShow(false);
        setTimeout(() => setMessage(null), 500);
    };


    return (
        <div className="container text-center mt-4">
            <h1>Notification Plugin</h1>
            <button className="btn btn-primary mt-3" onClick={() => showToast("This is a success message!")}>
                Show Notification
            </button>

            {message && <Toast message={message} show={show} onClose={() => handleHideToast()} />}
        </div>
    );
}

export default NotificationPage;
