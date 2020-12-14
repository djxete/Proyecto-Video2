//alert("probando");

// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// ============== VARIABLES =================

const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");
console.log(video);
console.log(btn);
console.log(preloader);



// ============== EVENT LISTENER =================


//Cuando todo esté cargado(html.imagenes,videos etc..), quítame el preloader y cambiame el botón para que se vea el símbolo de play
window.addEventListener("load", ()=>{
    preloader.classList.add("hide-preloader");
    btn.classList.add("slide");
})



btn.addEventListener("click", ()=>{

    if(btn.classList.contains("slide")){
        btn.classList.remove("slide");
        video.play();
    } else{
        btn.classList.add("slide");
        video.pause();
    }
   
    

})




