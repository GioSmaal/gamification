window.onload = load;

var button1, button2, film;
var count = 2;
var vidcount = 1;

function load() {
button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
film = document.getElementById("film");

button1.addEventListener("click", videos1)
button2.addEventListener("click", videos2)
film.autoplay = true;
}

function vidend() {
    if (count == 5) {
        button1.innerHTML = "Reset"
        button2.innerHTML = "Reset"
        button1.removeEventListener("click", videos1)
        button2.removeEventListener("click", videos2)
        button1.addEventListener("click", reset)
        button2.addEventListener("click", reset)

    }
    button1.style.visibility = "visible";
    button2.style.visibility = "visible";
}


function videos1() {
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";

    if (count % 2 == 0) { //good when count is 2
        count ++;
        vidcount ++;
        film.src = "vid" + vidcount + ".mp4";
        film.controls = false;
    }
    else {
        alert("Wrong! Try again");
        film.src = "vid" + vidcount + ".mp4";
    }
}

function videos2() {
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";

    if (count % 2 == 0) {
        alert("Wrong! Try again");
        film.src = "vid" + vidcount + ".mp4"
    }
    else { // good when count is 3
        count ++;
        vidcount ++;
        film.src = "vid" + vidcount + ".mp4"
    }
}

function reset () {
    count = 50;
    location.reload();
}