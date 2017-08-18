function MsgBox(info){
//info 键值对,接受的参数：
/*
//height:msgbox的高度
width:msgbox的宽度
title:msgbox的标题
content:msgbox的内容

*/	//profile
	this.width=info.width || "400px";
	this.title=info.title || "标题";
	this.content=info.content || "内容";

	//method
	
	//process
	this._init_(info);
	this.blur=document.getElementById("blur");
}
MsgBox.prototype={
	//method
	_init_:function(info){
		//##########################################
		//前方高能
		//##########################################
		//this.height=info.height || "200px";
		
		//为网页背景设置模糊效果div
		var blur=document.createElement("div");	
		document.body.appendChild(blur);
		blur.id="blur";
		blur.style.position="absolute";
		blur.style.height=window.innerWidth+"px";
		blur.style.width=window.innerWidth+"px";
		blur.style.zIndex="998";
		blur.style.display="none";

		var msgBoxObj=document.createElement("div");
		document.body.appendChild(msgBoxObj);
		msgBoxObj.id="msgbox";
		msgBoxObj.style.position="fixed";

		msgBoxObj.style.height=this.height;
		msgBoxObj.style.minHeight="200px";
		msgBoxObj.style.maxHeight="360px";
		msgBoxObj.style.width=this.width;	
		msgBoxObj.style.left="400px";
		msgBoxObj.style.top="150px";
		msgBoxObj.style.backgroundColor="#ffffff";
		msgBoxObj.style.border="1px solid #bebebe";
		msgBoxObj.style.zIndex="999";
		msgBoxObj.style.display="none";

		titleObj=document.createElement("div");
		msgBoxObj.appendChild(titleObj);
		titleObj.style.position="relative";
		titleObj.style.width="100%";
		titleObj.style.height="40px";
		titleObj.style.borderBottom="1px solid gray";
		titleObj.style.backgroundColor="#99ccff";
		titleObj.style.cursor="move";
		titleObj.innerText=this.title;

		contentObj=document.createElement("div");
		msgBoxObj.appendChild(contentObj);
		contentObj.style.position="relative";
		contentObj.style.width="100%";
		contentObj.style.minHeight="150px";;
		contentObj.innerText=this.content;
		contentObj.style.textIndent="2em";
		
		btnGroupObj=document.createElement("div");
		msgBoxObj.appendChild(btnGroupObj);
		btnGroupObj.style.position="relative";
		btnGroupObj.style.padding="10px";
		btnGroupObj.style.float="right";
		btnGroupObj.style.display="inline-block";

		btnObj1=document.createElement("button");
		btnGroupObj.appendChild(btnObj1);
		this.btn1=btnObj1;
		btnObj1.innerText="确认";
		btnObj1.style.width="100px";
		btnObj1.style.height="40px";
		btnObj1.onclick=function(){
			var blur=document.getElementById("blur");
			blur.style.display="none";
			document.getElementById("msgbox").style.display="none";
		}
		btnObj2=document.createElement("button");
		btnGroupObj.appendChild(btnObj2);
		this.btn2=btnObj2;
		btnObj2.innerText="取消";
		btnObj2.style.width="100px";
		btnObj2.style.height="40px";
		btnObj2.style.marginLeft="10px";
		btnObj2.onclick=function(){
			var blur=document.getElementById("blur");
			blur.style.display="none";
			document.getElementById("msgbox").style.display="none";
		}
	},

	show:function(){	
		var blur=document.getElementById("blur");
		blur.style.backgroundColor="rgba(0,0,0,0.2)";
		blur.style.display="block";
		document.getElementById("msgbox").style.display="block";
	},
	hide:function(){
		var blur=document.getElementById("blur");
		blur.style.display="none";
		document.getElementById("msgbox").style.display="none";
	}

}