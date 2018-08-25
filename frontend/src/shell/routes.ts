import {RouteConfig} from 'aurelia-router'
import { PLATFORM } from 'aurelia-pal';

export const routes: RouteConfig[] = [
  {
    route: '/login',
    name: 'login',
    moduleId: PLATFORM.moduleName('screens/login/login')
  },
  {
    route: '/',
    name: 'home',
    moduleId: PLATFORM.moduleName('screens/home/home')
  }
];
