<?php
header("content-type:text/html;charset=utf-8");
include "../conn.php";
$coo = $_COOKIE['password'];
session_id($coo);
session_start();
$sess = $_SESSION['password'];
if ($sess == 'admin888') {
	$name = $_POST['name'];
//	$name="小美";
	mysql_select_db("user", $link);
	$result = mysql_query("SELECT * FROM $name");
	echo "<table class='am-table am-table-striped'>
             <tr>
                 <th>编号</th>
                 <th>商品名</th>
                 <th>数量</th>
                 <th>桌号</th>
                 <th>时间</th>
            </tr>";
while($row = mysql_fetch_array($result))
{
echo "<tr>";
echo     "<td>" . $row['bianhao'] . "</td>";
echo     "<td>" . $row['good_name'] . "</td>";
echo     "<td>" . $row['shuliang'] . "</td>";
echo     "<td>" . $row['zhuohao'] . "</td>";
echo     "<td>" . $row['DataTypes'] . "</td>";
echo "</tr>";
}
echo "</table>";
}else{
	echo "请先登录";
}
?>