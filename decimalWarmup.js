module.exports = {
	convert: function(x){
		if (x === 0 || x === 1)
			return x
		else if (x % 1 === 0)
			return true
	}
}

