require("expose?$!expose?jQuery!jquery");
require("bootstrap-webpack");

import * as angular from "angular";
import "angular-route";

import navigation from "./components/Navigation/Navigation";
import GuitarCreator from "./components/GuitarCreator/GuitarCreator";
import GuitarList from "./components/GuitarList/GuitarList";

import GuitarService from "./services/GuitarService";

import routes from "./routes";

let app = angular.module("guitarCareCenterApp", ["ngRoute", GuitarCreator, GuitarList, routes, navigation, GuitarService]);

