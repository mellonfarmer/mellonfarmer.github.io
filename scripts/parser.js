//var $ = require("jquery");
//data

//#region
let a =
{   
    "id" : "100000",
    "character": "a",
    "uppercase": "A",
    "number":"1"
}
let b =
{   
    "id" : "110000",
    "character": "b",
    "uppercase": "B",
    "number":"2"
}
let c =
{   
    "id" : "100100",
    "character": "c",
    "uppercase": "C",
    "number":"3"
}
let d =
{   
    "id" : "100110",
    "character": "d",
    "uppercase": "D",
    "number":"4"
}
let e =
{   
    "id" : "100010",
    "character": "e",
    "uppercase": "E",
    "number":"5"
}
let f =
{   
    "id" : "110100",
    "character": "f",
    "uppercase": "F",
    "number":"6"
}
let g =
{   
    "id" : "110110",
    "character": "g",
    "uppercase": "G",
    "number":"7"
}
let h =
{   
    "id" : "110010",
    "character": "h",
    "uppercase": "H",
    "number":"8"
}
let i =
{   
    "id" : "010100",
    "character": "i",
    "uppercase": "I",
    "number":"9"
}
let j =
{   
    "id" : "010110",
    "character": "j",
    "uppercase": "J",
    "number":"0"
}
let k =
{   
    "id" : "101000",
    "character": "k",
    "uppercase": "K"
}
let l =
{   
    "id" : "111000",
    "character": "l",
    "uppercase": "L"
}
let m =
{   
    "id" : "101100",
    "character": "m",
    "uppercase": "M"
}
let n =
{   
    "id" : "101110",
    "character": "n",
    "uppercase": "N"
}
let o =
{   
    "id" : "101010",
    "character": "o",
    "uppercase": "O"
}
let p =
{   
    "id" : "111100",
    "character": "p",
    "uppercase": "P"
}
let q =
{   
    "id" : "111110",
    "character": "q",
    "uppercase": "Q"
}
let r =
{   
    "id" : "111010",
    "character": "r",
    "uppercase": "R"
}
let s =
{   
    "id" : "011100",
    "character": "s",
    "uppercase": "S"
}
let t =
{   
    "id" : "011110",
    "character": "t",
    "uppercase": "T"
}
let u =
{   
    "id" : "101001",
    "character": "u",
    "uppercase": "U"
    
}
let v =
{   
    "id" : "111001",
    "character": "v",
    "uppercase": "V"
    
}
let w =
{   
    "id" : "010111",
    "character": "w",
    "uppercase": "W"
    
}
let x =
{   
    "id" : "101101",
    "character": "x",
    "uppercase": "X"
    
}
let y =
{   
    "id" : "101111",
    "character": "y",
    "uppercase": "Y"
    
}
let z =
{   
    "id" : "101011",
    "character": "z",
    "uppercase": "Z"
    
}
//comma
let comma =
{   
    "id" : "010000",
    "character": ",",
    "uppercase": ","
}
let semicolon =
{   
    "id" : "011000",
    "character": "semicolon",
    "uppercase": "SEMICOLON"
}
let colon =
{   
    "id" : "010010",
    "character": ":",
    "uppercase": ":"
}
let fullstop =
{   
    "id" : "010011",
    "character": ".",
    "uppercase": "."
}
let exclimation =
{   
    "id" : "011010",
    "character": "!",
    "uppercase": "!"
}
let brackets =           // might need to turn into a special character
{   
    "id" : "011011",
    "character": "()",
    "uppercase": "()"
}
let questionmark = //start of a quote            // might need to turn into a special character
{   
    "id" : "011001",
    "character": "?",
    "uppercase": "?"
}
let astrix =
{   
    "id" : "001010",
    "character": "*",
    "uppercase": "*"
}
let backslash =
{   
    "id" : "001011",
    "character": "backslash",
    "uppercase": "BACKSHLASH"
}
let closequote =
{   
    "id" : "010000",
    "character": "closequote",
    "uppercase": "CLOASEQUOTE"
}
let hyphen =
{   
    "id" : "001001",
    "character": "hyphen",
    "uppercase": "HYPHEN"
}


//#endregion


// SPECIAL CHARACTERS
let SPACE =
{   
	"id" : "000000",
	"name":"SPACE",
	"character":" ",
    "uppercase": " ",
    "special":"true"
}
let CAPS =
{   
    "id" : "000001",
	"name":"CAPS",
	"character":"",
    "special":"true"

    
}

let NUMBER =
{

    "id" : "001111",
	"name":"NUMBER",
	"character":"",
    "special":"true"

}




