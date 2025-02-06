import Cybermate from "../images/projects/Cybermate.webp";
import ReactLogo from "../images/react.svg";
import Node from "../images/node.svg";
import MySql from "../images/mySQL.svg";
import HTML from "../images/html.svg"
import CSS from "../images/css.svg"
import Javascript from "../images/javaScript.svg"
import Labatarde from "../images/projects/labatarde.webp"
import Cretchom from "../images/projects/cretchum.webp"
import TypeScript from "../images/typeScript.svg"
import NextJsLogo from "../images/nextJs.svg"
import Portfolio from "../images/projects/portfolio.webp"

const myProjects =[{
  id:0,
  name: "CYBERMATE",
  text: "Forum autour des jeux vidéo permettant de créer des topics sur divers sujets et échanger en instantané avec d'autres personnes. Le site permet entre autres la création d'un compte, de choisir une image de profil et de pouvoir modifier ses informations de créer un topic et d'envoyer des messages sur un topic.",
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
  text: 'Refonte du site existant du jeu de cartes La Batarde. Récupération des informations sur le site et mise à jour graphique du contenu pour moderniser le site vitrine du jeu de carte La Batarde.',
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
  text: "Application mettant en relation des propriétaires d'animaux de compagnie voulant faire garder leurs compagnons avec des pets sitters.",
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
  name: "Portfolio",
  text: "Site web présentant mon parcours, mes projets et mes compétences en développement. Conçu avec TypeScript, React et Next.js",
  picture: Portfolio,
  alt: "Screenshot de la page page principal de ce site",
  repo:"https://github.com/Lith3/portfolio",
  webSite: "https://leafy-bombolone-cbdb3b.netlify.app/",
  techs: [
    { techName: "TypeScript", techLogo: TypeScript },
    { techName: "React", techLogo: ReactLogo },
    { techName: "NextJs", techLogo: NextJsLogo },
  ],
}];

export default myProjects;
