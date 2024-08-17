document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Loads")
    


    var toggler = document.getElementsByClassName("caret");

    var i;

    for (i=0; i < toggler.length; i++){
        toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }


    //Back Button


    let chosePfTerms = false; 
    var pfCardChoice = document.getElementById("choose-personal-finance");

    let choseInvTerms = false; 
    var invCardChoice = document.getElementById("choose-investing");

    pfCardChoice.addEventListener('click', (event) => {
        chosePfTerms = true; 
        console.log("Chose Pf terms:", chosePfTerms)
        event.preventDefault();


        //document.getElementById("term-choice-page").style.display = 'none'; 

        document.getElementById("term-choice-page").classList.toggle("not-current")
        document.getElementById("pf-focus-definitions").style.display = 'block';

        
    })

    function pfBackButton() {

        document.getElementById("pf-focus-definitions").style.display = 'none';
        document.getElementById("term-choice-page").classList.toggle("not-current")

    }

    document.getElementById("pf-backto-def").addEventListener('click', pfBackButton);

 

 

    invCardChoice.addEventListener('click', (event) => {
        choseInvTerms = true; 
        console.log("Chose Inv terms:", choseInvTerms)
        event.preventDefault();
        document.getElementById("term-choice-page").classList.toggle("not-current");  

        document.getElementById("inv-focus-definitions").style.display = 'block';
    })

    function invBackButton() {
        document.getElementById("inv-focus-definitions").style.display = 'none';
        document.getElementById("term-choice-page").classList.toggle("not-current"); 

    }

    document.getElementById("inv-backto-def").addEventListener('click', invBackButton);




  
 
   

})