function precheck(n)
{
	var ele = document.getElementById("lab"+n);
	ele.style.display="block";
}
var isOkey = new Array(5);
for(i=0;i<5;i++)
{
	isOkey[i]=false;
}
function strlen(str){
	//先把中文替换成两个字节的英文，再计算长度
	return str.replace(/[\u0391-\uFFE5]/g,"aa").length; 
}
function check(n)
{
	var lab = document.getElementById("lab"+n);
	var ele = document.getElementById("input"+n);
	var len = strlen(ele.value);	
	switch(n)
	{
		case 1://检验用户名
		{
			if(len>4)
			{
				lab.innerHTML="名称格式正确";
				lab.style.color="#008000";
				ele.style.borderColor="#00ff00";
				isOkey[0]=true;
			}
			else
			{
				lab.innerHTML="必填，长度为4-16个字符";
				lab.style.color="#ff0000";
				ele.style.borderColor="#ff0000";
				isOkey[0]=false;
			}
			break;
		}
		case 2://检验密码
		{
			if(len>4)
			{
				lab.innerHTML="密码可用";
				lab.style.color="#008000";
				ele.style.borderColor="#00ff00";
				isOkey[1]=true;
			}
			else
			{
				lab.innerHTML="必填，长度为4-16个字符";
				lab.style.color="#ff0000";
				ele.style.borderColor="#ff0000";
				isOkey[1]=false;
			}
			break;
		}
		case 3://密码确认
		{
			if(ele.value==document.getElementById("input2").value && isOkey[1])
			{
				lab.innerHTML="密码输入一致";
				lab.style.color="#008000";
				ele.style.borderColor="#00ff00";
				isOkey[2]=true;
			}
			else if(!isOkey[1])
			{
				lab.innerHTML="请重新输入密码";
				lab.style.color="#ff0000";
				ele.style.borderColor="#ff0000";
				isOkey[2]=false;
			}
			else
			{
				lab.innerHTML="密码不一致，请重新输入";
				lab.style.color="#ff0000";
				ele.style.borderColor="#ff0000";
				isOkey[2]=false;
			}
			break;
		}
		case 4://邮箱校验
		{
			var re_mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
			var isEmali = re_mail.test(ele.value);
			if(isEmali)
			{
				lab.innerHTML="邮箱格式正确";
				lab.style.color="#008000";
				ele.style.borderColor="#00ff00";
				isOkey[3]=true;
			}
			else
			{
				lab.innerHTML="邮箱格式错误";
				lab.style.color="#ff0000";
				ele.style.borderColor="#ff0000";
				isOkey[3]=false;
			}
			break;
		}
		case 5://是手机号校验
		{
			var re_tel = /^[1]{1}[34578]{1}[[0-9]{9}/;
			var isTel = re_tel.test(ele.value);
			if(isTel)
			{
				lab.innerHTML="手机格式正确";
				lab.style.color="#008000";
				ele.style.borderColor="#00ff00";
				isOkey[4]=true;
			}
			else
			{
				lab.innerHTML="手机格式错误";
				lab.style.color="#ff0000";
				ele.style.borderColor="#ff0000";
				isOkey[4]=false;
			}
			break;
		}

	}
}
function submit()
{
	for(i=1;i<=5;i++)
	{
		precheck(i);
		check(i);
		if(!isOkey[i-1])
		{
			alert("提交失败！");
			return 1;
		}
	}
	alert("提交成功！");
	return 0;
}