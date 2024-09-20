// Prime number generation: Find prime numbers up to a given limit using a simple algorithm.

let input = parseInt(prompt("check prime numbers"));
let user = parseInt(prompt("check prime numbers"));

function prime (input,user){

for(let i = input; i <= user; i++){
    let isPrime = true;

    for(let j = 2; j*j<=i; j++){
        if(i % j == 0){
            isPrime = false;
        } 
      }
      if(isPrime){
        console.log(i);
      }
    }
}
prime(input, user);