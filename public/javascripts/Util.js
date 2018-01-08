/**
 * Created by xiaolb on 2018/1/8.
 */
/*
* @params   Array
* retuen    Array
*
* */
function moverUndefined(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] && arr[i] !== 'undefined') {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

module.exports = moverUndefined;