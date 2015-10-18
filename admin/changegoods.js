var fenzu;
var fenzu_a = new Array;
var width1 = $(window).width();
var width2 = 80;
var left1 = (width1 - width2) / 2;
$(".onlineorder").css({
	'width': width2,
	'height': width2,
	'left': left1
});
$("ul li:first").click(function(){
	location.reload();
});
$(".onlineorder").click(function(){
	window.location.href='index.html';
})
$.ajax({
	type: "post",
	url: "../z_name.php",
	async: false,
	success: function(data) {
		fenzu = data;
	}
});
fenzu_a = fenzu.split("#");
$("select#xuanzefenzu").children().remove();
for (var i = 1; i <= fenzu_a.length; i++) {
	$("select#xuanzefenzu").append("<option value='"+fenzu_a[i - 1] +"'>" + fenzu_a[i - 1] + "</option>");
}
var arr=new Array;
$("#btn1").click(function(){
	var arr2=$("#img").val();
	arr=arr2.split("\\");
	var pic=arr[arr.length-1];  //图片地址
	var fenzu1=$("#xuanzefenzu").val();//商品分組
	var cn_name=$("#cn_name").val();//中文名
	var eng_name1=$("#eng_name1").val();//英文名
	var xiangqing=$("#xiangqing").val();//詳情
	var jiage=$("#jiage").val()//价格
	$.ajax({
		type:"post",
		url:"shangjia.php",
		async:true,
		data:{
			"fenzu":fenzu1,
			"cn_name":cn_name,
			"eng_name":eng_name1,
			"xiangqing":xiangqing,
			"pic_name":pic,
			"jiage":jiage
		},
		success:function(data){
			alert(data);
		}
	});
});
$("#fuyuansu").delegate("li","click",function(){
	$("li").css('color','white');
	$(this).css('color','#000000');
});
$("ul#fuyuansu li:eq(3)").click(function(){
	$(".conten").children().remove();
	$(".conten").append("<div class='lie3'>分组名</div><div class='lie4'><input id='tianjiafenzu' type='text' style='width: 100%;'/></div><div class='lie11'><button class='am-btn btn1' id='btn2'>确认添加</button></div>")
	$("#btn2").click(function(){
	var tianjiafenzu=$("#tianjiafenzu").val();
	$.ajax({
		type:"post",
		url:"addfenzu.php",
		async:false,
		data:{
			"addfenzu":tianjiafenzu
		},
		success:function(data){
			alert(data);
		}
	});
});
});

