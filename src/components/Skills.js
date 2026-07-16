import React from 'react';
import './Skills.css';

const categories = [
  {
    id: 'langages',
    title: 'Langages & Programmation',
    accent: 'copper',
    items: ['C', 'C++', 'Python', 'Matlab'],
  },
  {
    id: 'automatisme',
    title: 'Automatisme & Contrôle',
    accent: 'teal',
    items: ['Ladder / Grafcet', 'ClassicLadder', 'Arduino', 'Automates programmables'],
  },
  {
    id: 'robotique',
    title: 'Robotique & Embarqué',
    accent: 'copper',
    items: ['Robot Niryo', 'Capteurs & IoT', 'Détection infrarouge', 'Séquences automatisées'],
  },
  {
    id: 'outils',
    title: 'Conception & Méthodes',
    accent: 'teal',
    items: ['SolidWorks', '5S', 'Ishikawa / 5 Pourquoi', 'SMART'],
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