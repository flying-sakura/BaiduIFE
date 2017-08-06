var heading="top";//表示小方块当前运动方向

function traL()
{
	var tmp=heading;
	heading="left";
	go();
	heading=tmp;	
}
function traR()
{
	var tmp=heading;
	heading="right";
	go();
	heading=tmp;	
}
function traT()
{
	var tmp=heading;
	heading="top";
	go();
	heading=tmp;	
}
function traB()
{
	var tmp=heading;
	heading="bottom";
	go();
	heading=tmp;	
}
function movL()
{
	heading="left";
	turn("left");
	go();
}
function movR()
{
	heading="right";
	turn("right")
	go();
}
function movT()
{
	heading="top";
	turn("top");
	go();
}
function movB()
{
	heading="bottom";
	turn("bottom");
	go();
}
function turn(des)
{
	var obj=document.getElementById("s1");
	switch(des)
	{
		case "left":
			obj.style.left="0px";
			obj.style.top="0px";
			obj.style.width="15px";
			obj.style.height="48px";
			break;
		case "right":
			obj.style.left="33px";
			obj.style.top="0px";
			obj.style.width="15px";
			obj.style.height="48px";
			break;
		case "top":
			obj.style.top="0px";
			obj.style.left="0px";
			obj.style.width="48px";
			obj.style.height="15px";
			break;
		case "bottom":
			obj.style.top="33px";
			obj.style.left="0px";
			obj.style.width="48px";
			obj.style.height="15px";
			break;
	}
}
function go()
{
	var obj=document.getElementById("smartcell");
	var objBtnGo=document.getElementById("btn_go");
	pos_x=obj.offsetLeft;
	pos_y=obj.offsetTop;

	switch(heading)
	{
		case "top":
			if(pos_y>50)
			{
				pos_y -= 50; 
				obj.style.top=pos_y + "px";
			}
			break;
		case "bottom": 
			if(pos_y<450)
			{
				pos_y += 50;
				obj.style.top=pos_y + "px";
			}
			break;
		case "left": 
			if(pos_x>50)
			{
				pos_x -= 50;
				obj.style.left=pos_x + "px";
			}
			break;
		case "right": 
			if(pos_x<450)
			{
				pos_x += 50;
				obj.style.left=pos_x + "px";	
			}
			break;
	}
}
