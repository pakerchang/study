let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let b = ["B", "B", "C"];

function subset(a, b) {
	let mixSet = new Set([...a, ...b]);
	let result = mixSet.size === a.length ? true : false;

	return result;
}
console.log(subset(a, b));


// function isSubset(a, b) {
// 	if (a.length > b.length) {
// 		return false;
// 	}

// 	var hash = {};
// 	for (var i = 0; i < a.length; ++i) {
// 		if (hash[a[i]] === undefined) {
// 			hash[a[i]] = 0;
// 		}
// 		hash[a[i]]++;
// 		// console.log(hash[a[i]]);
// 	}
// 	console.log(hash);
// 	for (var i = 0; i < b.length; ++i) {
// 		if (hash[b[i]] !== undefined) hash[b[i]]--;
// 	}

// 	var keys = Object.keys(hash);
// 	for (var each_key in keys) {
// 		if (hash[keys[each_key]] > 0) return false;
// 	}
// 	return true;
// }

// // test
// var a = ["B", "A", "C"];
// var b = ["A", "B", "C", "D"];
// console.log(isSubset(a, b));

// a = ["B", "A", "C", "A"];
// b = ["A", "B", "C", "D", "A"];

// console.log(isSubset(a, b));
// const isSubSet = (array1, array2) => array2.every((item) => array1.includes(item));
// console.log(isSubSet(array1, array2));

// function isSubset2(array1, array2) {
// 	let count = 0;

// 	// 怎麼取 array1,array2 的 value;
// 	for (let j = 0; j < array1.length; j++) {
// 		if (array2[i] !== array1[j]) count++;
// 	}
// 	for (let i = 0; i < array2.length; i++) {}
// }

// function tt() {
// 	let count = 0;
// 	for (var i = 1; i <= 5; i++) {
// 		console.log(count++, 1 + i);
// 		setTimeout(function () {
// 			console.log(i);
// 		}, 0);
// 	}
// }
// console.log(tt());

// 時間複雜度就如同單向流水線作業，若非一次性批量處理，單次處理的量＝時間
// array2 為動態資料遍歷匹配 array1 靜態資料為主，單次匹配最大上限為 26 - X ，遍歷加上比對，其複雜度是為 O(2^n) ?
