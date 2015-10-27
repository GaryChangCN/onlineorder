var g_id, g_name, g_price, g_eng_name, g_pic_name, g_jianjie, j, ii, ij;
var z_id, z_name;
var g_name_a = new Array;
var g_eng_name_a = new Array;
var g_price_a = new Array;
var g_jianjie_a = new Array;
var g_pic_name_a = new Array;
var z_name_a = new Array;
var progress = $.AMUI.progress;   //进度条
function change(a) {
	$(".suggestion").text(a);
		$.ajax({
			type: "post",
			url: "g_id_number.php",
			async: false,
			beforeSend: function(){
			   progress.start();     // 加载进度条
			},
			data: {
				"x_id": a
			},
			success: function(data1) {
				g_id = data1;
			},
			complete:function(){
				progress.done();//进度条加载完毕
			}
		});
		$.ajax({
			type: "post",
			url: "g_name.php",
			async: false,
			data: {
				"x_name": a
			},
			success: function(data2) {
				g_name = data2;
			}
		});
		$.ajax({
			type: "post",
			url: "g_eng_name.php",
			async: false,
			data: {
				"x_eng_name": a
			},
			success: function(data3) {
				g_eng_name = data3;
			}
		});
		$.ajax({
			type: "post",
			url: "g_price.php",
			async: false,
			data: {
				"x_price": a
			},
			success: function(data4) {
				g_price = data4;
			}
		});
		$.ajax({
			type: "post",
			url: "g_jianjie.php",
			async: false,
			data: {
				"x_jianjie": a
			},
			success: function(data5) {
				g_jianjie = data5;
			}
		});
		$.ajax({
			type: "post",
			url: "g_pic_name.php",
			async: false,
			data: {
				"x_pic_name": a
			},
			success: function(data55) {
				g_pic_name = data55;
			}
		});
		g_name_a = g_name.split("#");
		g_eng_name_a = g_eng_name.split("#");
		g_price_a = g_price.split("#");
		g_jianjie_a = g_jianjie.split("#");
		g_pic_name_a = g_pic_name.split("#");
		$(".container").children().remove();
		for (var i = 1; i <= g_id; i++) {
			$(".container").append("<div class='g_list' id='g_list" + i + "'><img alt='"+g_pic_name_a[i-1]+"' class='imgMenu' src='img/" + g_pic_name_a[i - 1] + "'/><div class='g_index'id='g_con" + i + "'></div></div>");
			$("#g_con" + i + "").html("<p class='cssP'>" + g_name_a[i - 1] + "</p>"); //通过ajax把商品名传入
			$("#g_con" + i + "").append("<p class='cssP2'>" + g_eng_name_a[i - 1] + "</p>"); //把商品英文名传入
			$("#g_con" + i + "").append("<p class='cssP3'>价格：" + g_price_a[i - 1] + "</p>"); //商品价格
			$("#g_list" + i + "").attr("data-am-collapse", "{parent: '#accordion', target: '#xiangqing" + i + "'}"); //更改 list的id属性 变为折叠
			$("#g_list" + i + "").after("<div class='panelCss am-collapse' id='xiangqing" + i + "'></div>"); //添加折叠panel
			//添加介绍详情已经添加到购物车按钮
			$("#xiangqing" + i + "").append("<div class='wenziCss' id='wenzi" + i + "'>简介：" + g_jianjie_a[i - 1] + "</div><div class='am-btn addShopCarCss'id='addShopCar" + i + "'>添加</div>");
		};
		//--------------------------------------
		for (j = 1; j <= g_id; j++) { // j为全局变量    =============这个是添加到购物车的循环
			$("#addShopCar" + j + "").click(function() { //引用函数add（）
				add();
				var a = this.id.replace(/[^0-9]/ig, ""); //获取当前点击的商品的id最后的数字
				var n = g_name_a[a - 1];
				var r = $("#shopList").text();
				if (r.indexOf(n) >= 0) { //若已选商品里面已经有该商品，则在数量上+1
					var a2 = $("div :contains(" + n + ")").children("span#addn").text();
					a2 = parseInt(a2) + 1;
					$("div :contains(" + n + ")").children("span#addn").text(a2);
				} else {
					addList(a);
				};
			});
		};

	}
	//=========================================================================


