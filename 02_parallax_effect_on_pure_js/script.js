function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translate(${(e.clientX * speed) /
      1000}px, ${(e.clientY * speed) / 500}px)`;
  });
}

document.addEventListener('mousemove', parallax);
