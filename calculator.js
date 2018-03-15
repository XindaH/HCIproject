var resultDom = document.getElementById("result");
var resultItem=document.getElementById("Item_name");
var resultmemo=document.getElementById("memo_info");
var saveOrcost=document.getElementById("type_titile");
var droplist_content=document.getElementById("dropdown-sc");
var title = "";
var address = "";
var id1=0;
var testx=0;
var testy=0;
var Id_number=0;
var Money_type="saving";
var goaldate ;
//var goals ; 
var total=0;

function command(num){
    var str = resultDom.value;
    str = (str == "0" ? "":str);
    str = str+num;
    resultDom.value = str;
}
function dot()
{
    var str='.';
    resultDom.value=resultDom.value+str;
}
function date(){
    document.getElementById('demo').style.display='block'
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var time = year+"-"+fix(Number(month),2)+"-"+fix(Number(day),2); 
	var date_value=document.getElementById("ca_date");
	date_value.value=time;
}

function fix(num, length) {
  return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}

function del(){
    var str = resultDom.value;
    str = str.substring(0,str.length - 1);
    str = (str == "" ? 0 : str);
    resultDom.value = str;
}

function ShowDetail(address,title,money,money_type,i){
    var ndi=document.createElement("div");
	ndi.id="test_div"+i;
    var body_part=document.getElementById("body_part");
    ndi.style.border="thin solid #0000FF";
    ndi.style.height="30px";
    
    var img=document.createElement("img");
    img.src=address;	
    ndi.appendChild(img);
	
	if (money_type=="Saving"){
		var save_money=document.getElementById("saving_money");
		var Save_str=save_money.innerHTML;
		Save_str=Save_str.toString().substring(1,Save_str.length);
		var Save_nb=Number(Save_str);
		Save_nb+=Number(money);
		Save_nb=Save_nb.toFixed(2);
		save_money.innerHTML="$"+Save_nb;
	}
	else{
		var cost_money=document.getElementById("cost_money");
		var Cost_str=cost_money.innerHTML;
		Cost_str=Cost_str.toString().substring(1,Cost_str.length);
		var Cost_nb=Number(Cost_str);
		Cost_nb+=Number(money);
		Cost_nb=Cost_nb.toFixed(2);
		cost_money.innerHTML="$"+Cost_nb;
	}
	
	
    var text1=document.createTextNode(title);
	money=Number(money).toFixed(2);
	if (money_type=="Saving"){
		var text2=document.createTextNode("+"+"$"+money);
	}
    else var text2=document.createTextNode("-"+"$"+money);
	var test_empty=document.createTextNode(" ");
	var para=document.createElement("span");
	var para2=document.createElement("span");
	
	ndi.appendChild(test_empty);
	ndi.appendChild(para);
    ndi.appendChild(para2);
	para.appendChild(text1);
	para2.appendChild(text2);
	
	para.style.cssText="float:left;line-height:30px;";
	para2.style.cssText="float:right;line-height:30px;";
	img.style.cssText="float:left;width:30px;height:30px;";
	var hyper_link=document.createElement("a");
	hyper_link.href="description.html";
	body_part.appendChild(ndi);
}

function setCookie(cname,cvalue){
	sessionStorage.setItem(cname, cvalue); 
}

function show_info(){
	var  money=resultDom.value;
	var item_name=resultItem.value;
	var memo_info_res=resultmemo.value;
	var temp1=sessionStorage.getItem("id1");
	var date_value=document.getElementById("ca_date");
	if (date_value.value==""){
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		var time = year+"-"+fix(Number(month),2)+"-"+fix(Number(day),2); 
		date_value.value=time;
	}
	if (temp1!=null){
		id1=Number(temp1);
		setCookie("money"+temp1,money);
		setCookie("Item"+temp1,item_name);
		setCookie("memo"+temp1,memo_info_res);
		setCookie("date"+temp1,date_value.value);
	}
	
}

function category1(){
    address = "images/Shopping.png";
    title = "Shopping";
	Money_type=saveOrcost.innerHTML;
	var temp1=sessionStorage.getItem("id1");
	if (temp1!=null){
		id1=Number(temp1)+1;
	}
	else id1++;
	setCookie("id1",id1);
	setCookie("address"+id1,address);
	setCookie("title"+id1,title);
	setCookie("Money_type"+id1,Money_type);
}

