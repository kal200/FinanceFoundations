document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Loads")
    
    var toggler = document.getElementsByClassName("caret");

    var i;

    for (i=0; i < toggler.length; i++){
        toggler[i].addEventListener("click", function() {
            this.parentElement.nextElementSibling.classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }

 
   

})


