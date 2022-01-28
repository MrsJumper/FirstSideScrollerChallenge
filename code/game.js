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
  pos (24,24)
])

// increment score every frame
onUpdate (() => {
  score++;
  scoreLabel.text = score;
});

});