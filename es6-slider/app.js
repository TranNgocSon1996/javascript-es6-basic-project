import people from './data.js';

const container = document.querySelector('.slider-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

container.innerHTML = people.map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = 'next';
    if (slideIndex === 0) {
        position = 'active';
    } else if (slideIndex === people.length - 1) {
        position = 'last';
    }
    return `<div class="slide-block ${position}"><div class="slide">
    <img src="${img}"
        class="img" alt="view" />
    <div class="slide-content">
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">${text}</p>
    </div>
    </div>
</div>`;
}).join('');

const startSlider = (type) => {
    const active = document.querySelector('.active');
    const last = document.querySelector('.last');
    let next = active.nextElementSibling;
    if (!next) {
        next = container.firstElementChild;
    }

    active.classList.remove('active');
    last.classList.remove('last');
    next.classList.remove('next');

    if (type === 'prev') {
        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling;
        if (!next) {
            next = container.lastElementChild;
        }
        next.classList.remove('next');
        next.classList.add('last');
        return;
    }

    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');

};

nextBtn.addEventListener('click', () => {
    startSlider('next');
});

prevBtn.addEventListener('click', () => {
    startSlider('prev');
});