function category2(){
    address = "images/Eating.png";
    title = "Eating";
	Money_type=saveOrcost.innerHTML;
	var temp1=sessionStorage.getItem("id1");
	if (temp1!=null){
		id1=Number(temp1)+1;
	}
	else id1++;
	setCookie("id1",id1);
	setCookie("address"+id1,address);
	setCookie("title"+id1,title);
	setCookie("Money_type"+id1,Money_type);
}

function category3(){
    address = "images/Transportation.png";
    title = "Transport";
	Money_type=saveOrcost.innerHTML;
	var temp1=sessionStorage.getItem("id1");
	if (temp1!=null){
		id1=Number(temp1)+1;
	}
	else id1++;
	setCookie("id1",id1);
	setCookie("address"+id1,address);
	setCookie("title"+id1,title);
	setCookie("Money_type"+id1,Money_type);
}

function category4(){
    address = "images/Entertainment.png";
    title = "Entertainment";
	Money_type=saveOrcost.innerHTML;
	var temp1=sessionStorage.getItem("id1");
	if (temp1!=null){
		id1=Number(temp1)+1;
	}
	else id1++;
	setCookie("id1",id1);
	setCookie("address"+id1,address);
	setCookie("title"+id1,title);
	setCookie("Money_type"+id1,Money_type);
}

function category5(){
    address = "images/HomeMaintenance.png";
    title = "Maintenance";
	Money_type=saveOrcost.innerHTML;
	var temp1=sessionStorage.getItem("id1");
	if (temp1!=null){
		id1=Number(temp1)+1;
	}
	else id1++;
	setCookie("id1",id1);
	setCookie("address"+id1,address);
	setCookie("title"+id1,title);
	setCookie("Money_type"+id1,Money_type);
}

function category6(){
    address = "images/Fitness.png";
    title = "Fitness";
	Money_type=saveOrcost.innerHTML;
	var temp1=sessionStorage.getItem("id1");
	if (temp1!=null){
		id1=Number(temp1)+1;
	}
	else id1++;
	setCookie("id1",id1);
	setCookie("address"+id1,address);
	setCookie("title"+id1,title);
	setCookie("Money_type"+id1,Money_type);
}

function getMousePos(event) {  
	var e = event || window.event;  
	return {'x':e.screenX,'y':screenY}  
}  

function checkCookie(){
	setCookie("ShowSC","Saving");
	setCookie("DateTime","Weekly");
	id1=sessionStorage.getItem("id1");
	for (i=1;i<=id1;i++){
		var type_make=sessionStorage.getItem("title"+i);
		var money=sessionStorage.getItem("money"+i);
		var img_address=sessionStorage.getItem("address"+i);
		var money_type=sessionStorage.getItem("Money_type"+i);
		if (money!=null){
			ShowDetail(img_address,type_make,money,money_type,i);
		}
		
	}
	
	document.onmousedown=function(ev){
		var oEvent=ev||event;
		testx=oEvent.clientX;
		testy=oEvent.clientY;
		
		if (testx>=30&&testx<=330&&testy>=195&&testy<=565){
			for (i=1;i<=id1;i++){
				var test_i=document.getElementById("test_div"+i);
				if (test_i!=null){
					if (testy>=test_i.offsetTop&&testy<=test_i.offsetTop+test_i.offsetHeight&&testx>=test_i.offsetLeft&&testx<=test_i.offsetLeft+test_i.offsetWidth){
					setCookie("ItemId",i);
					window.location.href="description.html";
					}
				}
			}
		}
	}
	
}

