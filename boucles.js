// Boucle while
let i = 0;
while (i < 10) {
  console.log("boucle :" + i);
  i += 1;
}
// Boucle for
for (i = 0; i < 40; i += 2) {
  console.log("boucle :" + i);
}
// FOR IN
let b = {
  name: "Haley",
  age: 18,
};
for (let take in b) {
  console.log(take);
}
// FOR OF
let c = ["Hello", "You"];
for (let take of c) {
  console.log(take);
}
