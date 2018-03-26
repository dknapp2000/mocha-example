
function sum() {
  let accumulator = 0;
  const result = [...arguments].reduce((accumulator, e) => accumulator + e );
  return result;
}

function multi() {
  let accumulator = 0;
  const result = [...arguments].reduce((accumulator, e) => accumulator * e );
  return result;
}

function factor(num) {
  let result = 1;
  for( let i=1; i<num+1; i++ ) result *= i;
  return result;
}

function slow(iterations) {
  let sum = 0;
  for (let i=0; i<iterations; i++ ) {
    for (let j=0; j<10000000; j++ ) sum++;
  }
  return(sum);
}

function slowPromise(iterations) {

  return new Promise( function( resolve, reject ) {
    let sum = 0;
    for (let i=0; i<iterations; i++ ) {
      for (let j=0; j<10000000; j++ ) sum++;
    }
    resolve(sum);      
  });
}

function slowCallback(iterations, cb) {
  let sum = 0;
  for (let i=0; i<iterations; i++ ) {
    for (let j=0; j<10000000; j++ ) sum++;
  }
  cb(sum);
}