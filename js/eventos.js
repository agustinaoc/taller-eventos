document.addEventListener("DOMContentLoaded", function () {

    const div = document.querySelector("div");
    
    div.addEventListener("click", function() {
        alert("Hola! soy el div");
    });

    const btn = document.getElementById("btn");

    btn.addEventListener("click", function(event){
        event.stopPropagation();
    })
});