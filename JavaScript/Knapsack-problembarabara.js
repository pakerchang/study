// 演算法動態變形，背包問題
// https://www.google.com/search?q=%E8%83%8C%E5%8C%85%E5%95%8F%E9%A1%8C
// http://www2.lssh.tp.edu.tw/~hlf/class-1/lang-c/DP.pdf
var tmpData = {
	h3: {
		parent: "h2",
		name: "副总经理(市场)",
	},
	h1: {
		parent: "h0",
		name: "公司机构",
	},
	h7: {
		parent: "h6",
		name: "副总经理(总务)",
	},
	h4: {
		parent: "h3",
		name: "销售经理",
	},
	h2: {
		parent: "h1",
		name: "总经理",
	},
	h8: {
		parent: "h0",
		name: "财务总监",
	},
	h6: {
		parent: "h4",
		name: "仓管总监",
	},
	h5: {
		parent: "h4",
		name: "销售代表",
	},
	h0: {
		parent: "",
		name: "root",
	},
};

var plain2Tree = (obj) => {
	var key, res;
	for (key in obj) {
		var parent = obj[key].parent;
		if (parent === "") {
			res = obj[key];
		} else {
			obj[parent][key] = obj[key];
		}
	}
	return res;
};

console.log(plain2Tree(tmpData));
