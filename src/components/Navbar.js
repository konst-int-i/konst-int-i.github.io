import React, { useEffect, useState } from 'react';

const sections = [
  ['home', 'Home'],
  ['research', 'Research'],
  ['teaching', 'Teaching'],
  ['awards', 'Awards'],
  ['about', 'About'],
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    let frame;
    const update = () => {
      const offset = (document.querySelector('.navbar')?.offsetHeight || 68) + 40;
      let current = 'home';
      sections.forEach(([id]) => {
        if (document.getElementById(id)?.getBoundingClientRect().top <= offset) current = id;
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = 'about';
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-links">
        {sections.map(([id, label]) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>
        ))}
      </div>
    </nav>
  );
}
