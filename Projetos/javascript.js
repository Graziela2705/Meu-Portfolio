let currentIndex = 0;
    const track = document.getElementById('slideTrack');
    const totalSlides = document.querySelectorAll('.slide').length;

    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function openModal(src) {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('modalImg');
        modal.style.display = "flex";
        modalImg.src = src;
    }