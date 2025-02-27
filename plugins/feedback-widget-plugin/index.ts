import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "@/src/plugin-system/core/IPlugin";

import FeedbackWidget from "./FeedbackWidget";

class FeedbackWidgetPlugin implements IPlugin {
    name = "feedback-widget-plugin";
    version = "0.0.1";

    pluginSystem: PluginSystem;

    constructor(pluginSystem: PluginSystem) {
        this.pluginSystem = pluginSystem;
    }

    async boot() {
        this.pluginSystem.registerComponent({
            name: "FeedbackWidget",
            component: FeedbackWidget,
        });
    }
}

export default FeedbackWidgetPlugin;