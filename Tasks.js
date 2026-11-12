// ASSIGNMENT: JavaScript Call Stack & Closures

// ------------------------------------------
// TASK 1: Trace the Stack and Output Order
// ------------------------------------------

function greet() {
  console.log('Hi');
  sayBye();
}

function sayBye() {
  console.log('Bye');
}

greet();
console.log('Done');

/*
Explanation:
1. greet() is called and pushed onto the Call Stack.
2. console.log('Hi') executes and prints Hi.
3. sayBye() is called and pushed onto the Call Stack.
4. console.log('Bye') executes and prints Bye.
5. sayBye() finishes and is removed from the stack.
6. greet() finishes and is removed from the stack.
7. Finally, console.log('Done') executes.

Expected Output:
Hi
Bye
Done
*/


// ------------------------------------------
// TASK 2: Trace the Stack and Output Order
// ------------------------------------------

setTimeout(() => console.log('One'), 3000);
setTimeout(() => console.log('Two'), 1000);
setTimeout(() => console.log('Three'), 2000);

/*
Explanation:
1. All three setTimeout() functions execute synchronously.
2. Their callbacks are registered with the timer environment.
3. The timers run concurrently.
4. After approximately 1000ms, Two becomes ready.
5. After approximately 2000ms, Three becomes ready.
6. After approximately 3000ms, One becomes ready.
7. The Event Loop allows the callbacks to execute when
   the Call Stack is empty.

Expected Output:
Two
Three
One
*/


// ------------------------------------------
// TASK 3: var and Closure
// ------------------------------------------

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

/*
Explanation:
1. var is function-scoped.
2. All three callbacks share the same variable i.
3. The loop executes three times.
4. When the loop finishes, i becomes 4.
5. Each callback accesses the same variable through closure.
6. Therefore, all callbacks print 4.

Expected Output:
4
4
4
*/



// ------------------------------------------
// TASK 4: Counter Output and Closures
// ------------------------------------------

function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = makeCounter();

counter1();
counter1();

const counter2 = makeCounter();

counter2();

/*
Explanation:
1. makeCounter() creates a new lexical environment.
2. count starts from 0.
3. counter1() increments count to 1.
4. The second counter1() increments count to 2.
5. counter2 is created by another makeCounter() call.
6. It gets a separate count variable starting from 0.
7. counter2() increments its count to 1.

Expected Output:
1
2
1*/




// ------------------------------------------
// TASK 5: Output Order for logLater
// ------------------------------------------

function logLater(id) {
  setTimeout(() => {
    console.log('ID is', id);
  }, 1000);
}

logLater(1);
logLater(2);
logLater(3);

/*
Explanation:
1. logLater(1) schedules a callback with id = 1.
2. logLater(2) schedules a callback with id = 2.
3. logLater(3) schedules a callback with id = 3.
4. Each function invocation has its own parameter id.
5. The callback remembers its respective id through closure.
6. All three timers have approximately the same delay.
7. Their callbacks execute in the order they were scheduled.

Expected Output:
ID is 1
ID is 2
ID is 3
*/
