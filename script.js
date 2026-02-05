gsap.registerPlugin(ScrollTrigger);

// Mouse Follower
const orb = document.querySelector('#orb');
window.addEventListener('mousemove', e => {
    gsap.to(orb, { x: e.clientX, y: e.clientY, duration: 1.5, ease: "power3.out" });
});

// Entrance Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".hero-title", { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" })
      .to(".hero-img", { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }, "-=1")
      .from(".mag-wrap", { scale: 0, opacity: 0, duration: 0.5, ease: "back.out" }, "-=0.8");
});

// Scroll Reveals
const targets = [".reveal-text", ".edu-card", ".skill-box", ".project-card", ".social-btn"];
targets.forEach(target => {
    gsap.to(target, {
        scrollTrigger: { trigger: target, start: "top 85%" },
        opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out"
    });
});

// 3D Cert Tilt
document.querySelectorAll('.cert-card-3d').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotationY: x * 20, rotationX: -y * 20, duration: 0.5 });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5 });
    });
});