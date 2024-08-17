 document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("second-stat-btn").addEventListener('click', function() {


        let quote1Complete; 
        let quote2Complete; 
        let quote3Complete; 
        

        function quote1Up() {
            //document.getElementById("quote1").classList.toggle("landing-quote")

            //document.getElementById("quote1").classList.remove("landing-quote")
            console.log("Quote1Up Called")

            document.getElementById("quote1").classList.toggle("quote-up");
            quote1Complete = true; 
            console.log("Quote 1 Complete:", quote1Complete);
        }
       
        function quote2Up() {
            //document.getElementById("quote2").classList.toggle("landing-quote")
            console.log("Quote2Up Called")

            document.getElementById("quote2").classList.toggle("quote-up");
            quote2Complete = true; 
            console.log("Quote 2 Complete:", quote2Complete);
        }

        function quote3Up () {
            //document.getElementById("quote3").classList.toggle("landing-quote")
            console.log("Quote2Up Called")

            document.getElementById("quote3").classList.toggle("quote-up");
            quote3Complete = true; 
            console.log("Quote 3 Complete:", quote3Complete);
        }

        function quote4Up() {
            //document.getElementById("quote4").classList.toggle("landing-quote")
            console.log("Quote4Up Called")

            document.getElementById("quote4").classList.toggle("quote-up");
        }

        window.setTimeout(quote1Up, 250);  //1250

       
        window.setTimeout(quote2Up, 2250)  //3350

        
        window.setTimeout(quote3Up, 4450); //5550
       

        window.setTimeout(quote4Up, 6650);
        

    
    });

    document.getElementById("learn-more").addEventListener('click', function() {
        const secTwoDest = document.getElementById("land-destination")

        secTwoDest.scrollIntoView({behavior:'smooth', block: 'center'});
    })

});

   
