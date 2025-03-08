const imageGallery = [
    "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
    "https://i1.sndcdn.com/artworks-000605125624-89fdgf-t1080x1080.jpg",
    "https://miro.medium.com/v2/resize:fit:650/1*HGZ2bHPxIQVBA-fFsrItDQ.jpeg",
    "https://cdn.britannica.com/49/251849-050-54AE4F9E/bryan-cranston-aaron-paul-breaking-bad.jpg",
    "https://i.pinimg.com/736x/18/6f/86/186f8604fc30a574c5457d10ffe6dc03.jpg"
]

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImgIndex];
}

nextButton.addEventListener("click", function(){
    currentImgIndex = (currentImgIndex + 1) % imageGallery.length
    updateImage()
});

prevButton.addEventListener("click", function(){
    currentImgIndex = (currentImgIndex - 1 + imageGallery.length) % imageGallery.length
    updateImage()
});

updateImage();