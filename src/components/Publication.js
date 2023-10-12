import React from 'react';

function Publication({ title, venue, codeLink, paperLink }) {
  return (
    <div>
      <h2 className="section-heading">{title}</h3>
      <p>{venue}</p>
      <a href={codeLink}>Code</a>
      <a href={paperLink}>Paper</a>
    </div>
  );
}

export default Publication;