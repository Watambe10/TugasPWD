function fn_ValForm() {
    var sMsg = "";

    if (document.getElementById("name").value == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (document.getElementById("email").value == "") {
        sMsg += "\n* Anda belum mengisikan email";
    }else{
        var emailRegex = /^[a-z0-9][a-z0-9_\.-]*[a-z0-9]@[a-z0-9][a-z0-9_\.-]*[a-z0-9]\.[a-z0-9]{2,4}$/i;
        if(!emailRegex.test(document.getElementById("email").value)){
            sMsg += "\n* email tidak valid"
        }
    }

    if (document.getElementById("message").value == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}

