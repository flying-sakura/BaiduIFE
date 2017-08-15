function init(){
	/*button onclick事件绑定*/
	var obj=document.getElementById("add_L_btn");
	obj.onclick=function() {
		if(divCount<6){
			addLeft(getInput());
			divCount++;
			input_obj.value="";
		}
		else alert("最大添加数量限制60个");
	}
	obj=document.getElementById("add_R_btn");
	obj.onclick=function() {
		if(divCount<6){
			addRight(getInput());
			divCount++;
			input_obj.value="";	
		}
		else alert("最大添加数量限制60个");
	}
	obj=document.getElementById("del_L_btn");
	obj.onclick=function() {
		delLeft(getInput());
		divCount--;
	}
	obj=document.getElementById("del_R_btn");
	obj.onclick=function() {
		delRight(getInput());
		divCount--;
	}
	obj=document.getElementById("sort");
	obj.onclick=function() {
		sort();
	}
}
function getInput(){
	var input_obj=document.getElementById("input1");
	var n=Number(input_obj.value);
	if(n>=10 && n<=100)
		return n;
	else{
		alert("请输入10-100以内的数字");
		return "error";
	}
}
function addLeft(n){
	if(n!="error"){
		var Node=displayObj.getElementsByTagName("div");
		var headNode=Node[0];
		var divNode=document.createElement("div");
		displayObj.insertBefore(divNode,headNode);
		divNode.style.height=n+"px";
		divNode.onclick=function() {//通过点击删除当前div
			displayObj.removeChild(divNode);
			divCount--;
		}
	}
}
function addRight(n){
	if(n!="error"){
		var Node=displayObj.getElementsByTagName("div");
		var rearNode=Node[Node.length-1];
		var divNode=document.createElement("div");
		displayObj.appendChild(divNode);
		divNode.style.height=n+"px";
		divNode.onclick=function() {
			displayObj.removeChild(divNode);
			divCount--;
		}
	}
}
function delLeft(){
	var Node=displayObj.getElementsByTagName("div");
	var headNode=Node[0];
	displayObj.removeChild(headNode);
}
function delRight(){
	var Node=displayObj.getElementsByTagName("div");
	var rearNode=Node[Node.length-1];
	displayObj.removeChild(rearNode);
}
function sort(){
	var Node=displayObj.getElementsByTagName("div");
	var data=new Array();
	for(var i=0;i<Node.length;i++)
		data[i]=parseInt(Node[i].style.height);
	data=bubbleSort(data);
	for(var i=0;i<Node.length;i++)
		Node[i].style.height=data[i]+"px";
}
function bubbleSort(data){//冒泡排序
	for(var i=0;i<data.length-1;i++){
		for(var j=0;j<data.length-1-i;j++){
			if(data[j]>data[j+1]){
				var tmp=data[j];
				data[j]=data[j+1];
				data[j+1]=tmp;
			}
		}
	}
	return data;
}

var input_obj=document.getElementById("input1");
var displayObj=document.getElementById("display");
var divCount=0;
init();


