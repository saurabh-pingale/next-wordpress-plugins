import { PluginContext } from "../../src/react/PluginContext";
import { useContext, useState } from "react";
import axios from "axios";

interface Result {
    id: number; 
    title: string; 
    url: string 
}

function SearchPage() {
    const { pluginSystem } = useContext(PluginContext);
    if (!pluginSystem) return <div>PluginSystem not found</div>;

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Result[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        if(!query) {
            setError("Please enter a search term.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await searchQuery();
            setResults(response.results);
        } catch (error) {
            setError("Failed to fetch search results.");
        } finally {
            setLoading(false);
        }
    };

    const searchQuery = async () => {
        const res = await axios.get(`/api/search?query=${query}`);
        return res.data;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Search</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your search query..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={handleSearch}
                            disabled={loading}
                        >
                            {loading ? "Searching..." : "Search"}
                        </button>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mt-4">
                        {results.length > 0 ? (
                            <ul className="list-group">
                                {results.map((result) => (
                                    <li key={result.id} className="list-group-item">
                                        <a href={result.url} target="_blank" rel="noopener noreferrer">
                                            {result.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center">No results found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;