var slideIndex = 0;
var interval; // Declare a variable to hold the interval

// Call showSlides once to display the initial slide
showSlides();

// Function to start the slideshow
function startSlideshow() {
    interval = setInterval(function() {
        plusSlides(1);
    }, 5000); // Set interval for 5 seconds
}

// Function to stop the slideshow
function stopSlideshow() {
    clearInterval(interval);
}

// Next button
var nextButton = document.querySelector(".next");
nextButton.addEventListener("click", function() {
    plusSlides(1);
});

// Previous button
var prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", function() {
    plusSlides(-1);
});

// Function to display slides
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  

    // Clear previous interval
    clearInterval(interval);

    // Set new interval based on the type of slide
    var currentSlide = slides[slideIndex-1];
    var isVideo = currentSlide.querySelector('video') !== null;
    var intervalTime = isVideo ? 26000 : 5000; // 26 seconds for video, 5 seconds for other slides
    interval = setInterval(function() {
        plusSlides(1);
    }, intervalTime);
}

// Function to navigate between slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}
