import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur web",
      icon: web,
    },
    {
      title: "Dévelopeur mobile",
      icon: mobile,
    },
    {
      title: "Développeur backend",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Gérant d'une entreprise de convoyage automobile",
      company_name: "CJS Transexpress",
      date: "Aout 2021 - Février 2022",
      points: [
        "Gestion des itinéraires et horaires de transport des véhicules.",
        "Gestion administrative et comptable de l'entreprise.",
      ],
    },
    {
      title: "Chauffeur-Livreur",
      company_name: "Cogepart",
      date: "2015 - 2020",
      points: [
        "Livraison et récupération des marchandises à partir d'une tournée prédéfinie et sur un périmètre géographique restreint.",
      ],
    },
    {
      title: "Responsable de sécurité de site",
      company_name: "LEAR Corporation (Birmingham, UK)",
      date: "2007 - 2009",
      points: [
        "Superviser et controler les prestations et mesures de préventions et de la sécurités du site (lotissement).",
      ],
    },
  ];
  
  
  export { services, technologies, experiences };