let images = [{
    url: "https://img.favcars.com/mini/hatch/mini_hatch_2010_wallpapers_14_1280x960.jpg",
    title: "Mini Cooper черный"
}, {
    url: "https://img.favcars.com/mini/cabrio/mini_cabrio_2009_pictures_5_1280x960.jpg",
    title: "Mini Cooper красный"
}, {
    url: "https://www.t-r-n.ru/files/modification-images/cb/a8/5c/f9/40061_tmb940.jpg",
    title: "Mini Cooper синий"
}, {
    url: "https://a.d-cd.net/af41e8cs-960.jpg",
    title: "Mini Cooper бордовый"
}, {
    url: "https://i1.7fon.org/thumb/m604508.jpg",
    title: "Mini Cooper белый"
}];

function initSlider(){
    if (!images || !images.length) return;
    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector('.slider__arrows');
    let sliderDots = document.querySelector(".slider__dots");
    initImages();
    initArrows();
    initDots();
    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index = "${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows(){
        sliderArrows.querySelectorAll('.slider__arrow').forEach(arrow => {
            arrow.addEventListener('click', function () {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if(arrow.classList.contains("left")){
                    nextNumber = curNumber === 0? images.length-1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0: curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }
    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index===0? "active" : ""}" data-index = "${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener('click',function () {
                moveSlider(this.dataset.index);
                sliderDots.querySelector(".active").classList.remove("active");
                this.classList.add("active");
            });
        });
    }
    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", initSlider);