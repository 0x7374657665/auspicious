import { bindable } from "aurelia-framework";

export class AuspHeader {

  @bindable() 
  auspTitle: string;

  @bindable()
  subtitle: string;

  constructor(title: string, subtitle: string='') {
    this.auspTitle = title;
    this.subtitle = subtitle;
  }
}
