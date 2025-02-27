import { PluginContext } from "@/src/react/PluginContext";
import { useContext } from "react";

function SamplePage() {
    const { pluginSystem } = useContext(PluginContext);
    if(!pluginSystem) return <div>PluginSystem not found</div>

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Sample Page</h1>
            <p>This is my first plugin</p>
        </div>
    )
}

export default SamplePage;