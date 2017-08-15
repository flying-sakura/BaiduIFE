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
	obj=document.getElementById("query");
	obj.onclick=function() {
		query_obj=document.getElementById("input2");
		query(query_obj.value);
	}

}
function getInput(){
	var str=input_obj.value;
	str=str.replace(/[\s、，]+/g,",");
	var data= str.split(",");
	return data;
}

function addLeft(n){
	for(var key in n){
		if(n[key] != ""){
			var Node=displayObj.getElementsByTagName("div");
			var headNode=Node[0];
			var divNode=document.createElement("div");
			displayObj.insertBefore(divNode,headNode);
			divNode.innerText=n[key];
			divNode.onclick=function() {//通过点击删除当前div
				displayObj.removeChild(divNode);
			}
		}
	}
}
function addRight(n){
	
	var Node=displayObj.getElementsByTagName("div");
	var rearNode=Node[Node.length-1];
	var divNode=document.createElement("div");
	displayObj.appendChild(divNode);
	divNode.innerText=n;
	divNode.onclick=function() {
		displayObj.removeChild(divNode);
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

function query(str){
	var Node=displayObj.getElementsByTagName("div");
	for(var key=0;key<Node.length;key++){
		if(Node[key].innerText.indexOf(str)>=0){
			Node[key].style.backgroundColor="red";
		}
	}
}
init();
var input_obj=document.getElementById("input1");
var displayObj=document.getElementById("display");

/*
str="abc def,gh\nff、ii	mm　quanjiao，douhao\ttab";
console.log(str);
str=str.replace(/[\s、，]+/g,",");
console.log(str);
*/