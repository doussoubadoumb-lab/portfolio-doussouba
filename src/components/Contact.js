import React from 'react';
import './Contact.css';

const links = [
  {
    id: 'email',
    label: 'Email',
    value: 'doussoubadoumb@gmail.com',
    href: 'mailto:doussoubadoumb@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'doussouba-doumbia',
    href: 'https://www.linkedin.com/in/doussouba-doumbia-801b05396',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'doussoubadoumb-lab',
    href: 'https://github.com/doussoubadoumb-lab',
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact__eyebrow">{'// Contact'}</p>
      <h2 className="contact__title">
        Une alternance à pourvoir, un projet à discuter ?
      </h2>
      <p className="contact__body">
        Je suis à la recherche d'une alternance de 12 à 24 mois dès septembre 2026,
        ouverte à toute la France. N'hésite pas à me contacter directement.
      </p>

      <div className="contact__links">
        {links.map((l) => (
          <a
            href={l.href}
            key={l.id}
            className="contact__pin"
            target={l.id !== 'email' ? '_blank' : undefined}
            rel={l.id !== 'email' ? 'noopener noreferrer' : undefined}
          >
            <span className="contact__pin-dot" />
            <span className="contact__pin-text">
              <span className="contact__pin-label">{l.label}</span>
              <span className="contact__pin-value">{l.value}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;