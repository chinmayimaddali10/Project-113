function preload() {

}

function setup() {
    var canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(0, 100, 128);
    stroke(0, 100, 128);
    circle(90, 40, 460, 20);
}


function takeSnap() {
    save("face.png");
}