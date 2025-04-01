window.onload = function (){
        var c = document.querySelector("#canvas");
        var cx = c.getContext("2d");

        c.width = window.innerWidth - 13;
        c.height = window.innerHeight - 15;
        
        cx.fillStyle = "Black";
        
        c.ontouchmove = function(e){
         cx.fillRect(
             e.changedTouches[0].pageX,
             e.changedTouches[0].pageY,
             3,
             3
         );
        }             
}

           
