import React from 'react';

function Publication({ teaserImage, title, venue, codeLink, paperLink }) {
  return (
    <div className="publication-container">
      <div className="publication-box">
        <img src={teaserImage} alt={title} className="publication-teaser" />
        <div className="publication-details">
          <h3 className="publication-title">{title}</h3>
          <p className="publication-venue">{venue}</p>
          <div className="publication-icons">
            <a href={codeLink}><img src="path_to_code_icon.jpg" alt="Code Icon" /></a>
            <a href={paperLink}><img src="path_to_paper_icon.jpg" alt="Paper Icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;