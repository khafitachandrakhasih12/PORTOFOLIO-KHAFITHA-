
    const fills = document.querySelectorAll('.progress-fill');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.width = el.dataset.width + '%';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(f => observer.observe(f));
  