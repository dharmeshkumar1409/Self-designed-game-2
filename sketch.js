bulletsFired = [];
var spaceShip, spaceShipImg;
var enemy1, enemy2, enemy3, enemy4;
var enemy1Img, enemy2Img, enemy3Img, enemy4Img;
var life = 3;
var lifeImg, lostLifeImg, fire, fireImg;
var bgImg;
var fire, fireImg, fireB;
var blast, blastImg;
var lifes, lLifes;

function preload() {
    spaceShipImg = loadImage("player1.png");
    enemy1Img = loadImage("enemy1.png");
    enemy2Img = loadImage("enemy2.png");
    enemy3Img = loadImage("enemy3.png");
    enemy4Img = loadImage("enemy4.png");
    lifeImg = loadImage("life1.png");
    lostLifeImg = loadImage("life4.png");
    bgImg = loadImage("background.jpg");
    fireImg = loadAnimation("fire.png");
    fireB = loadAnimation("blast1.png", "blast2.png", "blast3.png", "blast4.png", "blast5.png", "blast6.png", "blast7.png", "blast8.png", "blast9.png", "blast10.png", "blast11.png", "blast12.png");

}

function setup() {
    createCanvas(800, 600);
    spaceShip = createSprite(400, 520, 50, 50);
    spaceShip.addImage(spaceShipImg);
    spaceShip.scale = 2;

    enemies = new Group();
    fires = new Group();
    blasts = new Group();

}

function draw() {
    background(bgImg);

    edges = createEdgeSprites(0,1);

    for (i = 600; i < 780; i += 60) {
        life = createSprite(i, 20, 50, 50);
        life.addImage(lifeImg);
        life.scale = 0.1;
    }

    if (keyDown(32) || keyDown(32) && keyDown(LEFT_ARROW) || keyDown(32) && keyDown(RIGHT_ARROW )) {
        spawnFire();
    }

    if (keyDown(LEFT_ARROW)) {
        spaceShip.x -= 5;
    }

    if (keyDown(RIGHT_ARROW)) {
        spaceShip.x += 5;
    }

    for (var i = 0; i < enemies.length; i++) {
        if (enemies.get(i).isTouching(fires)) {
            enemies.get(i).destroy();
            // fire.changeAnimation("blast");
            fires.get(i).destroy();
        }

    }

    drawSprites();
    spawnEnemies();
}

// Enemies

function spawnEnemies() {
    if (frameCount % 150 === 0) {
        enemy1 = createSprite(Math.round(random(10, 590)), 0, 50, 50);
        enemy1.addImage(enemy1Img);
        enemy1.velocityY = 3.5;
        enemy1.scale = 1.8;
        enemy1.lifeTime = 200;
        enemies.add(enemy1);
    }

    if (frameCount % 200 === 0) {
        enemy2 = createSprite(Math.round(random(10, 590)), Math.round(random(0, 100)), 50, 50);
        enemy2.addImage(enemy2Img);
        if (enemy2.x <= 400) {
            enemy2.velocityX = 2;
            enemy2.velocityY = 3;
        } else {
            enemy2.velocityX = -2;
            enemy2.velocityY = 3;
        }
        enemy2.scale = 1.8;
        enemy2.lifeTime = 200;
        enemies.add(enemy2);
    }

    if (frameCount % 300 === 0) {
        enemy3 = createSprite(Math.round(random(10, 590)), 0, 50, 50);
        enemy3.addImage(enemy3Img);
        enemy3.velocityY = 3;
        enemy3.scale = 1.8;
        enemy3.lifeTime = 200;
        enemies.add(enemy3);

    }
    if (frameCount % 450 === 0) {
        enemy4 = createSprite(Math.round(random(50, 590)), 0, 50, 50);
        enemy4.addImage(enemy4Img);
        if (enemy4.x <= 400) {
            enemy4.velocityX = 3;
            enemy4.velocityY = 3;
        } else {
            enemy4.velocityX = -3;
            enemy4.velocityY = 3;
        }
        enemy4.scale = 1.8;
        enemy4.lifeTime = 200;
        enemies.add(enemy4);
    }
}

// Fires

function spawnFire() {

    fire = createSprite(spaceShip.x, spaceShip.y);
    fire.addAnimation("fire", fireImg);
    fire.addAnimation("blast", fireB);
    fire.velocityY = -3;
    fire.scale = 0.3;
    fire.lifeTime = 200;
    spaceShip.depth += fire.depth;
    fires.add(fire);
}



/* 
count+=1
for(i=0;i<=count;i++) {
    bullet[i]=new Bullet()
    }
    for (i=0;i<bullet.length;i++)    { 
   bullet[i].move()} 
   
   
   var tempBullet = new bullet(px);
      bulletArray.push(tempBullet);
      bulletLivesArray.push(1);


    oneBullet = new bullet(mouseVector.x, mouseVector.y);
	bulletsFired.push(oneBullet);


    for (var i = 0; i < bulletsFired.length; i++){
        bulletsFired[i].display();
        bulletsFired[i].update();
    }
*/