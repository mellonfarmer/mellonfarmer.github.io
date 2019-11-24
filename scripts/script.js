var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


let lookup = {
	"0" : "a",
	"01" : "b",
	"03" : "c",
	"034" : "d",
	"04" : "e",
	"013" : "f",
	"0134" : "g",
	"014" : "h",
	"13" : "i",
	"134" : "j",

	"02" : "k",
	"012" : "l",
	"023" : "m",
	"0234" : "n",
	"024" : "o",
	"0123" : "p",
	"01234" : "q",
	"0124" : "r",
	"123" : "s",
	"1234" : "t",

	"025" : "u",
	"0125" : "v",
	"1345" : "w",
	"0235" : "x",
	"02345" : "y",
	"0245" : "z",

	"" : " "


}

var text = "";
var activeTiles = [];
function dotClick(dotNumber)
{
		//take dot number
		//toggle boolen value depending on dot on or off
		//lookup braille list
		//update text with appropirate letter
		//eventually have it so you can write a letter and the brallie will appear

		
		
		if($("#Braille-dot-" + dotNumber).css("background-color") == 'rgb(255, 255, 255)'){
			$("#Braille-dot-" + dotNumber).css("background-color","rgb(0, 0, 0)");
			activeDots[(dotNumber-1)] = true;
			console.log("Array contence: " + activeDots[(dotNumber-1)] + "Dot number " + dotNumber);

		} else if ($("#Braille-dot-" + dotNumber).css("background-color") == 'rgb(0, 0, 0)'){
			$("#Braille-dot-" + dotNumber).css("background-color","rgb(255, 255, 255)");
			activeDots[(dotNumber-1)] = false;
			console.log("Array contence: " + activeDots[(dotNumber-1)] + "Dot number " + dotNumber);
			

		}
		//6 elements in array
		//need to know which are true

		//rewrite
		
		function updateText(){
		//$("#lblOutput").text(getSelectedDots())
			
		}
		updateText();
}
class tile{
	//give id
	constructor()
	{
		this.activeDots = [false,false,false,false,false,false];
		this.tileId = activeTiles.length;
		this.drawTile();
	}
	//tileId = activeTiles.length;
	//activeDots = [false,false,false,false,false,false];
	getTileId()
	{
		return this.tileId;
	}

	drawTile()
	{//activeTiles[this.tileId].setDots(1);
	    	$("#mainContainer").append("<div class=\"Braille-container\">\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-1\" onclick=\"activeTiles["+this.tileId+"].setDots(1)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-4\" onclick=\"activeTiles["+this.tileId+"].setDots(4)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-2\" onclick=\"activeTiles["+this.tileId+"].setDots(2)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-5\" onclick=\"activeTiles["+this.tileId+"].setDots(5)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-3\" onclick=\"activeTiles["+this.tileId+"].setDots(3)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-6\" onclick=\"activeTiles["+this.tileId+"].setDots(6)\"></div>"
	    	);
	}

	getactiveDots(dotId)
	{
			return this.activeDots[dotId];
	}

	setDots(dotID)
	{
			//let fullPath = ("#Braille-dot-id-" + this.tileid + "-"+ dotID);

		if($("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color") == 'rgb(255, 255, 255)')
		{
			$("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color","rgb(0, 0, 0)");
			this.activeDots[(dotID-1)] = true;
			getAllDots();
			//console.log("Array contence: " + activeDots[(dotID-1)] + "Dot number " + dotID);
		} 

		else if($("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color") == 'rgb(0, 0, 0)')
		{
			$("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color","rgb(255, 255, 255)");
			this.activeDots[(dotID-1)] = false;
			getAllDots();
			//console.log("Array contence: " + activeDots[(dotID-1)] + "Dot number " + dotID);
		}

	}
}



function addTile()
{
	// activeTiles[1] = new tile;
	activeTiles.push(new tile);

}


function getAllDots()
{	
	text = "";
	//get tile id, get dot array, output to a string
	for (var i = 0; i <= activeTiles.length -1 ; i++) {
		var activeDotsInCuttentTile = "";

		for (var y = 0;y <= 5;y++){
			if (activeTiles[i].getactiveDots(y) == true)
				activeDotsInCuttentTile = activeDotsInCuttentTile + y; //+ y + " ";
		}
		letterCheck = lookup[activeDotsInCuttentTile];
		if (letterCheck == undefined){
			text = text;
		}else
		{
			text = text + lookup[activeDotsInCuttentTile];
		}
		
		
	}
	
	$("#lblOutput").text(text);
}