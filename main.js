//https://teachablemachine.withgoogle.com/models/0vGdeb3xL/
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DjTbhFeck/model.json",modelLoaded)
function modelLoaded(){
    console.log("model loaded succefully")
}
Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality: 90 
});
Webcam.attach( '#camera')
function take_snapshot(){
    Webcam.snap( function(pic){
        document.getElementById("result").innerHTML='<img id="cam_pic" src="'+pic+'">'
    })
}
p1=""
p2=""
function speak(){
   speak_data_1 = "the first prediction is " + p1
   speak_data_2 = "and the second prediction is " + p2
   speakaudio = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
   window.speechSynthesis.speak(speakaudio)
}