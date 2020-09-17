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
      text: "Lorem ipsum dolor sit amet",
      link: "assets/images/graduation.png",
      image_alt: "graduation"
    },
    {
      title: "Mes compétences",
      text: "Lorem ipsum dolor sit amet",
      link: "assets/images/skills.png",
      image_alt: "skills"
    },
    {
      title: "Mes expériences",
      text: "Lorem ipsum dolor sit amet",
      link: "assets/images/experiences.png",
      image_alt: "experiences"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
