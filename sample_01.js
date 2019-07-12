var tiles = document.getElementsByClassName("tile");
var circles = document.getElementsByClassName("circles");

function slide(i){
	
	slideShow(i);
	
	if(i==5){
		i=0;
	}else{
		i++;
	}
	
	setTimeout(function(){slide(i);},2000);
	
}

function slideShow(i){
	tiles[i].id = "slideShow";
	circles[i].style.color = tiles[i].style.color;
	setTimeout(function(){slideHide(i);},2000);
}

function slideHide(i){
	tiles[i].id = "slideHide";
	circles[i].style.color = "";
	setTimeout(function(){tiles[i].id = "";},1000);
}

slide(0);
