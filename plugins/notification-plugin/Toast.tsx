import React from "react";

interface ToastProps {
    message: string;
    show: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
    return (
        <div className={`toast position-fixed bottom-0 start-50 translate-middle-x ${show ? "show" : ""}`} role="alert">
            <div className="toast-header">
                <strong className="me-auto">Notification</strong>
                <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="toast-body">{message}</div>
        </div>
    );
};

export default Toast;
