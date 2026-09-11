import { useEffect, useRef } from "react";

const ParallaxBackground = () => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const shapes = shapesRef.current?.querySelectorAll('.parallax-shape');
      
      shapes?.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (shape as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-bg" ref={shapesRef}>
      <div className="parallax-shape" style={{
        width: '400px',
        height: '400px',
        background: 'var(--primary)',
        top: '10%',
        left: '5%'
      }} />
      <div className="parallax-shape" style={{
        width: '300px',
        height: '300px',
        background: 'var(--secondary)',
        top: '60%',
        right: '10%'
      }} />
      <div className="parallax-shape" style={{
        width: '200px',
        height: '200px',
        background: 'var(--accent)',
        top: '30%',
        right: '25%'
      }} />
    </div>
  );
};

export default ParallaxBackground;
