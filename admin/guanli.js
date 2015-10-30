var width1 = $(window).width();
var width2 = 80;
var left1 = (width1 - width2) / 2;
$(".onlineorder").css({
	'width': width2,
	'height': width2,
	'left': left1
});
$(document).ready(function() { //判断有没有登录 这js层面第一次防护
	$.ajax({
		type: "post",
		url: "judge.php",
		async: false,
		success: function(data) {
			data1 = data;
			if (data1 == "erro") {
				$(".container").children().remove();
				$(".container").append("<h1>请先登录</h1><br /><button id='span2'>登录</button>");
				$("#span2").click(function() {
					window.location.href = 'login.html';
				})
			}
		}
	});
})
$(".goods").click(function() {
	window.location.href = "changegood.html"
})
$(".user").click(function() {
	window.location.reload();
})
$(".onlineorder").click(function() { //点击切换实时ing单
	window.location.href = 'index.html';
});
$("ul li:first").click(function() { //顶部条 点击上架商品 刷新
	location.reload();
});
$("#fuyuansu").delegate("li", "click", function() { //顶部条 效果    
	$("li").css('color', 'white');
	$(this).css('color', '#000000');
});
$('#date0').datepicker().on('changeDate.datepicker.amui', function() {
	var a = $(this).val();
	var s_name, s_goods, s_shuliang, s_zhuohao, s_min;
	var s_name_a = new Array;
	var s_goods_a = new Array;
	var s_shuliang_a = new Array;
	var s_zhuohao_a = new Array;
	var s_min_a = new Array;
	$.ajax({
		type: "post",
		url: "gets_name.php",
		async: false,
		data: {
			'data1': a,
			'data2':"dingdan"
		},
		success: function(data) {
			s_name = data;
		}
	});
	$.ajax({
		type: "post",
		url: "gets_goods.php",
		async: false,
		data: {
			'data1': a,
			'data2':"dingdan"
		},
		success: function(data) {
			s_goods = data;
		}
	});
	$.ajax({
		type: "post",
		url: "gets_shuliang.php",
		async: false,
		data: {
			'data1': a,
			'data2':"dingdan"
		},
		success: function(data) {
			s_shuliang = data;
		}
	});
	$.ajax({
		type: "post",
		url: "gets_zhuohao.php",
		async: false,
		data: {
			'data1': a,
			'data2':"dingdan"
		},
		success: function(data) {
			s_zhuohao = data;
		}
	});
	$.ajax({
		type: "post",
		url: "gets_min.php",
		async: false,
		data: {
			'data1': a,
			'data2':"dingdan"
		},
		success: function(data) {
			s_min = data;
		}
	});
	s_name_a = s_name.split("#");
	s_goods_a = s_goods.split("#");
	s_shuliang_a = s_shuliang.split("#");
	s_zhuohao_a = s_zhuohao.split("#");
	s_min_a = s_min.split("#");
	$(".conten table tbody").children().remove();
	for (var i = 1; i <= s_name_a.length; i++) {
		$(".conten table tbody").append("<tr><th>" + i + "</th><th>" + s_name_a[i - 1] + "</th><th>" + s_goods_a[i - 1] + "</th><th>" + s_shuliang_a[i - 1] + "</th><th>" + s_zhuohao_a[i - 1] + "</th><th>" + s_min_a[i - 1] + "</th></tr>");
	};
});
$("ul#fuyuansu li:eq(1)").click(function() { //点击用户订单 查找用户订单
	$(".conten").children().remove();
	$(".conten").append("<div id='c2'><select id='select1'><option disabled=''>请选择用户</option></select></div><div id='c3'></div>");
	var user_a=new Array;
	$.ajax({
		type:"post",
		url:"chaxunuser.php",
		async:false,
		success:function(data){
			user_a=data.split("#");
			for (var i=1;i<=user_a.length;i++) {
				$("#select1").append("<option value='"+user_a[i-1]+"'>"+user_a[i-1]+"</option>")
			}
		}
	});
	$("#select1").change(function(){
	var a=$("#select1").val();
	$.ajax({
		type:"post",
		url:"chaxunuserdingdan.php",
		async:false,
		data:{
			"name":a
		},
		success:function(data){
			if (data.indexOf("Warning")>=0) {
				$("#c3").html("该用户没有下过订单");
			} else{
				$("#c3").html(data);
			}
		}
	});
})
});
