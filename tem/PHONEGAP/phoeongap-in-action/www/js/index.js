document.addEventListener("deviceready",onDeviceReady);
function onDeviceReady(){
    document.querySelector("button").addEventListener("click",function(){
        navigator.camera.getPicture(done,fail,{
            destinationType : Camera.DestinationType.FILE_URI,
            sourceType      : Camera.PictureSourceType.CAMERA,
            correctOrientation:true,
            cameraDirection:0
        })
    })
}

function done(path){
   var preview = document.querySelector(".pic-preview");
   preview.style.backgroundImage = "url("+path+")";
   preview.style.backgroundSize  = "cover";
}

function fail(){
    alert("fail");
}