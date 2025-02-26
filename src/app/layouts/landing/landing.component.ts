import { NgOptimizedImage } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";
import { Subscription } from "rxjs";
import { ThemeService } from "src/app/services/theme.service";
import { Mode } from "src/app/components/theme-switcher/theme-options";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  standalone: true,
  imports: [NgOptimizedImage, FadeDirective]
})
export class LandingComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.subscription = this.themeService.currentValue.subscribe(value => {
      if (this.themeService.checkTheme(value) === Mode.LIGHT) {

      } else {

      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