function Description_on(){
	var id_numb=sessionStorage.getItem("ItemId");
	var dsht_item=document.getElementById("dsht_item");
	var dsht_memo=document.getElementById("dsht_memo");
	var dsht_date=document.getElementById("dsht_date");
	var dsht_money=document.getElementById("dsht_money");
	var dsht_type=document.getElementById("dsht_type");
	var dsht_sacs=document.getElementById("des_sacs");
	var ds_Item_i=sessionStorage.getItem("Item"+id_numb);
	var ds_memo_i=sessionStorage.getItem("memo"+id_numb);
	var ds_type=sessionStorage.getItem("title"+id_numb);
	var ds_money=sessionStorage.getItem("money"+id_numb);
	var ds_moneytype=sessionStorage.getItem("Money_type"+id_numb);
	var ds_date=sessionStorage.getItem("date"+id_numb);
	dsht_item.value=ds_Item_i;
	dsht_memo.value=ds_memo_i;
	dsht_money.value=ds_money;
	dsht_type.value=ds_type;
	dsht_date.value=ds_date;
	
	dsht_sacs.innerHTML=ds_moneytype;
	dsht_item.disabled="disabled";
	dsht_memo.disabled="disabled";
	dsht_money.disabled="disabled";
	dsht_type.disabled="disabled";
	dsht_date.disabled="disabled";
}

function ds_edit(){
	var dsht_item=document.getElementById("dsht_item");
	var dsht_memo=document.getElementById("dsht_memo");
	var dsht_money=document.getElementById("dsht_money");
	var dsht_type=document.getElementById("dsht_type");
	dsht_item.disabled="";
	dsht_memo.disabled="";
	dsht_money.disabled="";
	dsht_type.disabled="";
}

function ds_confirm(){
	var id_numb=sessionStorage.getItem("ItemId");
	var dsht_item=document.getElementById("dsht_item");
	var dsht_memo=document.getElementById("dsht_memo");
	var dsht_money=document.getElementById("dsht_money");
	var dsht_type=document.getElementById("dsht_type");
	var ds_title=dsht_type.value;
	var ds_money=Number(dsht_money.value).toFixed(2);
	var ds_item=dsht_item.value;
	var ds_memo=dsht_memo.value;
	dsht_money.value=ds_money;
	setCookie("title"+id_numb,ds_title);
	setCookie("money"+id_numb,ds_money);
	setCookie("Item"+id_numb,ds_item);
	setCookie("memo"+id_numb,ds_memo);
	dsht_item.disabled="disabled";
	dsht_memo.disabled="disabled";
	dsht_money.disabled="disabled";
	dsht_type.disabled="disabled";
}

function showList(e){
	droplist_content.style.display="inline-block";
}

function type_save(){
	saveOrcost.innerHTML="Saving";
	droplist_content.style.display="none";
}

function type_cost(){
	saveOrcost.innerHTML="Cost";
	droplist_content.style.display="none";
}

function pad(){
	
}

function drawCircle(canvasId, data_arr, color_arr, text_arr)
{
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");

    var radius = 75;
    var ox = radius + 70, oy = radius + 120;

    var width = 30, height = 10;
    var posX = 30, posY = 0;
    var textX = posX + width + 5, textY = posY + 10;

    var startAngle = 0;
    var endAngle = 0;
    for (var i = 0; i < data_arr.length; i++)
    {

        endAngle = endAngle + data_arr[i] * Math.PI * 2;
        ctx.fillStyle = color_arr[i];
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.arc(ox, oy, radius, startAngle, endAngle, false);
        ctx.closePath();
        ctx.fill();
        startAngle = endAngle;


        ctx.fillStyle = color_arr[i];
        ctx.fillRect(posX, posY + 20 * i, width, height);
        ctx.moveTo(posX, posY + 20 * i);
        ctx.font = 'bold 20px';
        ctx.fillStyle = color_arr[i];
        var percent = text_arr[i] + ": " + Number(100 * data_arr[i]).toFixed(2) + "\%";
        ctx.fillText(percent, textX, textY + 20 * i);
    }
}

