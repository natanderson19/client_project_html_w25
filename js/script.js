// document.getElementById("year").innerHTML = new Date().getFullYear();


// const hamMenu = document.querySelector('.ham-menu');
// const offScreenMenu = document.querySelector('.off-screen-menu');
// hamMenu.addEventListener('click', () => {
//     console.log('clicked')
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// })

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").innerHTML = new Date().getFullYear();

    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener('click', function () {
            console.log('clicked');
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
        });
    }
});
