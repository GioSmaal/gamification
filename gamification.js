var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var film = document.getElementById("film")

function vidend() {
    button1.style.visibility = "visible";
    button2.style.visibility = "visible";
}

function vid1() {
    film.src = "vid2.mp4";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button1.setAttribute("onClick", "vid3()");
    button2.setAttribute("onClick", "vid4()");
}

function vid2() {
    film.src = "vid1.mp4";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    alert("Wrong! Try again");
}

function vid3() {
    film.src = "vid1.mp4";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button1.setAttribute("onClick", "vid1()");
    button2.setAttribute("onClick", "vid2()");
    alert("Wrong! Try again");
}

function vid4() {
    film.src = "vid3.mp4";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button1.setAttribute("onClick", "vid5()");
    button2.setAttribute("onClick", "vid5()");
    button1.innerHTML = "Reset";
    button2.innerHTML = "Reset";
}

function vid5() {
    location.reload();
}