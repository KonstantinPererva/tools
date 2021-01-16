let box = document.querySelector('.element');

box.addEventListener('wheel', function(e) {
    e.preventDefault();
    box.scrollLeft += (e.deltaY/Math.abs(e.deltaY) * 30);
});