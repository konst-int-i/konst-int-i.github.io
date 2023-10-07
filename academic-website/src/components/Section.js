import React from 'react';
import Publication from './Publication';
import Award from './Award';

function Section({ title, id, componentType }) {
  // Depending on the section type, you can render different sub-components
  const renderContent = () => {
    switch (componentType) {
      case 'publication':
        return <Publication />;
      case 'award':
        return <Award />;
      // ... other cases
      default:
        return null;
    }
  };

  return (
    <section id={id}>
      <h2>{title}</h2>
      {renderContent()}
    </section>
  );
}

export default Section;
