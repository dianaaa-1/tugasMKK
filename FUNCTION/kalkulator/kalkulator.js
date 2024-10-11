function tambah(angka1, angka2) {
    let hasil = angka1 + angka2;
    alert(`${angka1} + ${angka2} = ${hasil} `);
    return hasil;
}

function kurang(angka1, angka2) {
    let hasil = angka1 - angka2;
    alert(`${angka1} - ${angka2} = ${hasil} `);
    return hasil;
}

function kali(angka1, angka2) {
    let hasil = angka1 * angka2;
    alert(`${angka1} * ${angka2} = ${hasil} `);
    return hasil;
}

function bagi(angka1, angka2) {
    if (angka2 !== 0) {
        let hasil = angka1 / angka2;
        alert(`${angka1} / ${angka2} = ${hasil} `);
        return hasil;
    } else {
        alert("Tidak dapat membagi dengan nol");
        return null;
    }
}

function hitung() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var operator = document.getElementById("operator").value;
    var hasil;
    
    if (operator == "tambah") {
        hasil = tambah(angka1, angka2);
    } else if (operator == "kurang") {
        hasil = kurang(angka1, angka2);
    } else if (operator == "kali") {
        hasil = kali(angka1, angka2);
    } else if (operator == "bagi") {
        hasil = bagi(angka1, angka2);
    }
    
    if (hasil !== null) {
        document.getElementById("hasil").textContent = hasil;
    }
    
    if (operator == "tambah") {
        hasil = tambah(angka1, angka2);
        document.getElementById("hasildetail").textContent = `${angka1} + ${angka2} = ${hasil}`;
    } else if (operator == "kurang") {
        hasil = kurang(angka1, angka2);
        document.getElementById("hasildetail").textContent = `${angka1} - ${angka2} = ${hasil}`;
    } else if (operator == "kali") {
        hasil = kali(angka1, angka2);
        document.getElementById("hasildetail").textContent = `${angka1} * ${angka2} = ${hasil}`;
    } else if (operator == "bagi") {
        hasil = bagi(angka1, angka2);
        document.getElementById("hasildetail").textContent = `${angka1} / ${angka2} = ${hasil}`;
    }
}