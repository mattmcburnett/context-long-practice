// Your code here

class Calculator {
	total = 0
	add(num){
		this.total += num;
		return this.total;
	}

	subtract(num){
		this.total -= num;
		return this.total;
	}
	multiply(num){
		this.total *= num;
		return this.total;
	}
	divide(num){
		this.total /= num;
		return this.total;
	}
}


// let calculator = new Calculator();
// console.log(calculator.subtract(35))


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
