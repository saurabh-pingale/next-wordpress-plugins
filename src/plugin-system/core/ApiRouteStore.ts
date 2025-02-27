import React from "react";
import { IApiRouteDefinition } from "./IApiRouteDefinition";

class ApiRouteStore {
    registeredApiRoutes: { [key: string]: IApiRouteDefinition };

    constructor() {
        this.registeredApiRoutes = {};
    }

    registerApiRoute(apiRouteDefinition: IApiRouteDefinition) {
        this.registeredApiRoutes[apiRouteDefinition.route] = apiRouteDefinition;
    }

    getApiRoute(route: string) {
        return this.registeredApiRoutes[route];
    }

    getAllApiRouteDefinitions() {
        return this.registeredApiRoutes;
    }
}

export default ApiRouteStore;