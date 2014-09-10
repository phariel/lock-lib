function stringToUnicode(buffer) {
	var result = "";
	buffer.forEach(function (v) {
		result += "\\u" + ("000" + v.charCodeAt(0).toString(16)).substr(-4);
	});
	return result;
}

function unicodeToString(buffer) {
	var result = "";
	var arr = buffer.split('\\u');
	arr.forEach(function (v, i) {
		if (i > 0) {
			result += String.fromCharCode(parseInt(v, 16));
		}
	});
	return result;
}

exports.lock = function (buffer) {
	return stringToUnicode(buffer);
};

exports.unlock = function (buffer) {
	return unicodeToString(buffer);
};