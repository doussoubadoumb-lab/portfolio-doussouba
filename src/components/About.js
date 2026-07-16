import React from 'react';
import './About.css';

const specs = [
  { label: 'Formation', value: 'L3 EEA — Université Jean Monnet' },
  { label: 'Spécialité', value: 'Automatisme · Robotique · Embarqué' },
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
          Je suis en L3 Électronique, Énergie &amp; Automatisme après un parcours qui
          m'a menée du pilotage d'un bras robotisé (projet Niryo, séquences automatisées,
          détection infrarouge) à l'analyse de flux logistiques en entreprise. Ce qui
          m'anime : comprendre comment un système fonctionne réellement, puis le rendre
          plus fiable, plus intelligent, ou tout simplement meilleur.
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