//data
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

}*/

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
    "character": ";",
    "uppercase": ";"
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
    "character": "\"",
    "uppercase": "\""
}
let closequote =
{   
    "id" : "010000",
    "character": "\'",
    "uppercase": "\'"
}
let hyphen =
{   
    "id" : "001001",
    "character": "-",
    "uppercase": "-"
}





// SPECIAL CHARACTERS
let SPACE =
{   
    "id" : "000000"

}
let CAPS =
{   
    "id" : "000001"
    
}

let NUMBER =
{   
    "id" : "001111"

}





var lookup = []

lookup.push(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)

console.log(lookup)
console.log(lookup[2])
console.log(lookup[2].id)
console.log(lookup[2].character)
console.log(lookup[2].uppercase)
console.log(lookup[2].number)

