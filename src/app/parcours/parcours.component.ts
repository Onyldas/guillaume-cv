import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  years = [
    {
      y: "2020",
      class: "2020-2021 : ",
      title: "Redoublement",
      right: false,
      image_link: "https://www.mydigitalschool.com/ecole-multimedia-rennes",
      image_path: "assets/images/mds52.svg",
      image_alt: "My Digital School",
      text: "Ayant loupé trop de cours pendant la période du confinement, dû à des problèmes de santé, je redouble mon année de master2." +
        " Etant donné que je n'ai que peu de matières à rattraper, je peux m'attarder sur d'autres projets professionnels comme par exemple" +
        " la construction de ce site web. Je repasse donc en tant que candidat libre les matières que j'ai loupé."
    },
    {
      y: "2019",
      class: "2019-2020 : ",
      title: "MBA2 Expert SI chez My Digital School",
      right: true,
      image_link: "https://www.mydigitalschool.com/ecole-multimedia-rennes",
      image_path: "assets/images/mds5.svg",
      image_alt: "My Digital School",
      text: "Je passe en master 2. Du temps nous est accordé en plus pour préparer un projet se nommant My Digital Startup. Ce projet sur 2 ans " +
        "nous a mis, mon groupe et moi, dans la peau de jeunes startupeurs qui doivent innover avec une application à mettre sur le marché." +
        " A cause de problèmes de santé, j'ai eu du mal à suivre les cours pendant la période du confinement. Cependant, j'ai pu valider" +
        " le projet My Digital Startup avec mon groupe en fin d'année."
    },
    {
      y: "2018",
      class: "2018-2019 : ",
      title: "MBA1 Expert SI chez My Digital School",
      right: false,
      image_link: "https://www.mydigitalschool.com/ecole-multimedia-rennes",
      image_path: "assets/images/mds4.svg",
      image_alt: "My Digital School",
      text: "J'intègre l'école My Digital School pour passer un master MBA Expert SI. Les principales matières sont orientées autour de la programmation," +
        " domaine qui me convient bien mieux que celui de l'ingénieur. Cette formation se fait en alternance. C'est donc à ce moment là que j'ai intégré" +
        "Agromousquetaires en tant que chef de projet. Le rythme de l'alternance est d'environ 2semaines/4."
    },
    {
      y: "2017",
      class: "2017-2018 : ",
      title: "OpenClassrooms",
      right: true,
      image_link: "https://openclassrooms.com/fr/paths/191-developpeur-dapplication-java",
      image_path: "assets/images/oc.svg",
      image_alt: "OpenClassrooms - Développeur Java",
      text: "Parcours diplômant avec OpenClassrooms en tant que Developpeur d'application Java." +
        "Reprendre les bases de la programmation en Java. Le parcours est constitué de 12 projets évalués chacun, par une soutenance vidéo." +
        " Un mentor suit nos performances toutes les semaines par visioconférence. Il est là pour nous aider et nous corriger si besoin" +
        " avant la soutenance. J'ai beaucoup aimé cette façon de travailler. Cela a boosté mes capacités à être autodidacte."
    },
    {
      y: "2016",
      class: "2016-2017 : ",
      title: "ECAM Rennes, 3e année du cycle d'ingénieur",
      right: false,
      image_link: "#",
      image_path: "assets/images/ecam.svg",
      image_alt: "Cliquez pour accéder au site de l'ECAM",
      text: "Après le passage des concours, mon choix s'est porté sur une école d'ingénieurs généraliste\n" +
        "            à Ker Lann, un campus d'étudiants situé près de Rennes. Grâce à eux j'ai pu m'initier au langage Java, et\n" +
        "            ai approfondi mes connaissances dans plein d'autres matières (maths, physique, ondes, chimie, elec, sciences\n" +
        "            de l'ingénieur etc...).\n" +
        "            \n\nC'est à ce moment précis que j'ai su que je voulais plutôt m'orienter vers l'informatique et le\n" +
        "            développement. J'ai alors fini ma 3e année et c'est en passant en 4e année d'ECAM que j'ai quitté l'école.\n" +
        "            Je n'ai aujourd'hui jamais regretté ce choix."
    },
    {
      y: "2015",
      class: "2015-2016 : ",
      title: "CPGE PSI",
      right: true,
      image_link: "#",
      image_path: "assets/images/psi.svg",
      image_alt: "psi.svg",
      text: "La deuxième étape de mon parcours en classe préparatoire. Toujours aussi complexes et longs, les cours de prépa m'ont permis d'acquérir une rigueur au travail et d'encaisser une quantité non négligeable de stress." +
        "Avec plusieurs khôlles et devoirs par semaine, le rythme de travail était très élevé. " +
        "J'ai pu à la fin de l'année passer les concours CCP et e3a pour trouver des écoles d'ingénieurs."
    },
    {
      y: "2014",
      class: "2014-2015 : ",
      title: "CPGE MPSI",
      right: false,
      image_link: "#",
      image_path: "assets/images/mpsi.svg",
      image_alt: "mpsi.svg",
      text: "Après avoir obtenu mon bac S spé Maths mention Bien, je me dirige vers une classe préparatoire MPSI (Maths Physique Sciences de l'Ingénieur)." +
        " La différence de niveau entre le lycée et la classe prépartoire a été vraiment difficile à surmonter."
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
