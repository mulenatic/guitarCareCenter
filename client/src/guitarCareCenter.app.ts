import * as angular from "angular";
import "angular-route";

import navigation from "./components/Navigation/Navigation";
import guitarCreator from "./components/GuitarCreator/GuitarCreator";

import routes from "./routes";

let app = angular.module("guitarCareCenterApp", ["ngRoute", guitarCreator, routes, navigation]);

