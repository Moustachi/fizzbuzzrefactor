var input = +'';	 //This is going to be the variable
			//that stores the user input. The +'' is
			//placed there as instructed to convert
			//prompt()'s value from string to number'

var count = 1; 	 //This variable is a starting point
				//counter that will count from 1 to input.

$(document).ready(function() {
    	//after the page loads, the bottom code will
       //store prompt()'s response in the input variable
       //and will add 1 to count until count is = to input.
    for (input = parseInt(prompt("Enter a number.")); count <= input; count++) {
    	var string = '';
    	//parseInt only works a little. ex: 8r09 will cause
    	//fizzbuzz to stop counting at 8 rather 809.

    	if (count % 3 == 0) {
    		string += 'fizz';
    	}//this if statement turns count into 'fizz'
    	//if the value of count is disvisble by three
    	//with no remainder.

    	if (count % 5 == 0) {
    		string += 'buzz';
    	}//this if statement turns count into 'buzz'
    	//if the value of count is disvisble by five
    	//with no remainder.

    	if (string == '') {
    		string += count;
    	}//this if statement turns string into count
    	//(or count into string?) if string == nothing.

    	console.log(string);
    	 //after all that evalutation
    	//on the value of count, print
    	//the string for this current iteration.
    };
});