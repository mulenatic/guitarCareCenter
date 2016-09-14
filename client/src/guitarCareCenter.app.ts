require("expose?$!expose?jQuery!jquery");
require("bootstrap-webpack");

import * as angular from "angular";
import "angular-route";

import navigation from "./components/Navigation/Navigation";
import guitarCreator from "./components/GuitarCreator/GuitarCreator";

import GuitarService from "./services/GuitarService";

import routes from "./routes";

let app = angular.module("guitarCareCenterApp", ["ngRoute", guitarCreator, routes, navigation, GuitarService]);

