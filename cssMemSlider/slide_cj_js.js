const prev=document.getElementById('btn-prev');
const next=document.getElementById('btn-next');
const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');
const texts=document.querySelectorAll('.text');
let index=0;

const activeSlide = n =>{ 
    
    for (slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activedot = n =>{ 
    
    for (dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeText = n =>{ 
    
    for (text of texts){
        text.classList.remove('active');
    }
    texts[n].classList.add('active');
}

const currentSlide = ind =>{
    activeSlide(ind);
    activedot(ind);
    activeText(ind);
}

const nextSlide = () =>{
    if (index == slides.length-1){
        index=0;
        currentSlide(index);
    }
    else{
        index++;
        currentSlide(index);
    }
}

const prevSlide = () =>{
    if (index == 0){
        index=slides.length-1;
        currentSlide(index);
    }
    else{
        index--;
        currentSlide(index);
    }
}

dots.forEach((item, indexdot) => {
    item.addEventListener('click', () => {
        index = indexdot;
        currentSlide(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);