
exports.min = function min (array) {
  	if (!Array.isArray(array) || array.length === 0) { 
		return 0; 
  	}
  	else { 
  		let min = array[0];
    	for (let i = 0; i < array.length; i++) {
    		min = min > array[i] ? array[i] : min
		}
		return min;
  	}
}

exports.max = function max (array) {
  	if (!Array.isArray(array) || array.length === 0) { 
  		return 0; 
  	}
	else { 
		let max = array[0];
	    for (let i = 0; i < array.length; i++) {
	    	max = max < array[i] ? array[i] : max
		}
		return max;
	}
}

exports.avg = function avg (array) {
	if (!Array.isArray(array) || array.length === 0) { 
  		return 0; 
  	}
  	else { 
  		let arraySum = array.reduce((a, b) => a + b);
  		return arraySum / array.length;
  	}
}
