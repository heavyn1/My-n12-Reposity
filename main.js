let random;
random = Math.trunc(Math.random() * 100);

alert("Random son " + random);
if (random % 3 === 0 && random % 5 === 0) {
    alert(random + "Bu son Fizz Buzz");
}else if (random % 3 === 0){
    alert(random + " Bu son Fizz ");
} if (random % 3 && random % 5) {
    alert(random + "Bu son Fizz, Buzz va FizzBuzz ha emas")
}
