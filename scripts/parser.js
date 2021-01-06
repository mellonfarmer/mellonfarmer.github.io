//var $ = require("jquery");
//data

//#region
let bt_a =
{   
    "id" : "100000",
    "character": "a",
    "uppercase": "A",
    "number":"1"
}
let bt_b =
{   
    "id" : "110000",
    "character": "b",
    "uppercase": "B",
    "number":"2"
}
let bt_c =
{   
    "id" : "100100",
    "character": "c",
    "uppercase": "C",
    "number":"3"
}
let bt_d =
{   
    "id" : "100110",
    "character": "d",
    "uppercase": "D",
    "number":"4"
}
let bt_e =
{   
    "id" : "100010",
    "character": "e",
    "uppercase": "E",
    "number":"5"
}
let bt_f =
{   
    "id" : "110100",
    "character": "f",
    "uppercase": "F",
    "number":"6"
}
let bt_g =
{   
    "id" : "110110",
    "character": "g",
    "uppercase": "G",
    "number":"7"
}
let bt_h =
{   
    "id" : "110010",
    "character": "h",
    "uppercase": "H",
    "number":"8"
}
let bt_i =
{   
    "id" : "010100",
    "character": "i",
    "uppercase": "I",
    "number":"9"
}
let bt_j =
{   
    "id" : "010110",
    "character": "j",
    "uppercase": "J",
    "number":"0"
}
let bt_k =
{   
    "id" : "101000",
    "character": "k",
    "uppercase": "K"
}
let bt_l =
{   
    "id" : "111000",
    "character": "l",
    "uppercase": "L"
}
let bt_m =
{   
    "id" : "101100",
    "character": "m",
    "uppercase": "M"
}
let bt_n =
{   
    "id" : "101110",
    "character": "n",
    "uppercase": "N"
}
let bt_o =
{   
    "id" : "101010",
    "character": "o",
    "uppercase": "O"
}
let bt_p =
{   
    "id" : "111100",
    "character": "p",
    "uppercase": "P"
}
let bt_q =
{   
    "id" : "111110",
    "character": "q",
    "uppercase": "Q"
}
let bt_r =
{   
    "id" : "111010",
    "character": "r",
    "uppercase": "R"
}
let bt_s =
{   
    "id" : "011100",
    "character": "s",
    "uppercase": "S"
}
let bt_t =
{   
    "id" : "011110",
    "character": "t",
    "uppercase": "T"
}
let bt_u =
{   
    "id" : "101001",
    "character": "u",
    "uppercase": "U"
    
}
let bt_v =
{   
    "id" : "111001",
    "character": "v",
    "uppercase": "V"
    
}
let bt_w =
{   
    "id" : "010111",
    "character": "w",
    "uppercase": "W"
    
}
let bt_x =
{   
    "id" : "101101",
    "character": "x",
    "uppercase": "X"
    
}
let bt_y =
{   
    "id" : "101111",
    "character": "y",
    "uppercase": "Y"
    
}
let bt_z =
{   
    "id" : "101011",
    "character": "z",
    "uppercase": "Z"
    
}
//comma
let bt_comma =
{   
    "id" : "010000",
    "character": ",",
	"uppercase": ",",
	"number":","
	
}
let bt_semicolon =
{   
    "id" : "011000",
    "character": ";",
    "uppercase": ";"
}
let bt_colon =
{   
    "id" : "010010",
    "character": ":",
    "uppercase": ":"
}
let bt_fullstop =
{   
    "id" : "010011",
    "character": ".",
	"uppercase": ".",
	"number":"."
}
let bt_exclimation =
{   
    "id" : "011010",
    "character": "!",
    "uppercase": "!"
}
let bt_brackets =           // might need to turn into a special character
{   
    "id" : "011011",
    "character": "()",
    "uppercase": "()"
}
let bt_questionmark = //start of a quote            // might need to turn into a special character
{   
    "id" : "011001",
    "character": "?",
    "uppercase": "?"
}
let bt_astrix =
{   
    "id" : "001010",
    "character": "*",
    "uppercase": "*"
}
let bt_backslash =
{   
    "id" : "001011",
    "character": "\"",
    "uppercase": "\""
}
let bt_closequote =
{   
    "id" : "010000",
    "character": "\"",
    "uppercase": "\""
}
let bt_hyphen =
{   
    "id" : "001001",
    "character": "-",
    "uppercase": "-"
}

