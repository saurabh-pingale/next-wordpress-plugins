import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "@/src/plugin-system/core/IPlugin";

import RatingPopup from "./RatingPopup";

class RatingPlugin implements IPlugin {
    name = "rating-plugin";
    version = "0.0.1";

    pluginSystem: PluginSystem;

    constructor(pluginSystem: PluginSystem){
        this.pluginSystem = pluginSystem;
    }

    async boot() {
        this.pluginSystem.registerComponent({
            name: "RatingPopup",
            component: RatingPopup
        });
    }
}

export default RatingPlugin;