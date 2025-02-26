import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  standalone: true,
  imports: [FadeDirective]
})
export class AboutComponent {
  getYearsSince(): string {
    const date = new Date("2021-12-01");
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    return `${years.toFixed(1)} Years`;
  }
}
