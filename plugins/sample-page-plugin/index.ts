import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";

import SamplePage from "./sample-page";

class SamplePagePlugin implements IPlugin {
  name = "sample-page-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerRoute({
      route: "/sample-page",
      component: SamplePage,
    });
  }
}

export default SamplePagePlugin;