$(document).ready(function() {
	$.ajax({ //通过cookie判断用户是否登陆 如果已经登陆则显示个人中心
		type: "post",
		url: "login/judge.php",
		async: true,
		success: function(data) {
			if (data !== "") {
				$("#login").css('display', 'none');
				$("#zhuxiao").css('display', 'block');
				$("#user").text(data);
			} else {
				$("#user").text(" ");
				$("#shopEnter").addClass("am-disabled")
				$("#shopEnter").text("请先登录");
			}
		}
	});
	$.ajax({
		type: "post",
		url: "z_name.php",
		async: false,
		success: function(data7) {
			z_name = data7;
		}
	});
	z_name_a = z_name.split("#");//添加商品分组信息
	for (var x1 = 1; x1 <= z_name_a.length; x1++) {
		$("#fenzu").append("<div id='fenzux' class='fenzux am-btn'>" + z_name_a[x1 - 1] + "</div>")
	};
});
//一下为引用函数=======================================================================================================
$(document).ready(function() {
	var aa = "热门推荐";
	change(aa);
});
$("#fenzu").delegate("div#fenzux","click",function(){   //切换分组
	var a= $(this).text();
	change(a);
	$(".am-offcanvas").offCanvas('close');
});
function add() { //定义函数add  添加购物车函数          ii为全局变量 代表已选商品个数
	ii = $("#shopCount").text();
	ii = parseInt(ii) + 1;
	$("#shopCount").text(ii);
	$("#end").text("已选:" + ii + "件");
};

function dec() { //定义函数dec  减少购物车函数          ij为全局变量 代表已选商品个数
	ij = $("#shopCount").text();
	ij = parseInt(ij) - 1;
	$("#shopCount").text(ij);
	$("#end").text("已选:" + ij + "件");
};

function addList(a) { //定义函数addList 添加商品到已选列表
	$("#shopList").append("<div class='shopListx' id='shopListx'>" + g_name_a[a - 1] + "<span id='addx'>x</span><span id='addp'>+</span><span id='addn'>1</span><span id='addd'>-</span></div>")
};

function addDataBase() { //把用户订单添加到数据库中
	var a = $("#shopList").children("div#shopListx").text();
	var names = $("#user").text();
	var zhuohao=$("span#zhuohao").text();
	if (names == "") {

	} else {
		var name2 = names;
	}
	if (a == '') {} else {
		$.ajax({
			type: "post",
			url: "userdingdan.php",
			async: false,
			data: {
				"goods": a,
				"names": name2,
				"zhuohao":zhuohao
			},
			success: function() {
				alert("提交成功");
			}
		});
	}
};

$("#shopList").delegate("div span#addx", "click", function() { //点击X号 删除这个商品
	$(this).parent().remove();
});
$("#shopList").delegate("div span#addp", "click", function() { //点击+号，增加商品数量
	var a = $(this).parent().children("span#addn").text();
	a = parseInt(a) + 1;
	$(this).parent().children("span#addn").text(a);
	add();
});
$("#shopList").delegate("div span#addd", "click", function() { //点击-号减少商品数量  如何为0 则删除
	var a = $(this).parent().children("span#addn").text();
	a = parseInt(a);
	dec();
	if (a == 1) {
		$(this).parent().remove();
	} else {
		$(this).parent().children("span#addn").text(a - 1);
	}
});
$("#shopCar").click(function() { //弹出已选列表或者消失
	$("#shopList").slideToggle("fast", function() {
		$("span#clearShopCar").bind("click", function() {
			$(".shopListx").remove();
			$("#shopCount").text("0");
			$("#end").text("已选:0件")
		});
		$(".zhezhao").toggle();
		$(".zhezhao").click(function() {
			$(this).css("display", "none");
			$("#shopList").css("display", "none");
		});
	});
});
$("#zhuxiao").click(function() { //点击注销以后触发的事件
	$.ajax({
		type: "post",
		url: "login/logout.php",
		async: true,
		success: function(data) {
			$("#login").css('display', 'block');
			$("#userpanel").css('display', 'none');
			$("#zhuxiao").css('display', 'none');
		}
	});
});
$("#shopEnter").click(function() { //把用户订单添加到数据库中            
	addDataBase();
});
$(window).scroll(function() { //添加回到顶部按钮  当屏幕下拉超过164时候这个按钮fadein
	var s = $(window).scrollTop();
	if (s >= 164) {
		$("#toppp").fadeIn();
	} else {
		$("#toppp").fadeOut();
	}
});
$("button.user").click(function(){
	$('#doc-oc-demo2').offCanvas({effect: 'push'});
})