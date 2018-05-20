function kiemtra() {
	var loi = true;
	hoten = document.getElementById("name");
	ht = hoten.value;
	if (ht == "") {
		document.getElementById("errname").innerHTML = "Họ tên không được để trống ";
		hoten.style.backgroundColor = "yellow";
		loi = (loi && false);
	}
	else {
		document.getElementById("errname").innerHTML = "";
		hoten.style.backgroundColor = "Green"
	}
	
	sodt = document.getElementById("sdt");
	dt = sodt.value;
	var khonghople = /^[0-9-+]+$/;
	if (!khonghople.test(dt)) {
		document.getElementById("errsdt").innerHTML = "Số điện thoại không được để trống hoặc số điện này có chứa một số ký tự không phù hợp";
		sodt.style.backgroundColor = "yellow";
		loi = (loi && false);
	}

	else {
		document.getElementById("errsdt").innerHTML = "";
		sodt.style.backgroundColor = "Green"
	}
	
	tinhtp = document.getElementById("tinh");
	tt = tinhtp.value;
	if (tt == "") {
		document.getElementById("errtinh").innerHTML = "Vui lòng chọn tỉnh thành phố để xác định vị trí của bạn";
		tinhtp.style.backgroundColor = "yellow";
		loi = (loi && false);

	}
	else {
		document.getElementById("errtinh").innerHTML = "";
		tinhtp.style.backgroundColor = "Green"
	}
	
	duongdc = document.getElementById("duong");
	dg = duongdc.value;
	if (dg == "") {
		document.getElementById("errduong").innerHTML = "Đường không được để trống không được để trống ";
		duongdc.style.backgroundColor = "yellow";
		loi = (loi && false);
	}
	else {
		document.getElementById("errduong").innerHTML = "";
		duongdc.style.backgroundColor = "Green"
	}
	
	d_chi = document.getElementById("diachi");
	dc = d_chi.value;
	if (dc == "") {
		document.getElementById("errdiachi").innerHTML = "Đại chỉ không được để trống không được để trống ";
		d_chi.style.backgroundColor = "yellow";
		loi = (loi && false);
	}
	else {
		document.getElementById("errdiachi").innerHTML = "";
		d_chi.style.backgroundColor = "Green"
	}
	
	gg = document.getElementById("magg");
	ma = gg.value
	var khonghp = /^[0-9-+]+$ /;
	if (!khonghople.test(ma)) {
		document.getElementById("errgg").innerHTML = "Mã giảm giá này không hợp lệ";
		gg.style.backgroundColor = "yellow";
		loi = (loi && false);
	} else {
		document.getElementById("errgg").innerHTML = "";
		gg.style.backgroundColor = "Green"
	}
	if (loi == true) {
		document.getElementById("myform").submit();
		alert("Đã đăng kí thành công !");
	}

}