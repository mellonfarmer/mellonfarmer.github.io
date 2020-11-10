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