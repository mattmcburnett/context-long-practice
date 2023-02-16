const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {


	setTotal(newTotal) {
		return this.total = newTotal;
	}

	squared() {
		return this.total = this.total * this.total
	}
	modulo(num) {
		return this.total = this.total % num;
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
