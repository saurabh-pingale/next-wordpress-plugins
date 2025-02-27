import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "@/src/plugin-system/core/IPlugin";

import NotificationPage from "./NotificationPage";

class NotificationPlugin implements IPlugin {
    name = "notification-plugin";
    version = "0.0.1";

    pluginSystem: PluginSystem;

    constructor(pluginSystem: PluginSystem) {
        this.pluginSystem = pluginSystem;
    }

    async boot() {
        this.pluginSystem.registerRoute({
            route: "/notifications",
            component: NotificationPage,
        });
    }
}

export default NotificationPlugin;
