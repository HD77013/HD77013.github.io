const imageGallery = [
    "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
    "https://i1.sndcdn.com/artworks-000605125624-89fdgf-t1080x1080.jpg",
    "https://ew.com/thmb/SyrOBukLtF4f-kJI0NhMAJncqlk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/walter-white-then-now-5fcb4aab7d2b4577945f2a7743460096.jpg",
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