const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,580);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,550,1200,10);
    ground1 = new Ground(950,250,250,10);
    ground2 = new Ground(520,310,250,10);

    poly = new Polygon(150,280,30);

    rope = new SlingShot(poly.body,{x:150,y:280})

    //level 1
    box1 = new Box(420,280,40,50)
    box2 = new Box(460,280,40,50)
    box3 = new Box(500,280,40,50)
    box4 = new Box(540,280,40,50)
    box5 = new Box(580,280,40,50)
    box6 = new Box(620,280,40,50)
  
    //level 2
    box7 = new Box(440,230,40,50)
    box8 = new Box(480,230,40,50)
    box9 = new Box(520,230,40,50)
    box10 = new Box(560,230,40,50)
    box11 = new Box(600,230,40,50)
  
    // level 3
    box12 = new Box(460,180,40,50);
    box13 = new Box(500,180,40,50);
    box14 = new Box(540,180,40,50);
    box15 = new Box(580,180,40,50);

    // level 4 
    box16 = new Box(480,130,40,50);
    box17 = new Box(520,130,40,50);
    box18 = new Box(560,130,40,50);

    //level 5
    box19 = new Box(500,80,40,50);
    box20 = new Box(540,80,40,50);

    //level 6
    box21 = new Box(520,30,40,50);

   // part 2
   // level 1
   box22 = new Box(850,230,40,40);
   box23 = new Box(890,230,40,40);
   box24 = new Box(930,230,40,40);
   box25 = new Box(970,230,40,40);
   box26 = new Box(1010,230,40,40);
   box27 = new Box(1050,230,40,40);

   //level 2
   box28 = new Box(870,190,40,40);
   box29 = new Box(910,190,40,40);
   box30 = new Box(950,190,40,40);
   box31 = new Box(990,190,40,40);
   box32 = new Box(1030,190,40,40);

   //level 3
   box33 = new Box(890,150,40,40);
   box34 = new Box(930,150,40,40);
   box35 = new Box(970,150,40,40);
   box36 = new Box(1010,150,40,40);

   //level 4
   box37 = new Box(910,110,40,40);
   box38 = new Box(950,110,40,40);
   box39 = new Box(990,110,40,40);

   //level 5
   box40 = new Box(930,70,40,40);
   box41 = new Box(970,70,40,40);

   //level 6
   box42 = new Box(950,30,40,40)
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    fill("red")
    ground1.display()
    fill("red")
    ground2.display()
    fill("blue")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    fill("yellow")
    box7.display()
    box8.display()
    box9.display();
    box10.display()
    box11.display()
    fill("orange")
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    fill("pink")
    box16.display()
    box17.display()
    box18.display()
    fill("lightblue")
    box19.display()
    box20.display()
    fill("red")
    box21.display()

    fill("pink")
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    fill("blue")
    box28.display()
    box29.display()
    box30.display()
    box31.display()
    box32.display()
    fill("orange")
    box33.display()
    box34.display()
    box35.display()
    box36.display()
    fill("lightblue")
    box37.display()
    box38.display()
    box39.display()
    fill("gold")
    box40.display()
    box41.display()
    fill("silver")
    box42.display()

    poly.display();

    rope.display()

    textSize(20)
    stroke("red");
    strokeWeight(5)
    text("Drag The Hexagon & Release To Hit",200,400)
    text("Click Space To Tie The Hexagon with Sling",50,50)
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(poly.body, {x:240, y:320}) 
	  rope.attach(poly.body);
	}
  }
function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly()
}