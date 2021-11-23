leftwristX = 0;
rightwristX = 0;
difference = 0;
noseX = 0;
noseY = 0;

function setup(){
    canvas = createCanvas(500,550);
    canvas.position(600,150);

    video = createCapture(VIDEO);
    video.size(500,500);

    Posnet = ml5.poseNet(video, modelloaded);
    Posnet.on('pose', gotresults);
}

function modelloaded(){
    console.log("Model has been loaded");
}

function gotresults(results){
    if(results.length>0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        difference = floor(leftwristX - rightwristX);
console.log(difference);

    }
}

function draw(){
    background("grey");
    fill(random(0,255), random(0,255), random(0,255));
stroke("white");
square(noseX, noseY, difference);
}