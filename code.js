var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8ccb791d-4851-4772-a963-21f6df899985"],"propsByKey":{"8ccb791d-4851-4772-a963-21f6df899985":{"name":"boo","sourceUrl":null,"frameSize":{"x":399,"y":393},"frameCount":1,"looping":true,"frameDelay":12,"version":"oUSlHjYozcZLmQTDEg6_q75WJlutXyoJ","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":393},"rootRelativePath":"assets/8ccb791d-4851-4772-a963-21f6df899985.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
var pontos=0
var paddle=createSprite(200,390,100,20)
var ball=createSprite(200,200,20,20)
ball.setAnimation("boo")
ball.scale=0.1
createEdgeSprites()
var estado="inicio"
function draw() {
  background("yellow");
fill("blue");
textSize(30);
text("pontos "+pontos, 150, 20);
  if (estado=="inicio"){
  textSize(20);
  text("apete ENTER para começar",100,200)
  if (keyDown("ENTER")) {
 ball.velocityX=5;
 ball.velocityY=4
 estado="jogar"
  }
  
  }
if (estado=="jogar") {
  paddle.x=World.mouseX;
  if (pontos==16||ball.isTouching(bottomEdge)) {
    estado="fim"
  }
}
if (estado=="fim") {
 text("fim de jogo", 125, 200);
   
}
if (ball.isTouching(box1)) {
  pontos=pontos+1
  ball.bounceOff(box1);
  box1.destroy();
  
}
if (ball.isTouching(box2)) {
  pontos=pontos+1
  ball.bounceOff(box2);
  box2.destroy();
  
}
if (ball.isTouching(box3)) {
  pontos=pontos+1
  ball.bounceOff(box3);
  box3.destroy();
  
}
if (ball.isTouching(box4)) {
  pontos=pontos+1
  ball.bounceOff(box4);
  box4.destroy();
  
}
if (ball.isTouching(box5)) {
  pontos=pontos+1
  ball.bounceOff(box5);
  box5.destroy();
  
}
if (ball.isTouching(box6)) {
  pontos=pontos+1
  ball.bounceOff(box6);
  box6.destroy();
  
}
if (ball.isTouching(box7)) {
  pontos=pontos+1
  ball.bounceOff(box7);
  box7.destroy();
  
}
if (ball.isTouching(box8)) {
  pontos=pontos+1
  ball.bounceOff(box8);
  box8.destroy();
  
}
if (ball.isTouching(box9)) {
  pontos=pontos+1
  ball.bounceOff(box9);
  box9.destroy();
  
}
if (ball.isTouching(box10)) {
  pontos=pontos+1
  ball.bounceOff(box10);
  box10.destroy();
  
}
if (ball.isTouching(box11)) {
  pontos=pontos+1
  ball.bounceOff(box1);
  box11.destroy();
  
}
if (ball.isTouching(box12)) {
  pontos=pontos+1
  ball.bounceOff(box12);
  box12.destroy();
  
}
if (ball.isTouching(box13)) {
  pontos=pontos+1
  ball.bounceOff(box13);
  box13.destroy();
  
}
if (ball.isTouching(box14)) {
  pontos=pontos+1
  ball.bounceOff(box14);
  box14.destroy();
  
}
if (ball.isTouching(box15)) {
  pontos=pontos+1
  ball.bounceOff(box15);
  box15.destroy();
  
}
if (ball.isTouching(box16)) {
  pontos=pontos+1
  ball.bounceOff(box16);
  box16.destroy();
  
}
ball.bounceOff(paddle)
ball.bounceOff(topEdge)
ball.bounceOff(leftEdge)
ball.bounceOff(rightEdge)

  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
