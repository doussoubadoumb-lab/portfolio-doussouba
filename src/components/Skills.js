import React from 'react';
import './Skills.css';

const categories = [
  {
    id: 'langages',
    title: 'Langages & Programmation',
    accent: 'copper',
    items: ['C', 'C++', 'Python', 'Assembleur (PIC)', 'Spyder', 'Matlab'],
  },
  {
    id: 'web',
    title: 'Développement web',
    accent: 'teal',
    items: ['HTML / CSS', 'JavaScript', 'PHP', 'MySQL', 'React'],
  },
  {
    id: 'automatisme',
    title: 'Automatisme & Contrôle',
    accent: 'copper',
    items: ['Ladder / Grafcet', 'ClassicLadder', 'Arduino', 'Automates programmables'],
  },
  {
    id: 'maintenance',
    title: 'Électrotechnique & Maintenance',
    accent: 'teal',
    items: ['Circuits & mesures électriques', 'Mesures à l\u2019oscilloscope', 'Diagnostic de pannes'],
  },
  {
    id: 'amelioration',
    title: 'Amélioration continue',
    accent: 'copper',
    items: ['Diagramme d\u2019Ishikawa', 'Méthode des 5 Pourquoi', '5S', 'Objectifs SMART', 'Analyse des causes racines'],
  },
  {
    id: 'robotique',
    title: 'Robotique & Embarqué',
    accent: 'teal',
    items: ['Robot Niryo', 'Capteurs & IoT', 'Détection infrarouge', 'Séquences automatisées'],
  },
  {
    id: 'cao-data',
    title: 'CAO & Data',
    accent: 'copper',
    items: ['SolidWorks', 'Power BI', 'Excel avancé (TCD, tableaux de bord)'],
  },
  {
    id: 'bureautique',
    title: 'Bureautique',
    accent: 'teal',
    items: ['Word', 'Excel', 'PowerPoint'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="skills__eyebrow">{'// Compétences'}</p>
      <h2 className="skills__title">Les composants de ma boîte à outils.</h2>

      <div className="skills__grid">
        {categories.map((cat) => (
          <div className="skills__card" key={cat.id}>
            <h3 className="skills__card-title">{cat.title}</h3>
            <div className="skills__tags">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`skills__tag skills__tag--${cat.accent}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
