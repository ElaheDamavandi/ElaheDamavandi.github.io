// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

const navbarElement = selectElement('.navbar');
const upButton = selectElement('.scroll-up-btn');

//Nav and Up button styles on scroll 
const scrollHeader = () =>{
    if(this.scrollY >= 15) {
        navbarElement.classList.add('sticky');
    } else {
        navbarElement.classList.remove('sticky');
    }

    if(this.scrollY > 500){
        upButton.classList.add('show');
    }else{
        upButton.classList.remove('show');
    }
}

const topFunction = () => {
    document.documentElement.scrollTop = 0;
}

upButton.addEventListener('click', topFunction);
window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    const menuBtn = selectElement('.menu-btn');
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuToggleIcon.classList.toggle('active');
}
menuToggleIcon.addEventListener('click', toggleMenu);

