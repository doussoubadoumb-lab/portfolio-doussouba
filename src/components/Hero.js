import React from 'react';
import './Hero.css';

const nodes = [
  { id: 'robotique', label: 'Robotique', x: 60, y: 40 },
  { id: 'automatisme', label: 'Automatisme', x: 260, y: 20 },
  { id: 'energie', label: 'Énergie', x: 300, y: 160 },
  { id: 'embarque', label: 'Embarqué', x: 80, y: 190 },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__eyebrow">{'// Doussouba Doumbia'}</p>
        <h1 className="hero__title">
          Je conçois des systèmes<br />qui bougent, mesurent<br />et s'automatisent.
        </h1>
        <p className="hero__subtitle">
          Étudiante en Électronique, Énergie &amp; Automatisme (L3 EEA — Université Jean Monnet),
          à la recherche d'une alternance dès septembre 2026. Robotique, automatisme industriel,
          électronique embarquée, capteurs &amp; IoT.
        </p>
        <div className="hero__actions">
          <a href="#projets" className="btn btn--primary">Voir mes projets</a>
          <a href="#contact" className="btn btn--ghost">Me contacter</a>
        </div>
      </div>

      <div className="hero__circuit" aria-hidden="true">
        <svg viewBox="0 0 360 220" className="circuit-svg">
          {nodes.map((n, i) => (
            <line
              key={`trace-${n.id}`}
              x1="180" y1="110"
              x2={n.x} y2={n.y}
              className="circuit-trace"
              style={{ animationDelay: `${0.3 + i * 0.15}s` }}
            />
          ))}

          <circle cx="180" cy="110" r="14" className="circuit-hub" />
          <circle cx="180" cy="110" r="5" className="circuit-hub-led" />

          {nodes.map((n, i) => (
            <g key={n.id} className="circuit-node" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
              <circle cx={n.x} cy={n.y} r="6" className="circuit-node-dot" />
              <text
                x={n.x + (n.x < 180 ? -10 : 10)}
                y={n.y + 4}
                textAnchor={n.x < 180 ? 'end' : 'start'}
                className="circuit-node-label"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}

export default Hero;