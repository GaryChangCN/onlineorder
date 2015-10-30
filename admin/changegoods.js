var fenzu;
var fenzu_a = new Array;
var width1 = $(window).width();
var width2 = 80;
var left1 = (width1 - width2) / 2;
var data1;
$(".onlineorder").css({
	'width': width2,
	'height': width2,
	'left': left1
});
$(".goods").click(function(){
	window.location.reload();
})
$(".user").click(function(){
	window.location.href="guanli.html";
})
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
$("ul li:first").click(function() { //顶部条 点击上架商品 刷新
	location.reload();
});
$(".onlineorder").click(function() { //点击切换实时ing单
	window.location.href = 'index.html';
});
$("#fuyuansu").delegate("li", "click", function() { //顶部条 效果    
	$("li").css('color', 'white');
	$(this).css('color', '#000000');
});
function tianjia(){                            //添加分组
	$(".conten").children().remove();
	$(".conten").append("<div class='adfenzu'><div class='lie3'>分组名</div><div class='lie4'><input id='tianjiafenzu' type='text' style='width: 100%;'/></div><div class='lie11'><button class='am-btn btn1' id='btn2'>确认添加</button></div></div>")
	$("#btn2").click(function() {
		var tianjiafenzu = $("#tianjiafenzu").val();
		$.ajax({
			type: "post",
			url: "addfenzu.php",
			async: false,
			data: {
				"addfenzu": tianjiafenzu
			},
			success: function(data) {
				alert(data);
				tianjia();
			}
		});
	});
}
$("ul#fuyuansu li:eq(3)").click(function() { //点击 添加分组  增加内容
	tianjia();
});

function liebiao() { //查询分组列表
	$.ajax({
		type: "post",
		url: "../z_name.php",
		async: false,
		success: function(data) {
			fenzu_a = data.split("#");
			for (var i = 1; i <= fenzu_a.length; i++) {
				$("#select1").append("<option id='option1' value='" + fenzu_a[i - 1] + "'>" + fenzu_a[i - 1] + "</option>");
			}
		}
	});
};

function defenzu() { //删除分组
	$(".conten").children().remove();
	$(".conten").append("<div class='select1'>选择分组<br/><select id='select1'><option disabled=''>请选择</option></select><a>必选</a><br/><br/><br/><button id='btn3'>确认</button></div>")
	var a;
	liebiao();
	$("#select1").change(function() {
		a = $(this).val()
	})
	$("#btn3").click(function() {
		$.ajax({
			type: "post",
			url: "defenzu.php",
			async: false,
			data: {
				"fenzu": a
			},
			success: function() {
				alert("删除分组" + a + "成功");
				defenzu();
			}
		});
	})
}
$("ul#fuyuansu li:eq(4)").click(function() { //点击 删除分组  删除分组
	defenzu();
});

function xiajia() { //下架商品
	$(".conten").children().remove();
	$(".conten").append("<div class='select1'>选择分组<br/><select id='select1'><option disabled=''>请选择</option></select></div><div id='selectgood'></div><div class='butcon'><button id='xiajiabtn'>确认下架</button></div>");
	liebiao();
	var a; //选择分组名
	var b; //选择商品名
	$("#select1").change(function() {
		a = $(this).val();
		$("#selectgood").append("<div id='selectgood1'></div>");
		$("#selectgood").children().remove();
		$.ajax({
			type: "post",
			url: "../g_name.php",
			async: false,
			data: {
				"x_name": a
			},
			success: function(data) {
				var selectgood_a = new Array;
				selectgood_a = data.split("#");
				for (var i = 1; i <= selectgood_a.length; i++) {
					$("#selectgood").append("<div class='good'>" + selectgood_a[i - 1] + "</div>");
				}
			}
		});
		$("#selectgood").delegate(".good", "click", function() {
			$(".good").css('background-color', '#f1f1f1');
			$(this).css('background-color', '#7C7C7C');
			b = $(this).text();
		});
		$("#xiajiabtn").click(function() {
			$.ajax({
				type: "post",
				url: "xiajiashangpin.php",
				async: false,
				data: {
					"fenzu": a,
					"name":b
				},
				success:function(data){
					alert(data);
				}
			});
		});
	});
}
$("ul#fuyuansu li:eq(1)").click(function() { //点击 删除分组  删除分组
	xiajia();
});
function xiugai(){   //修改商品
    $(".conten").children().remove();
    $(".conten").append("<iframe width='100%' height='1000px'></iframe>");
	$(".conten iframe").attr('src','xiugaiframe.html');
}
$("ul#fuyuansu li:eq(2)").click(function(){   //点击 修改商品
	xiugai();
})