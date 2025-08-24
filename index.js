ymaps = window.ymaps;

function init() {
        let myMap = new ymaps.Map('location-map', {
            center: [55.76, 37.64],
            zoom: 12, 
        });

    let placemark1 = new ymaps.Placemark([55.75357914372397,37.648310678141414], {
        balloonContentHeader: 'ВШЭ Покра',
        balloonContentBody: 'Тело балуна',
        balloonContentFooter: 'Подвал балуна'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './icons/point.png',
        iconImageSize: [42, 42],
        iconImageOffset: [-10, -10]
    });

    let placemark2 = new ymaps.Placemark([55.761762629372264,37.63414593233373], {
        balloonContentHeader: 'ВШЭ Мясницкая',
        balloonContentBody: 'Тело балуна',
        balloonContentFooter: 'Подвал балуна'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './icons/point.png',
        iconImageSize: [42, 42],
        iconImageOffset: [-10, -10]
    });

    myMap.geoObjects.add(placemark1)
    myMap.geoObjects.add(placemark2)
}

ymaps.ready(init);

function sliderPlugin(activeSlide = 0) {
    let slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (let slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveSlide()
            slide.classList.add('active')
        })
    }

    function clearActiveSlide() {
        slides.forEach(slide => {
        slide.classList.remove('active')
        })
    }
}

sliderPlugin()

