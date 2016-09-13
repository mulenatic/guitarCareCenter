import * as angular from "angular";
import "angular-route";

import guitarCreator from "./components/GuitarCreation.component";

import routes from "./routes";

let app = angular.module("guitarCareCenterApp", ["ngRoute", guitarCreator, routes]);

