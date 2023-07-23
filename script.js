const mountainleft = document.querySelector('#mountain_left');
const mountainright = document.querySelector('#mountain_right');
const clouds1 = document.querySelector('#clouds_1');
const clouds2 = document.querySelector('#clouds_2');
const text = document.querySelector('#text');
const man = document.querySelector('#man');

window.addEventListener('scroll', () => {
    let value = scrollY;
    mountainleft.style.left = `-${value / 0.7}px`
    clouds2.style.left = `-${value / 2}px`
    mountainright.style.left = `${value / 0.7}px`
    clouds1.style.left = `${value / 2}px`
    text.style.left = `-${value}px`
    man.style.height = `${window.innerHeight - value}px`
})