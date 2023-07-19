var player = document.getElementById("player");
var map = document.getElementById("container");
var posx, posy;

player.style.top = "500px";
player.style.left = "1300px";


document.addEventListener("keydown", function (event) {
    if(event.key === "z"){
        posy = player.offsetTop - 25;
        player.style.top = posy + "px";
    }else if (event.key === "s"){ 
        posy = player.offsetTop + 25;
        player.style.top = posy + "px";
    }else if (event.key === "q"){
        posx = player.offsetLeft - 25;
        player.style.left = posx + "px";
    }else if (event.key === "d"){
        posx = player.offsetLeft + 25;
        player.style.left = posx + "px";
    }
});
