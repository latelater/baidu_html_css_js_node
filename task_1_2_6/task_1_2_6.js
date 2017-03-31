// task_1_2_6.js

// 基于任务四进行升级
// 将新元素输入框从input改为textarea
// 允许一次批量输入多个内容，格式可以为数字、中文、英文等，
// 可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
// 增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，
// 将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识
// class queue{}
// 将空格作为分隔符

	var arr = new Array();


	function LeftPush() {

		var inputText = document.getElementById("input_text");
		var b = inputText.value;
		var c = b.split(" ");

		for (var i = c.length - 1; i >= 0; i--) {
			arr.unshift(c[i]);
		}
		var id = 'queue_text';
		AddSpan(id, arr);
	}


	function RightPush() {

		var inputText = document.getElementById("input_text");
		var a = inputText.value;
		var c = a.split(" ");

		for (var i = 0; i < c.length; i++) {
			arr.push(c[i]);
		}
		// arr.push(a);
		var id = 'queue_text';
		AddSpan(id, arr);

	}


	function LeftPop() {

		if (arr.length != 0) {
			console.log("arr.length" + arr.length);
			alert("成功删除" + arr[0] + "~");
			arr.shift();
			var id = 'queue_text';
			AddSpan(id, arr);
		}

	}


	function RightPop() {

		var x = arr.length-1;

		if (arr.length != 0) {
			console.log("arr.length" + arr.length);
			alert("成功删除" + arr[x] + "~");
			arr.pop();

			var id = 'queue_text';
			AddSpan(id, arr);
		}
	}


	function AddSpan(id, arrn) {
		//removeAllChild();

    	var div = document.getElementById(id); 
    	div.innerHTML = '';

		// console.log(arr);
		for (var i = 0; i < arrn.length; i++) { //从新吧整个arr【】展示
			var span = document.createElement("span");
			var node = document.createTextNode(arrn[i] + " ");			
            span.setAttribute('class', 'queue-node');
            // span.setAttribute('sty')
            // span.style.marginTop = 10 + 'px';
			span.appendChild(node);

			var element = document.getElementById(id);
			element.appendChild(span);
		}

	}


	function removeAllChild() {  

    	var div = document.getElementById("queue_text"); 

    	while (div.hasChildNodes()) { //当div下还存在子节点时 循环继续  
        	div.removeChild(div.firstChild);  
    	}  
	}  

	//如果一个字符串里包含多个待搜索字符串则值默认匹配第一个
	function Search() {

		var yetSearch = document.getElementById("search_text");
		var yetSearchDate = yetSearch.value;
		var len = yetSearchDate.length;

		var yetarr = new Array();
		var z = 0; //游标，用来判断在整个arr二维数组中存在几个结果
		// console.log(yetSearchDate);
		for (var i = 0; i < arr.length; i++) { 

			var j = len - 1;
			while (j < arr[i].length){

				var k = len - 1;
				for ( ; k > 0; k--) {

					if (arr[i][j] != yetSearchDate[k]) {

						for (var x = 0; x < len; x++) {

							if (arr[i][j] != yetSearchDate[x]) {
								
								if (x == len - 1) {
									j += len - 1;
								}
							}
							else
								j += len - 1 - x;

						}
						// if (arr[i][k]) {}

						break;
					}
					else
						j --;
				}

				if (k == 0) { //如果比较至k==0证明待搜索字符串中含有待匹配字符串，z加一
					z++;
					yetarr[z - 1] = arr[i];
					break;
				}
			}

		}
		var id = "search_result";
		AddSpan(id, yetarr);
		yetarr = [""];
		console.log("一共查询到" + z + "个结果");

	}



