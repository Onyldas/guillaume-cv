import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
