import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "@/src/plugin-system/core/IPlugin";

import Login from "./login";
import SuccessPage from "./successPage";

class AuthPlugin implements IPlugin {
    name = "auth-page-plugin";
    version = "0.0.1";

    pluginSystem: PluginSystem;

    constructor(pluginSystem: PluginSystem){
        this.pluginSystem = pluginSystem;
    }

    async boot() {
        this.pluginSystem.registerRoute({
            route: "/login",
            component: Login,
            apiRoute: "/api/login",
        });

        this.pluginSystem.registerRoute({
            route: "/success",
            component: SuccessPage,
            apiRoute: "/api/logout",
        })

        this.pluginSystem.registerApiRoute({
            route: '/api/login',
            handler: function(req: any, res: any) {
                try {
                    if(req.method === 'POST') {
                        const {email, password} = req.body;
                        console.log("Body:", req.body);
                        
                        const users = [
                            {
                                id: 1,
                                userEmail: "saurabh.pingale@formpilot.org",
                                userPassword: "Saurabh@78"
                            }
                        ];

                        const user = users.find((u) => u.userEmail === email && u.userPassword === password);

                        if(user) { 
                            return res.status(200).json({ message: "Login Suceessful!" });
                        } else {
                            res.status(404).json({ message: "Invalid Credentials! Try Again." });
                        }
                    } else {
                        res.status(405).json({ message: "Method not allowed!"});
                    }
                    
                } catch (error) {
                    res.status(500).json({ message: "Server Error." });
                }
            }
        });

        this.pluginSystem.registerApiRoute({
            route: "api/logout",
            handler: function(req: any, res: any) {
                if(req.method === 'POST') {
                    return res.status(200).json({ message: "Logout Successfully!" });
                }
            }
        });
    }
}

export default AuthPlugin;