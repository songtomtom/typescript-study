class Cat {
  meow() {}
}
class Dog {
  woof() {}
}

function sounds(ani: Cat | Dog) {
  if (ani instanceof Cat) {
    ani.meow();
  } else {
    ani.woof();
  }
}
