let box = document.querySelector('.box');

let dragBox = {};

box.addEventListener( 'mousedown', function(e) {
    dragBox.downX = e.pageX;
    dragBox.scroll = box.scrollLeft;

    box.addEventListener('mousemove', dragBox.mousemove);
});

box.addEventListener( 'mouseup', function() {
    dragBox.reset(this);
});

box.addEventListener( 'mouseleave', function() {
    dragBox.reset(this);
});

dragBox.reset = function(el) {
    box.removeEventListener('mousemove', dragBox.mousemove);
};

dragBox.mousemove = function(e) {
    var moveX = e.pageX - dragBox.downX;
    box.scrollLeft = dragBox.scroll - moveX;
};