//alphabet
var lookupParser = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
//punctuation
lookupParser.push(comma,semicolon,colon,fullstop,exclimation,brackets,questionmark,astrix,backslash,hyphen)
//special
lookupParser.push(SPACE,CAPS,NUMBER)




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
/*
let lookupParser = {
	"100000":"a",
	"110000":"b",
	"100100":"c",
	"100110":"d",
	"100010":"e",
	"110100":"f",
	"110110":"g",
	"110010":"h",
	"010100":"i",
	"010110":"j",
	"101000":"k",
	"111000":"l",
	"101100":"m",
	"101110":"n",
	"101010":"o",
	"111100":"p",
	"111110":"q",
	"111010":"r",
	"011100":"s",
	"011110":"t",
	"101001":"u",
	"111001":"v",
	"010111":"w",
	"101101":"x",
	"101111":"y",
	"101011":"z",

	"010000" : ",",
	"011000" : ";",
	"010010" : ":",
	"010011" : ".",
	"011010" : "!",
	"011011" : "()", //add logic for brackets
	"011001" : "?\"", //quote start // add logic for question marks and quotes
	"001010" : "*",
	"001011" : "\"", //quote end
	"010000" : "\'",
	"001001" : "-",
	
	//special tiles Meaning in caps
	//space
	"000000" : "SPACE",
	//Capital Symbol
	"000001" : "CAPS",
	"001111":"NUMBER"

}
*/
let exampleData26 = "100000110000100100100110100010110100110110110010010100010110101000111000101100101110101010111100111110111010011100011110101001111001010111101101101111101011"
let exampleDataB = "10000011000010010010011010001011010011011011001001010001011010100011100010110010111010101011110011111011101001110001111010100111100101011110110110111110101"

let exampleData3 = "100000110000100100"
//a bcde
let exampleData6 = "100000000000110000100100100110100010"
//full caps ABCDE
let exampleDataCF = "000001000001100000110000100100100110100010"
//first cap A bcde
let exampleDataCS = "000001100000000000110000100100100110100010"

let exampleDataCWS = "000001000001100000110000100100100110100010000000100000100000"



//flags
var isFlagSet = false
var isCaps = false
// --- parser functions --- //
function processString(inputArray)
{
    // lookupParser[inputArray[i+1].id] //returns id of the tile ahead one position in the array
	// lookupParser[inputArray[i].id] //returns id of the current tile in the array
	

	var text = "";
	
	//inputArray.forEach(element => {
	for (let i = 0; i < inputArray.length; i++) {
		//const element = inputArray[i];
		let currentTile = inputArray[i];
		let nextTile = inputArray[i+1];
		try{
		letterCheck = lookupParser.find(element => element.id == currentTile);
		//scan ahead for the next letter
		nextLetterCheck = lookupParser.find(element => element.id == nextTile);
		//letterCheck = lookupParser[inputArray[i]];
		}catch(e){
			console.log(e)
		}
		
		switch (letterCheck.id) { //switch sets the flags
			case "000001": //captial
				if (Boolean(isCaps) == false)
				{
					//look ahead to see if the next tile is a caps symbol
					if(nextLetterCheck.id == "000001")
					{
						isCaps = true
						isFlagSet = true
						i++
					}// if caps is true for the next tile set the falg, the fi will continue to write in caps untill the flag is turned off
					else //if the character ahead is special it will be capitalised, way round is to set a special flag in the object, need to set up objects for the tiles next
					{
						//text = text + bpCapital(lookupParser[inputArray[i+1]].id);
						//text = text + lookupParser[inputArray[i+1]].);
						text = text + nextLetterCheck.uppercase;
						i++
					}
				}
				else
				{
					//isCaps = false;
					//bpCapital(element)
					if (Boolean(isFlagSet)== false)
					{
						//text = text + bpCapital(letterCheck);
						text = text + letterCheck.uppercase;
					}
				}
			break;

			case undefined:
				//do nothing if character is undefined
				break;

			case "000000": //space
				//clear all flags
				isCaps = false
				// return a space to the text processor
				//if (Boolean(isFlagSet)== false)
				//{
					text = text + " "
				//}
				isFlagSet = false
			break;
		
			default:
				//check for flags set above
				if(Boolean(isCaps) == true)
				{
					text = text + letterCheck.uppercase;
				}
				else
				{
					text = text + letterCheck.character
				}
				break;
		}

	}
	

	return text
}

function bpCapital(letter)
{
	//private finctin to convert to caps
	let toConvert = letter.toUpperCase()
	return toConvert

}

//import {validateStringSize} from './processing.js'
//import {inputToArray} from './processing.js'
//rename this
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



console.log(mainProcess("100000"))

//console.log(processString(inputToArray(exampleDataCWS)))
//console.log(processString(inputToArray(exampleDataCF)))
//console.log(inputToArray(exampleData26))
//validateStringSize(exampleDataB)










