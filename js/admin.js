var s_name, s_goods, s_shuliang, s_zhuohao, s_min;
var s_name_a = new Array;
var s_goods_a = new Array;
var s_shuliang_a = new Array;
var s_zhuohao_a = new Array;
var s_min_a = new Array;
var width1 = $(window).width();
var width2 = 80;
var left1 = (width1 - width2) / 2;
$(".onlineorder").css({
	'width': width2,
	'height': width2,
	'left': left1
});
var mydate = new Date();
var m = mydate.getMonth() + 1;
var d = mydate.getDate();
var date1 = m + "-" + d;

function lunxun() {
	$.ajax({
		type: "post",
		url: "gets_name.php",
		async: false,
		data: {
			'data1': date1
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
			'data1': date1
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
			'data1': date1
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
			'data1': date1
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
			'data1': date1
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
	$("tbody").children().remove();
	for (var i = 1; i <= s_name_a.length; i++) {
		$("tbody").append("<tr><th>" + i + "</th><th>" + s_name_a[i - 1] + "</th><th>" + s_goods_a[i - 1] + "</th><th>" + s_shuliang_a[i - 1] + "</th><th>" + s_zhuohao_a[i - 1] + "</th><th>" + s_min_a[i - 1] + "</th></tr>")
	};
};
$(function(){     //每隔10秒加载一次
	lunxun();
	window.setInterval(lunxun,10000);
})
