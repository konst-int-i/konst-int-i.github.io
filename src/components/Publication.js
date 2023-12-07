import React from 'react';


function Publication({ teaserImage, title, venue, authors, codeLink, paperLink }) {
  return (
    <div className="publication-container">
      <div className="publication-box">
        <div className="publication-box-left">
          <img src={teaserImage} alt={title} className="publication-teaser" />
        </div>
        <div className="publication-box-middle">
          <h3 className="publication-title">{title}</h3>
          <p className="publication-venue">{venue}</p>
          <p className="publication-authors">{authors}</p>
        </div>
        <div className="publication-box-right">
          <div className="publication-icons">
            <a href={paperLink}><img src={'/assets/paper-icon.svg'} alt='Paper Icon' /></a>
            <a href={codeLink}><img src={'/assets/code-icon.svg'} alt='Code Icon' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Publication;