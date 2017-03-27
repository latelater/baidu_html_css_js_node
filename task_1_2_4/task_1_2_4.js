// task_1_2_4.js


	var arr = new Array();

	// var inputText = document.getElementById("input_text");

	function LeftPush(){

		var inputText = document.getElementById("input_text");
		var b;
		b = parseInt(input_text.value, 10);
		// console.log(b);
		if (b != NaN) {
			arr.unshift(b);
			// for (var i = arr.length - 1; i >= 0; i--) {
			// 	arr[i] = arr[i+1];
			// }

			// arr[0] = b;
			AddSpan();
		}
		else
			alter("请输入一个数字~");


	}

	function RightPush(){

		var inputText = document.getElementById("input_text");
		var a;
		a = parseInt(inputText.value, 10);
		if (a != NaN) {
			// var x = arr.length;
			// arr[x] = a;
			arr.push(a);
			AddSpan();
		}
		else
			alert("请输入一个数字~");
	}

	function LeftPop(){

		if (arr.length != 0) {

			console.log("arr.length" + arr.length);
			alert("成功删除" + arr[0] + "~");
			// for (var i = 0; i < arr.length; i++) {
			// 	arr[i] = arr[i+1];
			// }
			arr.shift();

			AddSpan();
		}

	}

	function RightPop(){
		var x = arr.length-1;
		if (arr.length != 0) {
			console.log("arr.length" + arr.length);
			alert("成功删除" + arr[x] + "~");
			arr.pop();

			AddSpan();
		}
	}

	function AddSpan(){
		//DeleteSpan(); //把以前显示的span删除
		//removeAllChild();

    	var div = document.getElementById("queue_text"); 
    	div.innerHTML = '';
		console.log(arr);
		for (var i = 0; i < arr.length; i++) { //从新吧整个arr【】展示
			var span = document.createElement("span");
			var node = document.createTextNode(arr[i] + " ");			
            span.setAttribute('class', 'queue-node');
			span.appendChild(node);

			var element = document.getElementById("queue_text");
			element.appendChild(span);
		}

	}

	function removeAllChild()  
	{  
    	var div = document.getElementById("queue_text");  
    	while(div.hasChildNodes()) //当div下还存在子节点时 循环继续  
    	{  
        	div.removeChild(div.firstChild);  
    	}  
	}  
