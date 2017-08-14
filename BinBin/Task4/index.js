function init(){
	/*button onclick事件绑定*/
	var obj=document.getElementById("add_L_btn");
	obj.onclick=function() {
		addLeft(getInput());
	}
	obj=document.getElementById("add_R_btn");
	obj.onclick=function() {
		addRight(getInput());
	}
	obj=document.getElementById("del_L_btn");
	obj.onclick=function() {
		delLeft(getInput());
	}
	obj=document.getElementById("del_R_btn");
	obj.onclick=function() {
		delRight(getInput());
	}
	obj=document.getElementById("input1");
	obj.onfocus=function() {
		obj.value="";
	}
}
function getInput(){
	var input_obj=document.getElementById("input1");
	var n=Number(input_obj.value);
	if(!isNaN(n))
		return n;
	else return "error";
}
function addLeft(n){
	if(n!="error"){
		var Node=displayObj.getElementsByTagName("div");
		var headNode=Node[0];
		var divNode=document.createElement("div");
		displayObj.insertBefore(divNode,headNode);
		divNode.innerText=n;
		divNode.onclick=function() {//通过点击删除当前div
			displayObj.removeChild(divNode);
		}
	}
	
}
function addRight(n){
	if(n!="error"){
		var Node=displayObj.getElementsByTagName("div");
		var rearNode=Node[Node.length-1];
		var divNode=document.createElement("div");
		displayObj.appendChild(divNode);
		divNode.innerText=n;
		divNode.onclick=function() {
			displayObj.removeChild(divNode);
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

init();
var input_obj=document.getElementById("input1");
var displayObj=document.getElementById("display");
