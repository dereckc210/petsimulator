let hunger = 5;
let energy = 5;
let happiness = 5;

function myHunger() {
  hunger -= 1;
  console.log("You fed your pet! Hunger is now" + hunger);
}

if (hunger<= 0) {
  console.log("Your pet is full and doesn't want to eat more!");
}
