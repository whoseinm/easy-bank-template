const burger = document.querySelector('.burger')
const headerOverlay = document.querySelector('.headerOverlay')
burger.addEventListener('click',()=>{
    burger.classList.toggle('active')
    headerOverlay.classList.toggle('active')
    document.querySelector('.navBar').classList.toggle('active')
})
headerOverlay.addEventListener('click',()=>{
    burger.classList.toggle('active')
    headerOverlay.classList.toggle('active')
    document.querySelector('.navBar').classList.toggle('active')
})