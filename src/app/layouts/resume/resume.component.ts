import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  standalone: true,
  imports: [FadeDirective, CommonModule]
})
export class ResumeComponent {

  experiences = [
    {
      title: 'Software Developer',
      company: 'Rheal Software',
      location: 'Hybrid',
      period: 'Jan 2022 - Present',
      employmentType: 'Full Time',
      description:
        `
      Developed and maintained web applications using Angular, ASP.NET, and MSSQL, ensuring responsive and user-friendly interfaces.
      Implemented RESTful APIs, authentication mechanisms, and data validation to enhance security and performance.
      Transformed requirements into functional applications aligned with business objectives.
      Upgraded existing applications, resolved issues, and optimized code structure to improve efficiency and performance.
      `,
      delay: 0
    },
    {
      title: 'Programmer Trainee',
      company: 'Cognizant',
      location: 'Remote',
      period: 'Dec 2021 - Jan 2022',
      employmentType: 'Full Time',
      description: `
      Worked on automated testing using Selenium and Java, ensuring software quality and functionality.
      Designed and executed test cases, identified bugs, and collaborated with the development team to improve application performance.
      Gained hands-on experience in software testing, debugging, and test automation frameworks.
      `,
      delay: 200
    },
    {
      title: 'Storyline Developer',
      company: 'Ecorner Tech Solution',
      location: 'Remote',
      period: 'Nov 2020 - Aug 2021',
      employmentType: 'Part Time',
      description:
        `
      Develop eLearning courses, simulations, and assessments using Articulate Storyline, integrating multimedia elements like audio, video, and animations to enhance the learning experience.
      Created custom templates and responsive designs to ensure accessibility across all devices.
      My work involves writing clear and concise instructional content aligned with instructional design principles while ensuring compatibility with various LMS platforms and meeting accessibility standards.
      Effectively manage multiple projects, maintaining high-quality standards and meeting deadlines.
      `,
      delay: 400
    }
  ];

  educationList = [
    { date: '2020-2022', title: 'Master in Computer Application', institute: 'Indira Gandhi College of Engineering and Management , Pune University' },
    { date: '2017-2020', title: 'Bachelor of Computer Science', institute: 'SMBST College, Pune University' },
    { date: '2016-2017', title: 'Higher Secondary Education', institute: 'Dnyanmata Junior College , Nimgaon BK' },
    { date: '2014-2015', title: 'Secondary School Education', institute: 'Shree Dnayaneshwar English School, Nimgaon BK' }
  ];

  skills = [
    { title: 'C#', percentage: 90 },
    { title: 'ASP.NET Core', percentage: 95 },
    { title: 'Angular', percentage: 90 },
    { title: 'SQL Server', percentage: 92 },
    { title: 'TypeScript', percentage: 95 },
    { title: 'JavaScript', percentage: 95 },
    { title: 'JQuery', percentage: 90 },
    { title: 'Entity Framework', percentage: 98 },
    { title: 'Dapper', percentage: 90 },
    { title: 'Github', percentage: 90 },
    { title: 'Postman', percentage: 85 },
    { title: 'Blazor', percentage: 90 },
    { title: 'IIS Deployment', percentage: 80 },
    { title: 'Azure DEVOPS', percentage: 80 },
    { title: 'Azure Services', percentage: 78 },
    { title: 'Core Java', percentage: 70 }
  ];

  setSkillProgress(value: number) {
    return { width: `${value}%` };
  }
}
