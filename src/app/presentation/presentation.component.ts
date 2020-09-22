import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  cards = [
    {
      title: "Mon parcours",
      text: "Mon parcours scolaire de la classe préparatoire au master.",
      path: "assets/images/graduation.png",
      image_alt: "graduation",
      link: "/parcours"
    },
    {
      title: "Mes compétences",
      text: "Les différentes compétences que j'ai acquises au fil des années.",
      path: "assets/images/skills.png",
      image_alt: "skills",
      link: "/competences"
    },
    {
      title: "Mes expériences",
      text: "Les différentes expériences en entreprise et personnelles.",
      path: "assets/images/experiences.png",
      image_alt: "experiences",
      link: "/experiences"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
