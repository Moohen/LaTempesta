// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "flex";
}

// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    if (n === 1) {
        document.getElementById("stopprev").style.display = "none";
    } else if (n === 9) {
        document.getElementById("stopnext").style.display = "none";
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > 1) {
        document.getElementById("stopprev").style.display = "flex";
    } else if (n === 1) {
        document.getElementById("stopprev").style.display = "none";
    }
    if (n === slides.length) {
        document.getElementById("stopnext").style.display = "none";
    } else if (n < slides.length) {
        document.getElementById("stopnext").style.display = "flex";
    }
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}