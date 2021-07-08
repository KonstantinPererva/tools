var touchtime = 0;

document.body.addEventListener("click", function(event) {
    if (touchtime == 0) {
        touchtime = new Date().getTime();
    } else {
        if (((new Date().getTime()) - touchtime) < 800) {

            console.log("123123123");

            touchtime = 0;
        } else {
            touchtime = new Date().getTime();
        }
    }
});