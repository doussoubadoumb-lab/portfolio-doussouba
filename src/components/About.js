import React from 'react';
import './About.css';

const specs = [
  { label: 'Formation', value: "L3 SPI, parcours EEA — Université Jean Monnet" },
  { label: 'Spécialité', value: 'Automatisme · Maintenance industrielle · Robotique' },
  { label: 'Disponibilité', value: 'Alternance dès septembre 2026' },
  { label: 'Mobilité', value: 'Toute la France' },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about__text">
        <p className="about__eyebrow">{'// À propos'}</p>
        <h2 className="about__title">
          Du circuit imprimé à la ligne de code, je conçois pour que ça marche.
        </h2>
        <p className="about__body">
          Je suis en L3 Sciences Pour l'Ingénieur (SPI), parcours EEA — Électronique, Énergie,
          Automatique — après un parcours qui m'a menée du pilotage d'un bras robotisé (projet Niryo,
          séquences automatisées, détection infrarouge) au diagnostic de pannes en environnement
          industriel (diagramme d'Ishikawa, méthode des 5 Pourquoi, 5S) lors d'un stage en génie
          industriel. Ce qui m'anime : comprendre comment un système fonctionne réellement, puis le
          rendre plus fiable, plus performant, ou tout simplement meilleur.
        </p>
      </div>

      <div className="about__datasheet">
        <div className="datasheet__header">
          <span className="datasheet__tag">SPEC-001</span>
          <span className="datasheet__name">D. DOUMBIA</span>
        </div>
        <dl className="datasheet__specs">
          {specs.map((s) => (
            <div className="datasheet__row" key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;
