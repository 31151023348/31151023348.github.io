

	function timkiem() {
		hienthi = document.getElementsByClassName("sanpham1");
	var tim = document.getElementById("search").value;
	var text = document.getElementsByClassName("thongtin").innerHTML;
	var a = ['iphone', 'dienthoai', 'iphone6', 'latop', 'phụ kiện', 'may tinh bang', 'ip', 'ip6', "điện thoại"]

			if ((tim == a[2]) || (tim == a[7])) {
		document.getElementById("iphone").style.display = 'none';
	document.getElementById("laptop").style.display = 'none';
	document.getElementById("maytinhbang").style.display = 'none';
	document.getElementById("phukien").style.display = 'none';
}
			if ((tim == a[0]) || (tim == a[6])) {
		document.getElementById("laptop").style.display = 'none';
	document.getElementById("maytinhbang").style.display = 'none';
	document.getElementById("phukien").style.display = 'none';
	document.getElementById("iphone6").style.display = 'none';
}
			if ((tim == a[1]) || (tim == a[8])) {
		document.getElementById("laptop").style.display = 'none';
	document.getElementById("maytinhbang").style.display = 'none';
	document.getElementById("phukien").style.display = 'none';
}
			if (tim == a[3]) {
		document.getElementById("dienthoai").style.display = 'none';
	document.getElementById("maytinhbang").style.display = 'none';
	document.getElementById("phukien").style.display = 'none';
}
			if (tim == a[4]) {
		document.getElementById("dienthoai").style.display = 'none';
	document.getElementById("maytinhbang").style.display = 'none';
	document.getElementById("laptop").style.display = 'none';
}
			if (tim == a[5]) {
		document.getElementById("dienthoai").style.display = 'none';
	document.getElementById("phukien").style.display = 'none';
	document.getElementById("laptop").style.display = 'none';
}

}
