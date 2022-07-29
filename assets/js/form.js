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
        const videoHardwareHeight = videoHardware.getBoundingClientRect().height;
        const videoSoftwareY = videoSoftware.getBoundingClientRect().y;
        const videoSoftwareHeight = videoSoftware.getBoundingClientRect().height;
        const videoInfraY = videoInfra.getBoundingClientRect().y;
        const videoInfraHeight = videoInfra.getBoundingClientRect().height;
        

        if(clientHeight > videoHardwareY + videoHardwareHeight * 2/3  && videoHardwareY > 0  ){
            videoHardware.play();
        }

        if(clientHeight > videoSoftwareY + videoSoftwareHeight * 2/3 && videoSoftwareY > 0 ){
            videoSoftware.play();
            state = true;
        }

        if(clientHeight > videoInfraY + videoInfraHeight * 2/3 && videoInfraY > 0 ){
            videoInfra.play();
            state = true;
        }
    });

}

run();