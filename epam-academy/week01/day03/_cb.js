const doSomething = callback => {

    callback('Here I am');
  
    callback('Calling you back');
  
  }
  
  
  
  const callback = input => {
  
    console.log(input);
  
  }
  
  
  
  doSomething(callback);
  
  
  
  [1, 2, 3, 4, 5].forEach(callback);
  
  
  
  let counter = 0;
  
  
  
  const timer = () => {
  
    let interval = setInterval(() => {
  
      console.log('Hello');
  
      counter++;
  
  
  
      if (counter === 5) {
  
        clearInterval(interval);
  
      }
  
  
  
    }, 1000);
  
  }
  
  timer();
  
  
  
  setTimeout(() => {
  
    console.log('1 second has passed');
  
  }, 1000);
  
  
  
  setTimeout(() => {
  
    console.log('0 second has passed');
  
  }, 0);
  
  
  
  console.log('Which one is first?');