function includeScript(Source)
{
	var script = document.createElement('script');
	script.src = Source;
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);

}

includeScript('./scripts/parser.js');
includeScript('./scripts/processing.js');

var arrActiveTiles = [];
var arrBrailleLayer = 0;

class tile{
	//give id
	constructor()
	{
		this.activeDots = [false,false,false,false,false,false];
		//change to count active tiles rather than rely on the array length
		this.tileId = arrActiveTiles.length;
		this.drawTile(0);
	}

	getTileId()
	{
		return this.tileId;
	}

	//now needs to draw to current layer
	drawTile(layerID)
	{
	    	$("#"+layerID+".BrailleLayer").append("<div class=\"Braille-container\" id=\""+this.tileId+"\">  \
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-1\" onclick=\"activeTiles["+this.tileId+"].setDots(1)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-4\" onclick=\"activeTiles["+this.tileId+"].setDots(4)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-2\" onclick=\"activeTiles["+this.tileId+"].setDots(2)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-5\" onclick=\"activeTiles["+this.tileId+"].setDots(5)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-3\" onclick=\"activeTiles["+this.tileId+"].setDots(3)\"></div>\
	    	<div class=\"Braille-dot\" id=\"Braille-dot-id-"+ this.tileId + "-6\" onclick=\"activeTiles["+this.tileId+"].setDots(6)\"></div>"
	    	);
	}

	getactiveDots()
	{
		let dotArray = ""
		this.activeDots.forEach(element => {
			if (element == true)
			{
				dotArray = dotArray + "1";
			
			}
			else
			{
				dotArray = dotArray + "0";

			}
		});
		
		return dotArray
	}


	setDots(dotID)
	{
			

		if($("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color") == 'rgb(255, 255, 255)')
		{
			$("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color","rgb(0, 0, 0)");
			this.activeDots[(dotID-1)] = true;

			checkboxUpdate()
		} 

		else if($("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color") == 'rgb(0, 0, 0)')
		{
			$("#Braille-dot-id-" + this.tileId + "-"+ dotID).css("background-color","rgb(255, 255, 255)");
			this.activeDots[(dotID-1)] = false;

			checkboxUpdate()
			
		}

	}

}
function removeTile()
{
	
	//get current tile id
	var ElementToRemove = "#" +( arrActiveTiles.length -1 );

	//remove element
	$(ElementToRemove).remove();

	//remove id from array	
	delete arrActiveTiles[arrActiveTiles.length];
	arrActiveTiles.pop();	

	//refresh text
	checkboxUpdate();
}


//add layer handler 
//rules for layer
//when it gets to 18 tiles add a new layer
//when tiles are deleted below 18 delete the layer and return to the previous layer
//when it goes up again past 18 add new layer back
//active tiles array is left as is for now, this will only affect teh interface


function addTile()
{
	//change to add Braillelayer value and handle tile changes

	arrActiveTiles.push(new tile(getCurrentLayer()));
}

function getCurrentLayer()
{
	var currentLayer = arrBrailleLayer.length
	return currentLayer
}


function updateText(text)
{
	$("#lblOutput").text(text);
}


function getDotBinary()
{
	//get all the dot values as a binary string and output to text box

	//get all the dots in the acriveTiles array

	var returnText =""
	for (var i = 0; i <= arrActiveTiles.length -1 ; i++) 
	{
		returnText += arrActiveTiles[i].getactiveDots();

	}
	return returnText

}

function addLayer()
{
	arrBrailleLayer++;
	$("#mainContainer").append("<div class=\"BrailleLayer\">" );

}
/*
function removeLayer()
{

	var ElementToRemove = "#" +(arrBrailleLayer);

	//remove element
	$(ElementToRemove).remove();


	arrBrailleLayer--;




	//$("#mainContainer").append("<div class=\"BrailleLayer\">" );

}
*/
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