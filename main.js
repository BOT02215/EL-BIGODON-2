function preload() {

}

function setup() {
    canvas = createCanvas(400, 300)
    canvas.center()
    filtro = createCapture(VIDEO)
    filtro.size(400, 300)
    filtro.hide()

    poseNet = ml5.poseNet(filtro, modelLoaded)
    poseNet.on("pose", result)
}

function modelLoaded() {
    console.log("Modelo carregado")
}

function result(result) {
    if (result.length > 0) {
        console.log(result)
        nose_x = result[0].pose.nose.x
        nose_y = result[0].pose.nose.y
        eyeLeft_x = result[0].pose.leftEye.x
        eyeRight_x = result[0].pose.rightEye.x
        eyeLeft_y = result[0].pose.leftEye.y
        eyeRight_y = result[0].pose.rightEye.y
    }
}

function draw() {
    image(filtro, 0, 0, 400, 300)
}

function takeSnaphot() {
    save("ElBigodon.png")
}