//words
//and	  for	of	   the	  with
//111101 111111 111011 011101 011111
let bt_and =
{   
    "id" : "111101",
    "character": "and",
    "uppercase": "AND" //work out capitals
}

let bt_for =
{   
    "id" : "111111",
    "character": "for",
    "uppercase": "FOR" //work out capitals
}

let bt_of =
{   
    "id" : "111011",
    "character": "of",
    "uppercase": "OF" //work out capitals
}
let bt_the =
{   
    "id" : "011101",
    "character": "the",
    "uppercase": "THE" //work out capitals
}
let bt_with =
{   
    "id" : "011111",
    "character": "with",
    "uppercase": "WITH" //work out capitals
}


//#endregion


// SPECIAL CHARACTERS
let bt_SPACE =
{   
	"id" : "000000",
	"name":"SPACE",
	"character":" ",
    "uppercase": " ",
    "special":"true"
}
let bt_CAPS =
{   
    "id" : "000001",
	"name":"CAPS",
	"character":"",
    "special":"true"

    
}

let bt_NUMBER =
{

    "id" : "001111",
	"name":"NUMBER",
	"character":"",
	"special":"true",
	"number":""

}
let bt_ITALICS =
{   
	"id" : "000101",
	"number":".",
    "character": ",",
    "uppercase": ","
}


let bt_undefined_handler =
{
	"id" : "undefined",
	"name":"undefined",
	"character":"",
    "special":"true"

}
let bt_NUMERIC_SPACE =
{   
	"id" : "000010",
	"number":" ",
    "character": "",
    "uppercase": ""
}


//alphabet
var lookupParser = [bt_a, bt_b, bt_c, bt_d, bt_e, bt_f, bt_g, bt_h, bt_i, bt_j, bt_k, bt_l, bt_m, bt_n, bt_o, bt_p, bt_q, bt_r, bt_s, bt_t, bt_u, bt_v, bt_w, bt_x, bt_y, bt_z]
//punctuation
lookupParser.push(bt_comma, bt_semicolon, bt_colon, bt_fullstop, bt_exclimation, bt_brackets, bt_questionmark, bt_astrix, bt_backslash, bt_hyphen)
//concat~
lookupParser.push(bt_and,bt_of,bt_for,bt_the,bt_with)
//special
lookupParser.push(bt_SPACE, bt_CAPS, bt_NUMBER, bt_ITALICS, bt_undefined_handler,bt_NUMERIC_SPACE)




//require ("./brailleTiles.js")
//dataprocessing
// --- process data --- //

function validateStringSize(input)
{
	
	if(input.length % 6 == 0)
	{
		//sucess
		return 0
	}else
	{
		//failure
		throw "Data is invalid"
		

	}

}

function inputToArray(input)
{
	var inputarray =[]
	var a = 0
	var b = 6
	var temp = input.length / 6
	//divide each 6 bits and put them into an array
	for (var i =0;i < temp;i++)
	{
		inputarray.push(input.slice(a,b))
		a = b
		b = b + 6
	}

	return inputarray
}
/*
	Take brallie binary input of 6 bits and turn them into words
	
	example data: a-z
	100000110000100100100110100010110100110110110010010100010110101000111000101100101110101010111100111110111010011100011110101001111001010111101101101111101011
	
	a-c:
	100000110000100100

	a-e:
	100000110000100100100110100010

	1.identify a single character via the 6 bits

*/


//flags
var isFlagSet = false
var isCapsSingle = false
var isCapsDouble =false
var isNumber = false

// --- parser functions --- //
function getTileInformation(tile)
{
	return lookupParser.find(element => element.id == tile)
}



