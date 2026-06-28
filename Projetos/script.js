document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('imageModalImg');
  const closeBtn = document.getElementById('closeImageModal');

  const images = document.querySelectorAll('.grid-gallery .gallery-item img');

  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      modalImg.src = this.src;
      modalImg.alt = this.alt || 'Imagem ampliada';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
