import React from 'react';
import paperIcon from '../assets/paper-icon.svg';
import codeIcon from '../assets/github.png';

export default function Publication({ id, teaserImage, title, venue, authors, codeLink, paperLink }) {
  return (
    <article className="publication" aria-labelledby={`publication-${id}`}>
      <a className="publication-image-link" href={paperLink} aria-label={`Read ${title}`}>
        <img src={teaserImage} alt={`Overview figure for ${title}`} className="publication-teaser" loading="lazy" width="112" height="112" />
      </a>
      <div className="publication-copy">
        <h3 id={`publication-${id}`}>{title}</h3>
        <p className="publication-venue">{venue}</p>
        <p className="publication-authors">{authors}</p>
      </div>
      <div className="publication-links">
        <a href={paperLink} aria-label={`Paper: ${title}`}><img src={paperIcon} alt="" width="24" height="24" />Paper</a>
        {codeLink && <a href={codeLink} aria-label={`Code: ${title}`}><img src={codeIcon} alt="" width="24" height="24" />Code</a>}
      </div>
    </article>
  );
}
