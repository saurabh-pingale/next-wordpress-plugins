import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { PluginContext } from "@/src/react/PluginContext";

function Login() {
    const { pluginSystem } = useContext(PluginContext);
    if (!pluginSystem) return <div className="text-danger text-center mt-4">PluginSystem not found</div>;

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await performLogin();
            router.push('/success');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        } 
    };

    const performLogin = async () => {
        const res = await axios.post('/api/login', { email, password });
        return res.data;
    }

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="bg-white p-4 rounded shadow w-25">
                <h2 className="text-center mb-4">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
