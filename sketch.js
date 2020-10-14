var hr,sec,min
var angle1,angle2,angle3


function setup() {
  createCanvas(1000,1000);
  
  angleMode(DEGREES);

}

function draw() {
  background(0,0,0);  
  translate(400,400)
  rotate(-90)

  hr=hour();
min=minute();
sec=second();

angle1=map(sec,0,60,0,360);
angle2=map(min,0,60,0,360);
angle3=map(hr %12,0,12,0,360);
push()
rotate(angle1)


stroke(255,0,0)
line(0,0,100,0);

pop ()

push ()
rotate(angle2);
stroke(0,255,0)
line(0,0,80,0);

pop ()


push ()
rotate(angle3);
stroke(0,0,255)
line(0,0,50,0);

pop ()

strokeWeight(10)
stroke("yellow")
point(0,0)


strokeWeight(10)
noFill()
stroke(255,0,0)
arc(0,0,300,300,0,angle1)

stroke(0,255,0)
arc(0,0,280,280,0,angle2)

stroke(0,0,255)
arc(0,0,260,260,0,angle3)

drawSprites();
}