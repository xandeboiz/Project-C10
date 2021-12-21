var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5f608ffb-e9ae-4b14-afc1-170b7a1290b3","b1d49a70-01ae-4788-afa0-68d7f4d3491a","1cc5693b-a3fa-4a6e-8ca1-499aea517d63","8aea2e66-bd71-40c6-8974-f759f4ed65ca"],"propsByKey":{"5f608ffb-e9ae-4b14-afc1-170b7a1290b3":{"name":"tennisball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png"},"b1d49a70-01ae-4788-afa0-68d7f4d3491a":{"name":"half_note_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EfuC8c._enYemWiMokhdoKYyguJe45Hf/category_music/half_note.png","frameSize":{"x":212,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"EfuC8c._enYemWiMokhdoKYyguJe45Hf","categories":["music"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EfuC8c._enYemWiMokhdoKYyguJe45Hf/category_music/half_note.png"},"1cc5693b-a3fa-4a6e-8ca1-499aea517d63":{"name":"quarter_note_1","sourceUrl":"assets/api/v1/animation-library/gamelab/maw9ZQibrngbyq3EfOHTdxGbuSXwGCVT/category_music/quarter_note.png","frameSize":{"x":212,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"maw9ZQibrngbyq3EfOHTdxGbuSXwGCVT","categories":["music"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/maw9ZQibrngbyq3EfOHTdxGbuSXwGCVT/category_music/quarter_note.png"},"8aea2e66-bd71-40c6-8974-f759f4ed65ca":{"name":"half_note_down_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0NgTVfl7Bc8kA4Hh1QdArlLez0aJwVf2/category_music/half_note_down.png","frameSize":{"x":212,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"0NgTVfl7Bc8kA4Hh1QdArlLez0aJwVf2","categories":["music"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0NgTVfl7Bc8kA4Hh1QdArlLez0aJwVf2/category_music/half_note_down.png"}}};
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

var PP = createSprite(390, 200, 10,70);
var CP = createSprite(10, 200, 10,70);
var B = createSprite(200, 200, 10, 10);
var p = 0;

CP.shapeColor="Red";
B.shapeColor="Black";

function draw() {
  background("white");
  CP.y=B.y;
  createEdgeSprites();
  
 
  
  linhat();
  movimento();
  inicio();
  ponto();
  sons();
  animacao();
  
  //B.bounceOff(edges) (para quicar em todas as paredes)
  B.bounceOff(topEdge);
  B.bounceOff(bottomEdge);
  B.bounceOff(PP);
  B.bounceOff(CP);
  drawSprites();
}

function movimento() {
  if(keyDown("up")) {
    PP.y = PP.y - 10;
  }
  
  if(keyDown("down")) {
    PP.y = PP.y + 10;
  }
}

function inicio(){
  if(keyDown("space")) {
    B.velocityX = 5;
    B.velocityY = 5;
  }
}

function ponto(){
  if(B.x == 400) {
    p = p + 1;
    B.velocityY = 0;
    B.velocityX = 0;
    B.x = 200;
    B.y = 200;
    playSound("assets/category_alerts/comedy_game_over_1.mp3", false);

  }
}

function linhat(){
  for (var num = 0; num < 400; num = num + 20) {
    line(200, 0 + num, 200, num + 10);
  }
}

function sons (){
  if(B.isTouching(PP) || B.isTouching(CP)){
    playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3", false);
  }
  
  if(B.isTouching(topEdge) || B.isTouching(bottomEdge)){
    playSound("assets/category_projectile/game_ball_bounce.mp3", false);
  }
}
 
function animacao(){
  if(keyWentDown("left")){
    PP.setAnimation("half_note_down_1");
  }
  if(keyWentUp("left") ){
    PP.setAnimation("half_note_1");
  }
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
