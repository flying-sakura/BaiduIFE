var isSubWindowShowing=false;
window.onload=function(){
	window.msgBox=new MsgBox({title:"新标题"});
	containerObj=document.getElementById("container");
	
	msgBox.blur.onclick=function(){
		//event.stopPropagation();
		msgBox.hide();
	}

	btnObj=document.getElementById("btnFloat");
	btnObj.onclick=function(){
		msgBox.show();
		isSubWindowShowing=true;
		//event.stopPropagation();
	}

}


