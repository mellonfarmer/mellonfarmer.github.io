var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);



var activeDots =[false,false,false,false,false,false];
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
			if (activeDots[2] == false && activeDots[5] == false) {
			//a
				if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == false && activeDots[4] == false)
				{
					$("#lblOutput").text("a");
				}
				//b
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == false && activeDots[4] == false)
				{
					$("#lblOutput").text("b");
					//console.log("b on")
				}//c 
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == true	&& activeDots[4] == false)
				{
					$("#lblOutput").text("c");
					//console.log("b on")
				}//d
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == true	&& activeDots[4] == true)
				{
					$("#lblOutput").text("d");
					//console.log("b on")
				}//e
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == false	&& activeDots[4] == true)
				{
					$("#lblOutput").text("e");
					//console.log("b on")
				}//f
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == true	&& activeDots[4] == false)
				{
					$("#lblOutput").text("f");
					//console.log("b on")
				}//g
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == true	&& activeDots[4] == true)
				{
					$("#lblOutput").text("g");
					//console.log("b on")
				}//h
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == false	&& activeDots[4] == true)
				{
					$("#lblOutput").text("h");
					//console.log("b on")
				}//i
				else if (activeDots[0] == false && activeDots[1] == true && activeDots[3] == true	&& activeDots[4] == false)
				{
					$("#lblOutput").text("i");
					//console.log("b on")
				}//j
				else if (activeDots[0] == false && activeDots[1] == true && activeDots[3] == true && activeDots[4] == true)
				{
					$("#lblOutput").text("j");
					//console.log("b on")
				}
				else{
					$("#lblOutput").text("");
				}
			} else if (activeDots[2] == true && activeDots[5] == false){
				//k
				if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == false && activeDots[4] == false)
				{
					$("#lblOutput").text("k");
				}
				//l
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == false && activeDots[4] == false)
				{
					$("#lblOutput").text("l");
					//console.log("b on")
				}//m 
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == true	&& activeDots[4] == false)
				{
					$("#lblOutput").text("m");
					//console.log("b on")
				}//n
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == true	&& activeDots[4] == true)
				{
					$("#lblOutput").text("n");
					//console.log("b on")
				}//o
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == false	&& activeDots[4] == true)
				{
					$("#lblOutput").text("o");
					//console.log("b on")
				}//p
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == true	&& activeDots[4] == false)
				{
					$("#lblOutput").text("p");
					//console.log("b on")
				}//q
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == true	&& activeDots[4] == true)
				{
					$("#lblOutput").text("q");
					//console.log("b on")
				}//r
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == false	&& activeDots[4] == true)
				{
					$("#lblOutput").text("r");
					//console.log("b on")
				}//s
				else if (activeDots[0] == false && activeDots[1] == true && activeDots[3] == true	&& activeDots[4] == false)
				{
					$("#lblOutput").text("s");
					console.log("S")
				}//t
				else if (activeDots[0] == false && activeDots[1] == true && activeDots[3] == true && activeDots[4] == true)
				{
					$("#lblOutput").text("t");
					console.log("t")
				}else
				{
					$("#lblOutput").text("");
				}
				
					
			}else if (activeDots[2] == true && activeDots[5] == true){

				if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == false && activeDots[4] == false)
				{
					$("#lblOutput").text("u");
				}
				//l
				else if (activeDots[0] == true && activeDots[1] == true && activeDots[3] == false && activeDots[4] == false)
				{
					$("#lblOutput").text("v");
					//console.log("b on")
				}//m 
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == true	&& activeDots[4] == false)
				{
					$("#lblOutput").text("x");
					//console.log("b on")
				}//n
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == true	&& activeDots[4] == true)
				{
					$("#lblOutput").text("y");
					//console.log("b on")
				}//o
				else if (activeDots[0] == true && activeDots[1] == false && activeDots[3] == false	&& activeDots[4] == true)
				{
					$("#lblOutput").text("z");
					//console.log("b on")
				}else 
				{
					$("#lblOutput").text("");
				}
			}
			else if (activeDots[2] == false && activeDots[5] == true){
				
				if (activeDots[0] == false && activeDots[1] == true && activeDots[3] == true && activeDots[4] == true)
				{
					$("#lblOutput").text("w");
				}
				else 
				{
					$("#lblOutput").text("");
				}
			}
		}
		updateText();
}
class tile{
	//give id
	constructor(){
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

			if($("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color") == 'rgb(255, 255, 255)'){
			$("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color","rgb(0, 0, 0)");
			this.activeDots[(dotID-1)] = true;
			console.log("Array contence: " + activeDots[(dotID-1)] + "Dot number " + dotID);
			console.log("ON");

		} 
			else if($("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color") == 'rgb(0, 0, 0)'){
			$("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color","rgb(255, 255, 255)");
			this.activeDots[(dotID-1)] = false;
			console.log("Array contence: " + activeDots[(dotID-1)] + "Dot number " + dotID);
			console.log("OFF")
			/*
			else if ($("#Braille-dot-" + dotNumber).css("background-color") == 'rgb(0, 0, 0)'){
			$("#Braille-dot-" + dotNumber).css("background-color","rgb(255, 255, 255)");
			activeDots[(dotNumber-1)] = false;
			console.log("Array contence: " + activeDots[(dotNumber-1)] + "Dot number " + dotNumber);
			*/

		}
		}
}

/*
var tile = {
	//activeDots : [false,false,false,false,false,false],
	a :10,
	//fullName : function() {
    //return this.firstName + " " + this.lastName;

    fncDrawTile : function drawTile()
    {
    		$("#mainContainer").append("<div class=\"Braille-container\"><div class=\"Braille-dot\" id=\"Braille-dot-1\" onclick=\"dotClick(1)\"></div><div class=\"Braille-dot\" id=\"Braille-dot-4\" onclick=\"dotClick(4)\"></div><div class=\"Braille-dot\" id=\"Braille-dot-2\" onclick=\"dotClick(2)\"></div><div class=\"Braille-dot\" id=\"Braille-dot-5\" onclick=\"dotClick(5)\"></div><div class=\"Braille-dot\" id=\"Braille-dot-3\" onclick=\"dotClick(3)\"></div><div class=\"Braille-dot\" id=\"Braille-dot-6\" onclick=\"dotClick(6)\"></div>");
    }



    /*
	setDots : function dotClick(dotNumber)
	{
		
		if($("#Braille-dot-" + dotNumber).css("background-color") == 'rgb(255, 255, 255)'){
			$("#Braille-dot-" + dotNumber).css("background-color","rgb(0, 0, 0)");
			this.activeDots[(dotNumber-1)] = true;
			console.log("Array contence: " + this.activeDots[(dotNumber-1)] + "Dot number " + dotNumber);

		} else if ($("#Braille-dot-" + dotNumber).css("background-color") == 'rgb(0, 0, 0)'){
			$("#Braille-dot-" + dotNumber).css("background-color","rgb(255, 255, 255)");
			this.activeDots[(dotNumber-1)] = false;
			console.log("Array contence: " + this.activeDots[(dotNumber-1)] + "Dot number " + dotNumber);
			

		}

	}*/
//}; 




function addTile()
{

	
// activeTiles[1] = new tile;
activeTiles.push(new tile);

}