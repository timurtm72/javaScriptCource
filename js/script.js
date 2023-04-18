let num = 20;
function showFirstMessage(message) {
  console.log(`Hello ${message}`);
  num = 10;
  console.log(num);
}
showFirstMessage('Petr');
console.log(num);
