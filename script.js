

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return 'Error!Не тупи';
    }
    return a / b;
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    
    if(operator === "+"){
		return sum(a, b);
	}
	 if(operator === "-"){
		return subtract(a, b);
	 }
	   if(operator === "*"){
		 return multiply(a, b);
	  }
      if(operator === "/"){
        return division(a, b)
	  }
}