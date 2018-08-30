var generateDot = function(color, x_range, y_range) {
	var dot = {color: color, x: 0, y: 0};
	dot.x = Math.random() * (x_range.max - x_range.min) + x_range.min;
	dot.y = Math.random() * (y_range.max - y_range.min) + y_range.min;
	return dot;
}

var generateCluster = function(color, x_range, y_range, n) {
	var data = [];
	for(var i = 0; i < n; i++) {
		data.push(generateDot(color, x_range, y_range));
	}
	return data;
}

module.exports.generateCluster = generateCluster;