//split into functions, one to get the current and next tile, one to process the special tiles/indicators, one to process the flags/indicators, one to output the text
function processString(inputArray)
{
    // lookupParser[inputArray[i+1].id] //returns id of the tile ahead one position in the array
	// lookupParser[inputArray[i].id] //returns id of the current tile in the array
	

	var text = "";
	
	//inputArray.forEach(element => {
	for (let i = 0; i < inputArray.length; i++)
	{
		//split into function
	
		try
		{
			//change to assign nextTileValue value to currentTileValue so we're only running the compare on the parser array once. add to the todo
			currentTileValue = getTileInformation(inputArray[i])
			//scan ahead for the next letter
			nextTileValue = getTileInformation(inputArray[i+1])
			//currentTileValue = lookupParser[inputArray[i]];
		}
		catch(e)
		{
			console.log(e)
		}
		//end function split

		if(currentTileValue !== undefined)
		{
			switch (currentTileValue.id) //switch sets the flags based on the tile value, the flags are then processed later 
			{ 

				case "000001": //captial identifier
					if (Boolean(isCapsSingle) || Boolean(isCapsDouble) == false) //if isCaps == true continue untill the caps flag is set to false via terminator
					{
						if(nextTileValue !== undefined){
						//look ahead to see if the next tile is a caps symbol
							if(nextTileValue.id == "000001")
							{
								isCapsDouble = true
								isFlagSet = true
								i++
							}
							// if caps is true for the next tile set the falg, the fi will continue to write in caps untill the flag is turned off
							//if the character ahead is special it will be capitalised, way round is to set a special flag in the object, need to set up objects for the tiles next
							else
							{
								isCapsSingle = true
								isNumber = false
							}
						}
					}

				break;

					
				case "001111": //number identifier
				/*
				number logic
				//numeric indicator is "001111" 
				//numbers are terminated by anyhting other than numbers, periods, commas, simple fraction lines and line continuation indicators p.34 'learn brallie book'
				//mixing numbers with letters, dot 56 (000011) is the lowercase  number terminator when working with numbers and words eg "text2.txt" p33 for a better example
				// dot 6 (000001) is the capital indicator
				//numbers with spaces dot 5 (000010) is used to space numbers eg 123 456 789, mostly used with credit cards
				// dot 5 is also used to indicate a new line for large numbers
				*/

					if(nextTileValue !== undefined)
					{
						
							isNumber = true
							isFlagSet = true
							isCapsSingle = false
							isCapsDouble = false
						
						//check if the next tile has a number value defined, if not unset the flag
						if (nextTileValue.number == undefined)
						{
							isNumber = false
							isFlagSet = false
							i++

						}
					}

					
				break;
				

				case "000000": //space
				//space is used as a terminator for most indicators
					//clear all flags
					isCapsSingle = false
					isCapsDouble = false
					isNumber = false
					
					text = buildString(text," ")
										
					isFlagSet = false
				break;

				case undefined:
					//do nothing if character is undefined, still needs to update text(test)
					//shouldnt be able to get here, but do nothing to the text just incase, this case statement can probably be deleted
					text = text;
					break;

				default:
					//check for flags set above

					//change into a function to process all the rules, not using if statements
					if(Boolean(isCapsSingle) || Boolean(isCapsDouble)  == true)
					{
						//text = text + currentTileValue.uppercase;
						text = buildString(text,currentTileValue.uppercase)
						isCapsSingle = false
					}

					else if(isNumber == true)
					{
						if (currentTileValue.number !== undefined)
						{
							//text = text + currentTileValue.number;
							text = buildString(text,currentTileValue.number)
						}
						else
						{
							isNumber = false
							//text = text + currentTileValue.character
							text = buildString(text,currentTileValue.character)
						}
					 	
					}
					else
					{
						//text = text + currentTileValue.character
						text = buildString(text,currentTileValue.character)

					}
					break;
			}
		}
	}
	

	return text
}

function buildString(text, letter)
{

	return text = text + letter

}
//rename
function flagChecker()
{
//priority list so far:
//1.numbers
//2.caps
//3 maybe space




}


//rename
//parser entry point, takes the braille array and returns the translated text 
function mainProcess(input)
{
	
	try {	
		validateStringSize(input)

	} catch (e) {
		console.error(e)
		return e + "Input Error"
	}
	//data is valid now convert to a collection of 6 characters
	let Temp = inputToArray(input)
	
	//process bBinary to string of text
	return processString(Temp)


}









