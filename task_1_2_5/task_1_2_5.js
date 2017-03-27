// task_1_2_5.js


// 任务描述
// 基于上一任务
// 限制输入的数字在10-100
// 队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
// 队列展现方式变化如图，直接用高度表示数字大小
// 实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来，参考见下方参考资料


	var arr = new Array();

	function LeftPush(){

		var inputText = document.getElementById("input_text");
		var b;
		b = parseInt(input_text.value, 10);
		if (b >= 10 && b <= 100) {
			if (arr.length < 60) {
				arr.unshift(b);
				var id = 'queue_text';
				AddSpan(id);
			}
			else
				alert("元素添加超过60个！");
		}
		else
			alert("输入元素范围在10~100!");

	}

	function RightPush(){

		var inputText = document.getElementById("input_text");
		var a;
		a = parseInt(inputText.value, 10);
		if (a >= 10 && a <= 100) {
			// var x = arr.length;
			// arr[x] = a;
			if (arr.length < 60) {
				arr.push(a);
				var id = 'queue_text';
				AddSpan(id);
			}
			else
				alert("元素添加超过60个！");
		}
		else
			alert("输入元素范围在10~100!");

	}

	function LeftPop(){

		if (arr.length != 0) {

			console.log("arr.length" + arr.length);
			alert("成功删除" + arr[0] + "~");
			arr.shift();
			var id = 'queue_text';
			AddSpan(id);
		}

	}

	function RightPop(){
		var x = arr.length-1;
		if (arr.length != 0) {
			console.log("arr.length" + arr.length);
			alert("成功删除" + arr[x] + "~");
			arr.pop();
			var id = 'queue_text';

			AddSpan(id);
		}
	}

	function AddSpan(id){

    	var div = document.getElementById(id); 
    	div.innerHTML = '';
		console.log(arr);



		for (var i = 0; i < arr.length; i++) { //从新吧整个arr【】展示
			var div = document.createElement("div");
			// var node = document.createTextNode(arr[i]);	 		
            div.setAttribute('class', 'queue-node');
            div.style.height = arr[i] + 'px';
            var temp = 100 - arr[i];
            div.style.marginTop = temp + 'px';
			// div.appendChild(node);

			var element = document.getElementById(id);
			element.appendChild(div);
		}

	}

	function Sort(){
		for (var i = 0; i < arr.length-1; i++) {
			var x = 0;
			for (var j = arr.length - 1; j > i; j--) {
				if(arr[j] < arr[j-1]){
					x =1;
					var temp = arr[j];
					arr[j] = arr[j-1];
					arr[j-1] = temp;
				}
			}
			if(x == 0){
				break;
			}
		}
		id = 'queue_text_sort';
		AddSpan(id);
	}

	function removeAllChild()  
	{  
    	var div = document.getElementById("queue_text");  
    	while(div.hasChildNodes()) //当div下还存在子节点时 循环继续  
    	{  
        	div.removeChild(div.firstChild);  
    	}  
	}  
