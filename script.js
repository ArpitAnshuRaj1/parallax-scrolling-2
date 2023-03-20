let text = document.getElementById('text');
let gateleft = document.getElementById('gate-left');
let gateright = document.getElementById('gate-right');
let treeright = document.getElementById('tree-right');
let treeleft = document.getElementById('tree-left');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * -2.5 + 'px';
    gateleft.style.left = value * -1.5 + 'px';
    gateright.style.left = value * 1.5 + 'px';
    treeright.style.left = value * 3 + 'px';
    treeright.style.top = value * -1.5 + 'px';
    treeleft.style.top = value * -1.5 + 'px';
    treeleft.style.left = value * -3 + 'px';
})

const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggleMenu.onclick = function () {
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}