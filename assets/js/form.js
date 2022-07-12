function validasi() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("number").value;
    let pesan = document.getElementById("pesan").value;
    if (nama != "" && email!="" && number !="" && pesan!="") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}