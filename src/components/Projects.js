import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 'niryo',
    tag: 'PROJ-01',
    title: 'Robot Niryo',
    description:
      "Pilotage d'un bras robotisé industriel : conception de séquences automatisées, détection infrarouge, et gestion de convoyeur pour le tri d'objets.",
    stack: ['Robotique', 'Automatisme', 'Python'],
  },
  {
    id: 'denniba',
    tag: 'PROJ-02',
    title: 'Den ni Ba',
    description:
      "Site e-commerce pour une boutique de vêtements bébé, avec gestion des produits, upload d'images côté admin et déploiement en production.",
    stack: ['React', 'Firebase', 'Vercel'],
  },
  {
    id: 'portfolio',
    tag: 'PROJ-03',
    title: 'Ce portfolio',
    description:
      "Le site que tu es en train de regarder : conçu et codé en React, avec un thème inspiré des circuits imprimés et des animations SVG faites main.",
    stack: ['React', 'CSS', 'SVG'],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="projects__eyebrow">{'// Projets'}</p>
      <h2 className="projects__title">Ce que j'ai construit jusqu'ici.</h2>

      <div className="projects__grid">
        {projects.map((p) => (
          <div className="projects__card" key={p.id}>
            <span className="projects__tag">{p.tag}</span>
            <h3 className="projects__card-title">{p.title}</h3>
            <p className="projects__card-desc">{p.description}</p>
            <div className="projects__stack">
              {p.stack.map((s) => (
                <span key={s} className="projects__stack-item">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;