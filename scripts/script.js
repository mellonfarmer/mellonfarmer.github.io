function includeScript(Source)
{
	var script = document.createElement('script');
	script.src = Source;
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);

}

includeScript('./scripts/parser.js');
includeScript('./scripts/processing.js');

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

}

//-----------HTML Events---------------
function checkboxUpdate()
{
	if($("#dbgGetDpts").is(":checked"))
	{
		updateText(getDotBinary());
	}
	else
	{
		updateText(mainProcess(getDotBinary()))
	}

}