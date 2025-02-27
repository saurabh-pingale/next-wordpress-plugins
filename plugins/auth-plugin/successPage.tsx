import { useContext } from "react";
import { PluginContext } from "@/src/react/PluginContext";
import axios from "axios";
import { useRouter } from "next/router";

function SuccessPage() {
    const { pluginSystem } = useContext(PluginContext);
    if (!pluginSystem) return <div className="text-danger text-center mt-4">PluginSystem not found</div>;

    const router = useRouter();

    const handleLogout = async () => {
        try {
            await axios.post('/api/logout');
            router.push('/login');    
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="bg-white p-4 rounded shadow text-center">
                <h2>Login Successful!</h2>
                <p>Welcome back!</p>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default SuccessPage;