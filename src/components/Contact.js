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
        Un stage, une alternance, un projet à discuter ?
      </h2>
      <p className="contact__body">
        Je recherche un stage de deux mois entre mars et juin 2027, ou une alternance
        dès que possible, partout en France. N'hésitez pas à me contacter directement.
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
