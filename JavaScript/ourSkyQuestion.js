const faker = require("faker");

class HashMap {
	constructor() {
		this.capacity = 3;
		this.map = new Map();
	}
	get(key) {
		if (this.map.has(key)) {
			this.map.get(key).accessTime = Date.now();
			this.getScore(key);
			return this.map.get(key);
		}
		return -1;
	}
	put(key, value, weight, score) {
		this.map.set(key, { value: value, weight: weight, accessTime: Date.now(), score: score });
		this.getScore(key);
		// if (this.map.size > this.capacity) {
		// 	this.capacityExcess();
		// }
	}
	capacityExcess() {
		let arrayObj;
		arrayObj = Array.from(this.map).sort(function (a, b) {
			return a[1].score > b[1].score ? -1 : 1;
		});
		arrayObj.pop();
		this.map = new Map(arrayObj.map((i) => [i[0], i[1]]));
	}
	getScore(key) {
		let score;
		if (this.map.get(key).accessTime !== Date.now()) {
			score = this.map.get(key).weight / Math.log(Date.now() - this.map.get(key).accessTime + 1);
			console.log("!=");
		} else {
			console.log("=");
			score = this.map.get(key).weight / -100;
		}
		this.map.get(key).score = score;
		return score;
	}
}

let t1 = new HashMap();

t1.put("C", "∑∑œå®œ∑´®", 11);
t1.put("A", "¬…˚œ∆ƒœ´", 11);
t1.put("F", "¬˚œ∆ø∆œˆåœ¬˚∑´µœˆ", 11);
t1.put("P", "øœ´ˆ¨®∆¬˚∆≥µ˜∫˜∆πå", 11);
t1.put("O", "¡™ª•£∆øˆœ¨∑ºª´•¨å", 11);
t1.put("K", "ºª•ºª•ªº•¡™£πøˆπø", 11);

console.log(t1);
setTimeout(() => {
	console.log("after: ", t1.get("F"));
	console.log(t1);
}, 50000);

for (let i = 0; i < 100; i++) {
	console.log(i);
}
// function HashMap() {
// 	this.map = new Map();
// }

// HashMap.prototype = {
// 	get: function (key) {
// 		if (this.map.hasOwnProperty(key)) {
// 			return this.map[key];
// 		}
// 		return -1;
// 	},
// 	put: function (key, value, weight) {
// 		this.map[key] = [value, weight, accessTime];
// 	},
// };
// HashMap.prototype.constructor = HashMap;

// function recur(n, cur) {
// 	if (!cur) cur = 0;
// 	console.log("Recur entry : " + n, cur);
// 	if (n < 2) throw new Error("Invalid Input");
// 	if (n === 2) return 1 / n + cur;
// 	console.log("return : ", n, "cur: ", cur);
// 	return recur(n - 1, cur + 1 / (n * (n - 1)));
// }
// console.log("recur: ", recur(4) + "\n");

// function withoutRecur(n, cur) {
// 	let result;
// 	for (cur = 0; n > 1; n--) {
// 		console.log("withoutRecur entry: ", n, "cur", cur);
// 		if (n === 2) {
// 			result = 1 / n + cur;
// 			return result;
// 		}
// 		cur += 1 / (n * (n - 1));
// 		console.log("return: ", n, "cur", cur);
// 	}
// 	return result;
// }
// console.log("foo: ", withoutRecur(4));
