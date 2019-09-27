console.log('how big the gameplay should be(n)?')
let a = null
let b= null
process.stdin.on('readable', () => {
    let chunk1 = process.stdin.read();
    if (chunk1 > 0) {
      process.stdout.write(`data: ${chunk1}`);
      process.stdout.write(a = chunk1);
    }

    else{
        console.log('this is not valid')
    }
  });
   
  process.stdin.on('end', () => {
    process.stdout.write('end');
  });




  process.stdin.on('readable', () => {
    let chunk2 = process.stdin.read();
    if (chunk2 > 0) {
      process.stdout.write(`data: ${chunk2}`);
      process.stdout.write(b = chunk2);
    }

    else{
        console.log('this is not valid')
    }
  });
   
  process.stdin.on('end', () => {
    process.stdout.write('end');
  });


console.log(b)