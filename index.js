function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  
  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe();

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  sayHelloToLiz();

  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToSamip();

  sayHelloToGuadalupe();
  sayHelloToLiz();
  sayHelloToSamip();

  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); // passing the argument 'anything' into our function

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"
  
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio", "hello");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
 console.log();

 function add(x, y) {
    return x + y;
  }
  console.log(add(1, 2));
  
  function add(x, y) {
    return x + y;
  }
  console.log(add(80, 9000));
  
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Liz"));

  function add(x, y) {
    return x + y;
  }
  console.log(add(1, 2));

  const sum = add(5, 21);
  const message = `The sum of your numbers is: ${sum}.`;
  console.log(message);

  const message2 = `The sum of your numbers is: ${add(11, 379)}.`;
  console.log(message2);

  num1 = 5;
  num2 = 22;
  const sum2 = add(num1, num2);
  const message3 = `The sum of your numbers is: ${sum2}.`;
  console.log(message3);
  console.log(num2);
  num2++;
  console.log(num2);

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("Goddess of Fire is here!");
  }
  console.log(say("Welcome", "Goddess"));

  function say(greeting, firstName) {
    console.log("I am the Goddess of Fire!");
    return `${greeting}, ${firstName}!`;
  }


  


  


  

    
  

  

  






