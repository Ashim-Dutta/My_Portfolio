/**
 * Projects Animation Module
 * Handles interactive animations and effects for the projects page
 * Pure CSS-based animations with JavaScript enhancements
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add interactivity to blobs on scroll
  const blobs = document.querySelectorAll('.blob');
  
  const handleScroll = () => {
    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    blobs.forEach((blob, index) => {
      const offset = scrollProgress * 30 * (index + 1);
      blob.style.transform = `translateY(${offset}px)`;
    });
  };

  // Throttle scroll handler for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
      setTimeout(() => { ticking = false; }, 16);
    }
  });

  // Add mouse move parallax effect (subtle)
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
      const xOffset = (x - 0.5) * 10 * (index + 1);
      const yOffset = (y - 0.5) * 10 * (index + 1);
      blob.style.setProperty('--mouse-x', `${xOffset}px`);
      blob.style.setProperty('--mouse-y', `${yOffset}px`);
    });
  });
});

// Support for prefers-reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.blob').forEach(blob => {
    blob.style.animationPlayState = 'paused';
  });
}
