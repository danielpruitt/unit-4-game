$(document).ready(function(){

    //  variables 
        var random_results;
        var lost = 0;
        var wins = 0;
        var result;
        var previous = 0;
        var images = ["http://pngimg.com/uploads/diamond/diamond_PNG6696.png",
        "http://pngimg.com/uploads/brilliant/brilliant_PNG56.png",
        "http://pngimg.com/uploads/sapphire/sapphire_PNG13.png",
        "http://pngimg.com/uploads/ruby/ruby_PNG31.png"]
        

    
    // gameplay function for starting and resseting
   
    var gamePlay = function () {
    $(".crystals").empty();
    
    random_results = Math.floor((Math.random() * 101) +19);
    
    

    $("#result").html("Target Number: " + random_results)
    
    
    // crystals and their numbers
        for (var i = 0; i < 4; i++){
            var random = Math.floor((Math.random() * 11) + 1);
           

            var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "data-random":random,
                });

            crystal.css({
                "background-image": "url('" +(images[i]) +"')",
                "background-size":"cover",
                
            })
            $(".crystals").append(crystal);
        };
   };
    
         gamePlay();
   

        // click function, each crystal has random value and will add it to previous 
        $(document).on("click",".crystal", function () {

            var num = parseInt($(this).attr("data-random"));
            
            previous += num;

         //win or loss  
            if(previous > random_results){
                
                lost++;
                $("#losses").html(lost);
                previous = 0;
                gamePlay();

            }
            else if (previous === random_results) {
                
                wins++;
                $("#wins").html(wins);
                previous = 0;
                gamePlay();
            };
            console.log(previous)
             $("#userGuess").html(previous);
            
        }); 

        
        

 






})//end document ready