var heading="top";//表示小方块当前运动方向

function init()
{
		
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
function turnleft()
{
	var obj = document.getElementById("s1");
	switch(heading)
	{
		case "top":
			obj.style.width="15px";
			obj.style.height="47px";
			obj.style.left="0px";
			obj.style.top="0px";
			//注意：这里不能用obj2.style.right="0px"，
			//因为这会使得同时存在left和right属性，而浏览器会优先应用left属性
			//所以这里选择left+top的组合
			heading="left";
			break;
		case "bottom":
			obj.style.width="15px";
			obj.style.height="47px";
			obj.style.left="32px";
			obj.style.top="0px";
			heading="right";
			break;
		case "left":
			obj.style.width="47px";
			obj.style.height="15px";
			obj.style.top="32px";
			obj.style.left="0px";
			heading="bottom";
			break;
		case "right":
			obj.style.width="47px";
			obj.style.height="15px";
			obj.style.top="0px";
			obj.style.left="0px";
			heading="top";
			break;
	}
}
function turnright()
{
	back();
	turnleft();
}
function back()
{
	var obj = document.getElementById("s1");
	switch(heading)
	{
		case "top": obj.style.top="32px";heading="bottom";break;
		case "bottom": obj.style.top="0px";heading="top";break;
		case "left": obj.style.left="32px";heading="right";break;
		case "right": obj.style.left="0px";heading="left";break;
	}
}