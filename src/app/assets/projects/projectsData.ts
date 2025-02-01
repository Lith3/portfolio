import Cybermate from "../images/projects/Cybermate.webp";
import ReactLogo from "../images/react.svg";
import Node from "../images/node.svg";
import MySql from "../images/mySQL.svg";
import HTML from "../images/html.svg"
import CSS from "../images/css.svg"
import Javascript from "../images/javaScript.svg"
import Labatarde from "../images/projects/labatarde.webp"
import Cretchom from "../images/projects/cretchum.webp"

const myProjects =[{
  id:0,
  name: "CYBERMATE",
  text: "Forum autour du jeux vidéo permetant de créer des topics sur divers sujets et echanger en instantané avec d'autre personnes. Le site permet entre autre la création d'un compte, de choisir une image de profil et de pouvoir modifier ses informations de créer un topic et d'envoyer des message sur un topic",
  picture: Cybermate,
  alt: "Screenshot of cybermate's sign up page",
  repo: "https://github.com/Lith3/CyberMate",
  webSite: undefined,
  techs: [
    { techName: "React", techLogo: ReactLogo },
    { techName: "Node", techLogo: Node },
    { techName: "MySql", techLogo: MySql },
  ],
},
{
  id:1,
  name: "La Batarde.com",
  text: 'Refonte du site existant du jeu de carte La Batarde. Récupération des informations sur le site et mise à jour graphique du contenu pour moderniser le site vitrine du jeu de carte La Batarde.',
  picture: Labatarde,
  alt: "Screenshot du site Labatarde.com",
  repo: undefined,
  webSite: "https://www.labatarde.com/decouverte/decouverte.html",
  techs: [
    { techName: "HTML", techLogo: HTML },
    { techName: "CSS", techLogo: CSS },
    { techName: "JavaScript", techLogo: Javascript },
  ],
},{
  id:2,
  name: "Cretchom",
  text: "Application mettant en relation des propriétaires d'animaux de compagnie voulant faire garder leurs compagnons avec des pet sitters.",
  picture: Cretchom,
  alt: "Screenshot de la page de recherche de Cretchom",
  repo:"https://github.com/Lith3/Cretchom",
  webSite: undefined,
  techs: [
    { techName: "React", techLogo: ReactLogo },
    { techName: "Node", techLogo: Node },
    { techName: "MySql", techLogo: MySql },
  ],
},{
  id:3,
  name: "Test",
  text: "Application mettant en relation des propriétaires d'animaux de compagnie voulant faire garder leurs compagnons avec des pet sitters.",
  picture: Cretchom,
  alt: "Screenshot de la page de recherche de Cretchom",
  repo:"https://github.com/Lith3/Cretchom",
  webSite: undefined,
  techs: [
    { techName: "React", techLogo: ReactLogo },
    { techName: "Node", techLogo: Node },
    { techName: "MySql", techLogo: MySql },
  ],
}];

export default myProjects;
