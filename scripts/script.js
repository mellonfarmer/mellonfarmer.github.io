var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

console.log("test");

var activeDots =[false,false,false,false,false,false];
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
		console.log(activeDots[(dotNumber-1)]);

	} else if ($("#Braille-dot-" + dotNumber).css("background-color") == 'rgb(0, 0, 0)'){
		$("#Braille-dot-" + dotNumber).css("background-color","rgb(255, 255, 255)");
		activeDots[(dotNumber-1)] = false;
		console.log(activeDots[(dotNumber-1)]);

	}
	//6 elements in array
	//need to know which are true

	//rewrite
	function getSelectedDots(){
		var entries=[]
		for (var i = 0; i >= activeDots.length; i++) {
			if (activeDots[i] == true){
				entries.push(i);
			}
			return entries
		}
	}
	function updateText(){
	$("#lblOutput").text(getSelectedDots())


	}
	updateText();
}

function addTile()
{



}