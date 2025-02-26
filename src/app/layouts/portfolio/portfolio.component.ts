import { Component } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FadeDirective } from "../../directives/fade.directive";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  standalone: true,
  imports: [FadeDirective, CommonModule]
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Virtgate',
      image: 'assets/img/virtgate.png',
      description: 'Developed and maintained web applications using Angular, ASP.NET, and SQL Server, implementing RESTful APIs, authentication, and performance optimizations to ensure security, efficiency, and user-friendly experiences.',
      liveLink: 'https://virtgate.com/'
    },
    {
      title: 'CHS Healthcare',
      image: 'assets/img/chs.jpg',
      description: 'Implemented Auth0 Single Sign-On (SSO) for seamless access across multiple healthcare applications, enhancing security with token-based authentication and eliminating redundant logins.',
      liveLink: '#',
    },
    {
      title: 'PartSpace',
      image: 'assets/img/partyspace.png',
      description: 'Developed and maintained web applications using Angular, ASP.NET, and SQL Server, implementing RESTful APIs, authentication, and performance optimizations to ensure security, efficiency, and user-friendly experiences.',
      liveLink: 'https://customerpartyspacedev.azurewebsites.net/',
    },
    {
      title: 'Steam Vision',
      image: 'assets/img/steamvision.png',
      description: 'Developed and maintained shipment tracking with integrated map functionality and handled Snowflake queries for data processing. Implemented and optimized these features within a Blazor-based application for enhanced user experience and performance.',
      liveLink: 'https://www.steamlogistics.com/',
    },
    {
      title: 'EMahaSeva Kendra RecordBook',
      image: 'assets/img/setu.png',
      description: 'Developed a record management system for a client operating Setu, Aadhar Kendra, and other service centers. The system enables users to efficiently store, update, and manage daily records, streamlining operations and improving data accessibility.',
      sourceLink: 'https://github.com/mangeshkanawade/E-Maha-Seva-Kendra-Recordbook'
    }
  ];
}
