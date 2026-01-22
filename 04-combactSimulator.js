let heroHP = 100;
let monsterHP = 50;

while(heroHP >0 && monsterHP > 0) {
    monsterHP -= 10;
    heroHP -= 5;
    console.log(`Hero HP: ${heroHP} \nMonster HP: ${monsterHP}` );  
}
if (heroHP > 0) {
    console.log('Victory!');
} else {
    console.log('Game Over');
}