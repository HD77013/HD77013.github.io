const imageGallery = [
    "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
    "https://static.wikia.nocookie.net/breakingbad/images/b/b4/Walter_2008.png/revision/latest/scale-to-width/360?cb=20200704164147",
    "https://ew.com/thmb/SyrOBukLtF4f-kJI0NhMAJncqlk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/walter-white-then-now-5fcb4aab7d2b4577945f2a7743460096.jpg"
]

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;