let raceNumber = Math.floor(Math.random() * 1000);
const earlyBird = true;
const age = 18;
if (age > 18 && earlyBird) {
  raceNumber += 1000;
}

if (age > 18 && earlyBird) {
  console.log(`You will race at 9:30 am with number ${raceNumber}.`);
} else if (age > 18 && !earlyBird) {
  console.log(`You will race at 11:00 am with number ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30 with number ${raceNumber}.`);
} else {
  console.log('See the registration desk.');
}
