import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "@/src/plugin-system/core/IPlugin";

import SearchPage from './SearchPage';

class SearchPlugin implements IPlugin {
    name = "search-plugin";
    version = "0.0.1";

    pluginSystem: PluginSystem;

    constructor(pluginSystem: PluginSystem){
        this.pluginSystem = pluginSystem;
    }

    async boot() {
        this.pluginSystem.registerRoute({
            route: "/search",
            component: SearchPage,
            apiRoute: "/api/search",
        });

        this.pluginSystem.registerApiRoute({
            route: "/api/search",
            handler: function async(req: any, res: any) {
                try {
                    if(req.method === 'GET') {
                        const { query } = req.query;
                        
                        const data = [
                            { id: 1, title: "Next.js Documentation", url: "https://nextjs.org/docs" },
                            { id: 2, title: "React Documentation", url: "https://reactjs.org/docs" },
                            { id: 3, title: "TypeScript Documentation", url: "https://www.typescriptlang.org/docs" },
                        ];

                        const results = data.filter((item) =>
                            item.title.toLowerCase().includes(query.toLowerCase())
                        );

                        return res.status(200).json({ results });
                    } else {
                        return res.status(405).json({ message: "Method not allowed" });
                    }
                } catch (error) {
                    console.error(error);
                    return res.status(405).json({ message: "Server error" });
                }
            }
        })
    }
}

export default SearchPlugin;