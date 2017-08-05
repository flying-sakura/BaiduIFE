var school=new Array();
school[0]=["北京大学","清华大学","中国人民大学","北京理工大学"];
school[1]=["四川大学","电子科技大学","西南交通大学","西南财经大学"];
function addProvince()
{
	var province=["北京","四川"];
	
	var obj=document.getElementById("province");
	obj.options.length=0;
	var i=0;
	while(province[i]!=null)
	{
		obj.options.add(new Option(province[i],i));
		i++;
	}
	addSchool(0);
}
function display(str)
{
	if("in"==str)
	{
		obj=document.getElementById("notIn");
		obj.style.visibility="hidden";
		obj2=document.getElementById("in");
		obj2.style.visibility="visible";
		addProvince();
	}
	else
	{
		obj=document.getElementById("in");
		obj.style.visibility="hidden";
		obj2=document.getElementById("notIn");
		obj2.style.visibility="visible";
	}
}
function addSchool(province)
{
	var obj=document.getElementById("school");
	var n=parseInt(province,10);
	var i=0;
	obj.options.length=0;
	while(school[n][i]!=null)
	{
		obj.options.add(new Option(school[n][i],i));
		i++;
	}

}