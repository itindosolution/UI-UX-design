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
    const videoIot=document.querySelector(".videoIot");

    function createAnimate(element){
        const clientHeight = document.documentElement.clientHeight;
        const videoHardwareY = element.getBoundingClientRect().y;
        const videoHardwareHeight = element.getBoundingClientRect().height;

        if(clientHeight > videoHardwareY + videoHardwareHeight * 2/3  && videoHardwareY > 0  ){
            element.play();
        }
    }
    document.addEventListener('scroll',()=>{
        createAnimate(videoHardware);
        createAnimate(videoSoftware);
        createAnimate(videoInfra);
        createAnimate(videoIot);
    });

}

run();