var resultDom = document.getElementById("result");
var title = "";
var address = "";

function command(num){
    var str = resultDom.value;
    str = (str == "0" ? "":str);
    str = str+num;
    resultDom.value = str;
}

function del(){
    var str = resultDom.value;
    str = str.substring(0,str.length - 1);
    str = (str == "" ? 0 : str);
    resultDom.value = str;
}

function ShowDetail(address,title,money){
	//document.domain="main_page.html";
    var ndi=document.createElement("div");
    var body_part=document.getElementById("body_part");
    ndi.style.border="thin solid #0000FF";
    ndi.style.height="30px";
    body_part.appendChild(ndi);
    var img=document.createElement("img");
    img.src=address;
    img.style.width="30px";
    img.style.height="30px";
    ndi.appendChild(img);
    var text1=document.createTextNode(title);
    var text2=document.createTextNode(money);
    ndi.appendChild(text1);
    ndi.appendChild(text2);
}

function setCookie(cname,cvalue){
	sessionStorage.setItem(cname, cvalue); 
}

function show_info(){
	var  money=resultDom.value;
	setCookie("money",money);
	//document.cookie=money+1;
	//var money1=getCookie("money");
	//resultDom.value=money1;
	window.location.href='main_page.html';
}

function category1(){
    address = "images/Shopping.png";
    title = "Shopping";
	setCookie("address",address);
	setCookie("title",title);
}

function category2(){
    address = "images/Eating.png";
    title = "Eating";
	setCookie("address",address);
	setCookie("title",title);
}

function category3(){
    address = "images/Transportation.png";
    title = "Transport";
	setCookie("address",address);
	setCookie("title",title);
}

function category4(){
    address = "images/Entertainment.png";
    title = "Entertainment";
	setCookie("address",address);
	setCookie("title",title);
}

function category5(){
    address = "images/HomeMaintenance.png";
    title = "Maintenance";
	setCookie("address",address);
	setCookie("title",title);
}

function category6(){
    address = "images/Fitness.png";
    title = "Fitness";
	setCookie("address",address);
	setCookie("title",title);
}

function checkCookie(){
	var type_make=sessionStorage.getItem("title");
	var money=sessionStorage.getItem("money");
	var img_address=sessionStorage.getItem("address");
	if(money){
		ShowDetail(img_address,type_make,money);
	}
	else;
	
}
