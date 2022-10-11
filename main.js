function preload() {}

function setup()
{
    canvas = createCanvas(600 , 500);
    canvas.position(300 , 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image( video , 150 , 150 , 250 , 200);

    fill("yellow");
    circle(90 , 80 , 60);
    circle(500 , 80 , 60);
    circle(90 , 420 , 60);
    circle(500 , 420 , 60);

    fill("red");
    rect(119 , 70 , 352 , 25);
    rect(119 , 410 , 352 , 25);
    rect(80 , 105 , 25 , 285);
    rect(490 , 105 , 25 , 285);
}

function take_snapshot()
{
    save("filterimage.png");
}