function init() {
    var Enter = 0;
    var Eat = 0;
    var Shop = 0;
    var Trans = 0;
    var Fit = 0;
    var Main = 0;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var week = date.getDay();
    var TypeShowSC=sessionStorage.getItem("ShowSC");
    var TypeShowWMA=sessionStorage.getItem("DateTime");

    if (TypeShowSC=="Saving"){
    	document.getElementById("weekly").style.color="lightgreen";
	}
	else {
        document.getElementById("monthly").style.color="lightgreen";
	}

	if(TypeShowWMA=="Weekly"){
        document.getElementById("Week1").style.color="lightgreen";
	}
	else if (TypeShowWMA=="Monthly"){
        document.getElementById("Week2").style.color="lightgreen";
	}
	else{
        document.getElementById("Week3").style.color="lightgreen";
	}
    id1 = Number(sessionStorage.getItem("id1"));
    if (id1!= null) {

        for (i = 1; i <= id1; i++) {
            var Curr_date=sessionStorage.getItem("date"+i);
            var CurrY=Curr_date.substring(0,4);
            var CurrM=Curr_date.substring(5,7);
            var CurrD=Curr_date.substring(8,10);
            var Curr_moneytype = sessionStorage.getItem("Money_type" + i);
			
            if (Curr_moneytype == TypeShowSC) {
				if (TypeShowWMA=="Weekly"){
					if (year == CurrY && month == CurrM && (((day - CurrD <=(week-1))&&(day-CurrD>=0)) || ((CurrD-day<=(7-week))&&(CurrD-day>=0)))){
						var ds_type = sessionStorage.getItem("title" + i);
                        if (ds_type == "Entertainment")
                            Enter = Enter + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Eating")
                            Eat = Eat + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Shopping")
                            Shop = Shop + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Transport")
                            Trans = Trans + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Fitness")
                            Fit = Fit + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Maintenance")
                            Main = Main + Number(sessionStorage.getItem("money" + i));
					}
				}
				else if (TypeShowWMA=="Monthly"){
					if (year==CurrY&&month==CurrM){
						var ds_type = sessionStorage.getItem("title" + i);
                        if (ds_type == "Entertainment")
                            Enter = Enter + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Eating")
                            Eat = Eat + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Shopping")
                            Shop = Shop + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Transport")
                            Trans = Trans + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Fitness")
                            Fit = Fit + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Maintenance")
                            Main = Main + Number(sessionStorage.getItem("money" + i));
					}
				}
				else {
					if (year==CurrY){
						var ds_type = sessionStorage.getItem("title" + i);
                        if (ds_type == "Entertainment")
                            Enter = Enter + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Eating")
                            Eat = Eat + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Shopping")
                            Shop = Shop + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Transport")
                            Trans = Trans + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Fitness")
                            Fit = Fit + Number(sessionStorage.getItem("money" + i));
                        if (ds_type == "Maintenance")
                            Main = Main + Number(sessionStorage.getItem("money" + i));
					}
				}
            }
        }
		var Sum = Enter + Eat + Shop + Trans + Fit + Main;
		var p1 = Shop / Sum;
		var p2 = Eat / Sum;
		var p3 = Trans / Sum;
		var p4 = Enter / Sum;
		var p5 = Main / Sum;
		var p6 = Fit / Sum;
    }
    var data_arr = [p1, p2, p3, p4, p5, p6];
    var color_arr = ["\#5A5AAD", "\#A8FF24", "\#66B3FF", "\#4F9D9D", "\#FF5809", "\#9F4D95", "\#FF5809"];
    var text_arr = ["Shopping", "Eating", "Transport", "Entertainment", "Maintenance", "Fitness"];
    drawCircle("canvas_circle", data_arr, color_arr, text_arr);
}

function Weekly(){
	setCookie("DateTime","Weekly");
	window.location.reload();
}

function Monthly(){
	setCookie("DateTime","Monthly");
	window.location.reload();
}

function Annually(){
	setCookie("DateTime","Annually");
	window.location.reload();
}

//setCookie("ShowSC","Saving");
//setCookie("DateTime","Weekly");

function Saving(){
	setCookie("ShowSC","Saving");
	window.location.reload();
}

function Cost(){
	setCookie("ShowSC","Cost");
	window.location.reload();
}

