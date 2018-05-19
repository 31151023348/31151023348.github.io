function rePlay() {
    for (var i = 1; i <= 300; i++) {
        setTimeout(taosongaunhien, 50 * i);
    }
}
function taosongaunhien() {
    value_a = parseInt(document.getElementsByName("giatri")[0].value);
    document.getElementsByName("kq")[0].value = parseInt(Math.random() * (value_a) + 1);
}
function rePlay1() {
    for (var i = 1; i <= 300; i++) {
        setTimeout(taodaysongaunhien, 50 * i);
    }
}
function taodaysongaunhien() {
    document.getElementsByName("kq")[0].value = '';
    value_a = parseInt(document.getElementsByName("giatri")[0].value);
    var b = new Array(value_a);
    var c = '';
    var m = '';
    var n = '';
    var temp = '';
    for (var i = 0; i < b.length; i++) {
        b[i] = i + 1;
    }
    for (var j = 0; j < b.length; j++) {
        m = parseInt(Math.random() * (value_a));
        n = parseInt(Math.random() * (value_a));
        temp = b[m];
        b[m] = b[n];
        b[n] = temp;
    }
    for (var k = 0; k < b.length; k++) {
		if (k == b.length - 1)
		{ c += b[k]; }
		else
        { c += b[k] + ','; }
    }
    document.getElementsByName("kq")[0].value += c;
}