/*var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
*/
function includeScript(Source)
{
	var script = document.createElement('script');
	script.src = Source;
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);

}

//includeScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
includeScript('./scripts/parser.js');
includeScript('./scripts/processing.js');
//includeScript('./scripts/brailleTiles.js');



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

	
	"1" : ",",
	"12" : ";",
	"14" : ":",
	"145" : ".",
	"124" : "!",
	"1245" : "()",
	"125" : "?\"", //quote start
	"24" : "*",
	"245" : "\"", //quote end
	"2" : "\'",
	"25" : "-",





	"" : " "


}

var text = "";
var activeTiles = [];

class tile{
	//give id
	constructor()
	{
		this.activeDots = [false,false,false,false,false,false];
		//change to count active tiles rather than rely on the array length
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
	    	$("#mainContainer").append("<div class=\"Braille-container\" id=\""+this.tileId+"\">  \
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
		if (dotId !== ""){
			return this.activeDots[dotId];
		}
		else
		{
			return this.activeDots;
		}
	}


	setDots(dotID)
	{
			//let fullPath = ("#Braille-dot-id-" + this.tileid + "-"+ dotID);

		if($("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color") == 'rgb(255, 255, 255)')
		{
			$("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color","rgb(0, 0, 0)");
			this.activeDots[(dotID-1)] = true;

			checkboxUpdate()
			//console.log("Array contence: " + activeDots[(dotID-1)] + "Dot number " + dotID);
		} 

		else if($("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color") == 'rgb(0, 0, 0)')
		{
			$("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color","rgb(255, 255, 255)");
			this.activeDots[(dotID-1)] = false;

			checkboxUpdate()
			//getAllDotsInSet();
			//console.log("Array contence: " + activeDots[(dotID-1)] + "Dot number " + dotID);
		}

	}

}
function removeTile()
{
	
	//get current tile id
	var ElementToRemove = "#" +( activeTiles.length -1 );

	//remove element
	$(ElementToRemove).remove();

	//remove id from array	
	delete activeTiles[activeTiles.length];
	activeTiles.pop();	

	//refresh text
	checkboxUpdate();
}

function addTile()
{
	// activeTiles[1] = new tile;
	activeTiles.push(new tile);

}

function updateText(text)
{
	$("#lblOutput").text(text);
}

//remove
function textLookup(dotinput)
{
	text = "";
	letterCheck = lookup[dotinput];
	if (letterCheck == undefined){
		text = text;
	}else
	{
		text = text + letterCheck;
	}

	return text
}

//remove
function getActiveDotsForCurrentTile(tileId)
{	
	//get active dots for current tile and convert active to numbers
	
	var activeDotsInCurrentTileSet = "";
	
	for (var y = 0;y <= 5;y++)
	{
		if (activeTiles[tileId].getactiveDots(y) == true)
			activeDotsInCurrentTileSet = activeDotsInCurrentTileSet + y; //+ y + " ";
	}


	return activeDotsInCurrentTileSet
}


//keep possibly add to the class
function getActiveDotsForCurrentTileBinary(tileId)
{	
	//get active dots for current tile and convert active to numbers
	
	var activeDotsInCurrentTileSet = "";
	
	for (var y = 0;y <= 5;y++)
	{
		if (activeTiles[tileId].getactiveDots(y) == true)
		{
			activeDotsInCurrentTileSet = activeDotsInCurrentTileSet + "1";
			 //+ y + " ";
		}
		else
		{
			activeDotsInCurrentTileSet = activeDotsInCurrentTileSet + "0";


		}
	}


	return activeDotsInCurrentTileSet
}



//remove
function getAllActiveDots()
{
	var returnText =""
	for (var i = 0; i <= activeTiles.length -1 ; i++) 
	{
		returnText += textLookup(getActiveDotsForCurrentTile(i));

	}
	updateText(returnText);
}


//remove
function getAllDotValues()
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
		
		text = activeDotsInCuttentTile;
		
		
		
	}
	
	$("#lblOutput").text(text);
}

//keep
function getDotBinary()
{
	//get all the dot values as a binary string and output to text box

	//get all the dots in the acriveTiles array

	var returnText =""
	for (var i = 0; i <= activeTiles.length -1 ; i++) 
	{
		returnText += getActiveDotsForCurrentTileBinary(i);

	}
	return returnText
	updateText(returnText);

}

//-----------HTML Events---------------
function checkboxUpdate()
{
	if($("#dbgGetDpts").is(":checked"))
	{
		//getAllDotValues();
		getDotBinary();
	}
	else
	{
		//var binaryString = 
		updateText(mainProcess(getDotBinary()))
		//mainProcess(getDotBinary)
		//getAllActiveDots()
	}

}