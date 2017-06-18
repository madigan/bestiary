module.exports = (number, sides, modifier = 0) => {
	return {
		toString: () => {
			var str = `$number{}d${sides}`;
			if(modifier && modifier != 0) {
				str += modifier > 0 ? '+' : '-';
				str += modifier
			}
			return str;
		},
		roll: () => {
			var total = 0;
			for(var i = 0; i < number; i++) {
				total += Math.floor(Math.random() * sides) + 1;
			}
			return total;
		}
	};
};