function setting(){
	var goaldate = document.getElementById("demo2").value;
	var GoalMoney=document.getElementById("itemprice1").value;
	if (goaldate!=""&&GoalMoney!=""){
		/*var g_year = goaldate.substring(0,4);
		var g_month = goaldate.substring(5,7);
		var g_day = goaldate.substring(8,10);*/
		if (GoalMoney!=""){
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth()+1;
			var day = date.getDate();
			var time = year+"-"+fix(Number(month),2)+"-"+fix(Number(day),2); 
			setCookie("GoalTime",goaldate);
			setCookie("CurrentTime",time);
			setCookie("GoalMoney",GoalMoney);
			alert("Your new goal is setting");
			window.location.reload();
		}
	}
}

function checkGoal(){
	var GoalMoney=sessionStorage.getItem("GoalMoney");
	var tex=document.getElementById('tex');
	
	if (GoalMoney!=null){
		var totalMoney=0;
		var StartTime=sessionStorage.getItem("CurrentTime");
		var StartY=StartTime.substring(0,4);
		var StartM=StartTime.substring(5,7);
		var StartD=StartTime.substring(8,10);
		var GTime=sessionStorage.getItem("GoalTime");
		var GoalY=GTime.substring(0,4);
		var GoalM=GTime.substring(5,7);
		var GoalD=GTime.substring(8,10);
		var tempGoal=sessionStorage.getItem("id1");

		var progressbar=document.getElementById('progressbar');
		if (tempGoal!=null){
			for (i=1;i<=tempGoal;i++){
				var Curr_moneytype=sessionStorage.getItem("Money_type"+i);
				if(Curr_moneytype=="Saving"){
					var Curr_date=sessionStorage.getItem("date"+i);
					//var Curr_money=sessionStorage.getItem("money"+i);
					var CurrY=Curr_date.substring(0,4);
					var CurrM=Curr_date.substring(5,7);
					var CurrD=Curr_date.substring(8,10);
					//fill.innerHTML+=" "+Curr_date+" "+Curr_money+" ";
					if (((CurrY>StartY) ||(CurrY==StartY && ((CurrM>StartM)||(CurrM==StartM&&CurrD>=StartD))))&&((CurrY<GoalY) ||
					(CurrY==GoalY && ((CurrM<GoalM)||(CurrM==GoalM&&CurrD<GoalD))))){
						var Curr_money=sessionStorage.getItem("money"+i);
						totalMoney+=Number(Curr_money);
						//fill.innerHTML+="aaaaaaaaaa";
					}
				}
			}
			
			//progressbar
			//fix(Number(month),2);
			var perce=(totalMoney/Number(GoalMoney)*100).toFixed(2);
			//progressbar.innerHTML=totalMoney+"("+perce+'%) of '+GoalMoney +" USD" + " <div id="fill"></div>";
			fill.innerHTML=perce+"%";
			tex.innerHTML=totalMoney+"("+perce+'%) of '+GoalMoney +" USD";
			//var fill_bar=document.createElement("div");
			//fill_bar.style.cssText="float:left;line-height:30px;";
			
			//progressbar.innerHTML=" <div id="fill"></div>";
			//var fill=document.getElementById('fill');
			//var test_node=document.createTextNode(totalMoney+" ("+perce+'%) of '+GoalMoney +" USD");
			if (perce>=100){
				perce=100;
				//alert("Congratulations! You have free money: $"+(totalMoney*0.9).toFixed(2)+" to use for next time.");
				//sessionStorage.removeItem("GoalTime"); 
				//sessionStorage.removeItem("CurrentTime"); 
				//sessionStorage.removeItem("GoalMoney"); 
				//window.location.reload();
				
				var reachGoal=document.getElementById('set_test');
				reachGoal.innerHTML="Congratulations! You have free money: $"+(totalMoney*0.9).toFixed(2)+" to use for next time.";
			}
			//test_node.style.width="180px";
			//fill_bar.appendChild(test_empty);
			//fill_bar.style.cssText="width:"+perce+"%;text-align:center;background-color: #6caf00;z-index:10;";
			fill.style.width=perce+"%";
			//tex.innerHTML=totalMoney+" ("+perce+'%) of '+GoalMoney +" USD";
			
			//progressbar.appendChild(test_node);
		}
		else{
			tex.innerHTML=0+" ("+0+'%) of '+ GoalMoney +" USD";
		}
	}
	else tex.innerHTML=0+" ("+0+'%) of '+0 +" USD";
}

