// function validasi() {
//     let nama = document.getElementById("nama").value;
//     let email = document.getElementById("email").value;
//     let alamat = document.getElementById("number").value;
//     let pesan = document.getElementById("pesan").value;
//     if (nama != "" && email!="" && number !="" && pesan!="") {
//         return true;
//     }else{
//         alert('Anda harus mengisi data dengan lengkap !');
//     }
// }
function run(){
    console.log(window.screen);
    const videoHardware=document.querySelector(".videoHardware");
    const videoSoftware=document.querySelector(".videoSoftware");
    const videoInfra=document.querySelector(".videoInfra");
    // tes.addEventListener("load",()=>{
    //     console.log('hallo dunia');
    // })
    // window.addEventListener('DOMContentLoaded', (event) => {
    //     document.querySelector(".videoHardware").play();
    //     document.querySelector(".videoSoftware").play();
    // });

    document.addEventListener('scroll',()=>{
        const clientHeight = document.documentElement.clientHeight;
        const videoHardwareY = videoHardware.getBoundingClientRect().y;
        const videoSoftwareY = videoSoftware.getBoundingClientRect().y;
        const videoInfraY = videoInfra.getBoundingClientRect().y;

        if(clientHeight > videoHardwareY && videoHardwareY > 0){
            setTimeout(videoHardware.play(), 2000);
        }

        if(clientHeight > videoSoftwareY && videoSoftwareY > 0){
            videoSoftware.play();
        }

        if(clientHeight > videoInfraY && videoInfraY > 0){
            videoInfra.play();
        }
    });

}

run();