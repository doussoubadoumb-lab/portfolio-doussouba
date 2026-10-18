import React, { useEffect, useState } from 'react';
import './Projects.css';

// video: identifiant de la vidéo YouTube (non répertoriée), ou null s'il n'y en a pas
const projects = [
  {
    id: 'niryo',
    tag: 'PROJ-01',
    title: 'Robot Niryo',
    description:
      "Pilotage d'un bras robotisé industriel : conception de séquences automatisées, détection infrarouge, et gestion de convoyeur pour le tri d'objets.",
    stack: ['Robotique', 'Automatisme', 'Python'],
    video: '06_djt-d_m8',
  },
  {
    id: 'pic',
    tag: 'PROJ-02',
    title: 'Microcontrôleur PIC16F887',
    description:
      "Programmation en assembleur d'un PIC16F887 : configuration des ports et des registres, lecture d'un bouton poussoir et commande de deux LED en bascule, avec temporisations.",
    stack: ['Assembleur', 'PIC', 'Systèmes embarqués'],
    video: 'ma2_3EXccJY',
  },
  {
    id: 'tp-elec',
    tag: 'PROJ-03',
    title: 'TP Électronique',
    description:
      "Mesures à l'oscilloscope et étude de circuits RC/RL : déphasage, filtres passe-bas et passe-haut, fréquence de coupure, résonance.",
    stack: ['Oscilloscope', 'Filtres', 'Mesures'],
    video: 'yO0nc-aRCxo',
  },
  {
    id: 'tp-auto',
    tag: 'PROJ-04',
    title: 'TP Automatique',
    description:
      "Identification d'un moteur à courant continu en boucle ouverte : réponse à un échelon, temps de réponse à 5 %, calcul de la constante de temps et de l'inertie.",
    stack: ['Automatique', 'Moteur CC', 'Identification'],
    video: null,
  },
  {
    id: 'denniba',
    tag: 'PROJ-05',
    title: 'Den ni Ba',
    description:
      "Site e-commerce pour une boutique de vêtements bébé, avec gestion des produits, upload d'images côté admin et déploiement en production.",
    stack: ['React', 'Firebase', 'Vercel'],
    video: null,
  },
  {
    id: 'portfolio',
    tag: 'PROJ-06',
    title: 'Ce portfolio',
    description:
      "Conçu et codé de A à Z en React, avec un thème inspiré des circuits imprimés et des animations SVG faites main.",
    stack: ['React', 'CSS', 'SVG'],
    video: null,
  },
];

function VideoModal({ project, onClose }) {
  // fermer avec la touche Échap et bloquer le défilement de la page
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div className="video-modal" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Vidéo : ${project.title}`}>
      <div className="video-modal__box" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal__header">
          <span className="video-modal__title">{project.title}</span>
          <button className="video-modal__close" onClick={onClose} aria-label="Fermer la vidéo">×</button>
        </div>
        <div className="video-modal__frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.video}?autoplay=1&rel=0`}
            title={project.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState(null);

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
            {p.video && (
              <button className="projects__video-btn" onClick={() => setActive(p)}>
                <span className="projects__video-icon" aria-hidden="true">▶</span>
                Voir la vidéo
              </button>
            )}
          </div>
        ))}
      </div>

      {active && <VideoModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

export default Projects;
