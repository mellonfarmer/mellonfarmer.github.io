$.getScript("brailleTiles.js", function() {
	alert("Script loaded but not necessarily executed.");
 });
 $.getScript("processing.js", function() {
	alert("Script loaded but not necessarily executed.");
 });

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
	text = "";
	//inputArray.forEach(element => {
	for (let i = 0; i < inputArray.length; i++) {
		//const element = inputArray[i];
		letterCheck = lookupParser[inputArray[i]];

		switch (letterCheck) { //switch sets the flags
			case "CAPS": //captial
				if (Boolean(isCaps) == false)
				{
					//look ahead to see if the next tile is a caps symbol
					if( inputArray[i + 1] == "000001")
					{
						isCaps = true
						isFlagSet = true
						i++
					}// if caps is true for the next tile set the falg, the fi will continue to write in caps untill the flag is turned off
					else //if the character ahead is special it will be capitalised, way round is to set a special flag in the object, need to set up objects for the tiles next
					{
						text = text + bpCapital(lookupParser[inputArray[i+1]]);
						i++
					}
				}
				else
				{
					//isCaps = false;
					//bpCapital(element)
					if (Boolean(isFlagSet)== false)
					{
						text = text + bpCapital(letterCheck);
					}
				}
			break;

			case undefined:
				//do nothing if character is undefined
				break;

			case "SPACE":
				//clear all flags
				isCaps = false
				// return a space to the text processor
				if (Boolean(isFlagSet)== false)
				{
					text = text + " "
				}
				isFlagSet = false
			break;
		
			default:
				//check for flags set above
				if(Boolean(isCaps) == true)
				{
					text = text + bpCapital(letterCheck);
				}
				else
				{
					text = text + letterCheck
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


//rename this
function mainProcess(input)
{

	try {	
		validateStringSize(input)

	} catch (e) {
		console.error(e)
		return "Input Error"
	}
	//data is valid now convert to a collection of 6 characters
	let Temp = inputToArray(input)
	
	//process bBinary to string of text
	return processString(Temp)


}



//console.log(mainProcess("000001011100110010100000101001101110"))

//console.log(processString(inputToArray(exampleDataCWS)))
//console.log(processString(inputToArray(exampleDataCF)))
//console.log(inputToArray(exampleData26))
//validateStringSize(exampleDataB)

