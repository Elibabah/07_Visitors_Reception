let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let video = document.getElementById('video')

//nav = navigator.mediaDevices
//console.log(nav)
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.play();
    })
}

document.getElementById('snap').addEventListener('click', () => {
    context.drawImage(video, 0, 0, 320, 240)
})


//------ traer Objeto localStorage con value de los input------//

// Get the variable
let formObject = localStorage['objectToPass'];
console.log(formObject)





//localStorage.removeItem('objectToPass'); // Clear the localStorage
//var firstData = myData[0];
//var secondData = myData[1];
//alert('firstData: ' + firstData + '\nsecondData: ' + secondData);