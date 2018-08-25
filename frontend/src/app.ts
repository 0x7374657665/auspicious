import { RouterConfiguration, Router } from "aurelia-router";
import { routes } from "./shell/routes";

export class App {
  message = "Steve was here.";

  logClick(event: Event) {
    console.log("button was clicked", event.target);
  }

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Auspicious Frontend";
    config.options.pushState = true;
    config.options.root = "/";
    config.map(routes);
  }
}
