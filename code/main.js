import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("Bubble1", "sprites/Bubble1.png");
loadSprite("Sand", "sprites/Sand.png");
loadSprite("LightWaterBG", "sprites/LightWaterBG.png");
loadSprite("DarkWaterBG", "sprites/DarkWaterBG.png");
loadSprite("crab", "sprites/Crab.png");
loadSprite("pop", "sprites/pop.png");
loadSprite("chain", "sprites/chain.png");
loadSprite("shortchain_2", "sprites/shortchain_2.png");
loadSprite("window", "sprites/window.png");
loadSprite("star", "sprites/star.png");
loadSprite("scoreboard", "sprites/scoreboard.png");
loadSprite("play", "sprites/play.png");

scene ("start", ()=> {
  add([
	// list of components
	sprite("LightWaterBG",{width:width(),height:height()}),
	
])
  add([
	// list of components
	sprite("DarkWaterBG",{width:width(),height:height()}),
	
])
add([
	// list of components
	sprite("Sand",{width:width(),height:height()}),
	area(),

  //solid(),
])
add([
	// list of components
	sprite("shortchain_2"),
  scale (.5),
  pos (50,0)
	
  //solid(),
])
add([
	// list of components
	sprite("scoreboard"),
  scale (.50),
  pos (0,40)
	
  //solid(),
])
add([
  text ("WELCOME"),
  scale(0.5),
  pos (50,50)
])
add([
	// list of components
	sprite("shortchain_2"),
  scale (.50),
  pos (width()/2+25,0)
	
  //solid(),
])
add([
	// list of components
	sprite("window"),
  scale (.30),
  pos (width()/2,40)
	
  //solid(),
])
add([
  text ("Crabby"),
  scale(0.5),
  pos (width()/2+25,100)
])
add([
	// list of components
	sprite("play"),
  scale (.60),
  pos (150,150),
  
	"play",
  {
    
  },

]);
     

})

scene ("game", () => {
  add([
	// list of components
	sprite("LightWaterBG",{width:width(),height:height()}),
	
])
  add([
	// list of components
	sprite("DarkWaterBG",{width:width(),height:height()}),
	
])

// add a character to screen
const crab = add([
	// list of components
	sprite("crab"),
	pos(100, 0),
  scale (0.20),
  //body(),
	area(),
  body(),
])
loop (1,() =>{
add ([
  //list components
  sprite ("Bubble1"),
  pos(width(),height()-48),
  origin ("botleft"),
  move (LEFT,240),
  scale (0.5),
  area(),
  body(),
  "bubble",
])
});
add([
	// list of components
	sprite("shortchain_2"),
  scale (.5),
  pos (50,0)
	
  //solid(),
])
add([
	// list of components
	sprite("scoreboard"),
  scale (.50),
  pos (0,40)
	
  //solid(),
])

// add platform
add([
	rect(width(), 48),
	pos(0, height() - 48),
	outline(4),
	area(),
	solid(),
	color(194, 178, 128),
])
add([
	// list of components
	sprite("Sand",{width:width(),height:height()}),
	area(),
  //solid(),
])

//.jump () when space key is pressed (click in game window before testing)
onKeyPress("space", () => {
  if (crab.isGrounded()) 
  {
  crab.jump()
  }
        
})


//add collision

crab.onCollide ("bubble", () =>{
 add([
    sprite("pop"),  // renders as a sprite
    scale (.2),
    pos(crab.pos),    // position in world
    ]);
  shake ();
  go("lose");//go to lose scene here

}); 
// add score counter
let score = 0;
const scoreLabel = add([
  text (score),
  scale(0.5),
  pos (90,50)
])

// increment score every frame
onUpdate (() => {
  score++;
  scoreLabel.text = score;
});

});


scene ("lose", ()=> {
  add ([
    text ("Game Over"),
    pos (center()),
    origin ("center"),
  ])
})

go("start")

