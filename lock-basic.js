var BASIC_TAG = "0001";

function lock(buffer) {
    var result = "";
    for (var i = 0; i < buffer.length; i++) {
        result += ("000" + buffer[i].charCodeAt(0).toString(16)).substr(-4);
    }
    return BASIC_TAG + result;
}

function unlock(buffer) {
    var result = "";
    var temp = "";
    for (var i = 0; i < buffer.length; i++) {
        var index = i + 1;
        if (index > 4) {
            temp += buffer[i];
            if (index % 4 === 0) {
                result += String.fromCharCode(parseInt(temp, 16));
                temp = "";
            }
        }
    }
    return result;
}

exports.lock = function (buffer) {
    return lock(buffer);
};

exports.unlock = function (buffer) {
    return unlock(buffer);
};