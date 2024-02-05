// setTimeout( function() {
//     console.log('depth1', new Date());
//     setTimeout( function() {
//       console.log('depth2', new Date());
//       setTimeout( function() {
//         console.log('depth3', new Date());
//         throw new Error('Already 3-depth!!');
//       }, 3000 );
//     }, 2000);
//   }, 1000);
  
  
// console.log('START!', new Date());
  
// 강사님 hint
// depthTimer(1)
// .then(() => depthTimer(2))
// .then(() => depthTimer(3))
// .catch(err => {e});

// answer

const depthTimer = depth => new Promise((resolve, reject) =>{
    setTimeout(() => { console.log('depth' + depth, new Date());
    // resolve(depth + 1);
    if(depth >= 3) reject( new Error('Aready 3 depth'));
    resolve(depth + 1);
    }, depth * 1000);
});

// 1 -> then 방식
// depthTimer(1).then(console.log);
// .then(depthTimer)
// .then(depthTimer)
// .catch(err => console.error{err});

// 2-> await 방식
// try{
//     const r1 = await depthTimer(1);
//     const r2 = await depthTimer(2);
//     const r3 = await depthTimer(3);
// }catch(err){
//     console.error(err);
// }

// 3-> for await of
const depthTimers = [1, 2, 3].map(depth => depthTimer(depth));
try{
    for await (const dt of depthTimers){
        dt
    }
}catch(err){
    console.error(err);
}
console.log('START', new Date());

// ==================1단계==================== //

// const start = () => {
//   return Promise.resolve()
//     .then(() => {
//       console.log('depth1', new Date());
//       return new Promise(resolve => setTimeout(resolve, 2000));
//     })
//     .then(() => {
//       console.log('depth2', new Date());
//       return new Promise(resolve => setTimeout(resolve, 2000));
//     })
//     .then(() => {
//       console.log('depth3', new Date());
//       throw new Error('Already 3-depth!!');
//     })
//     .catch(error => {
//       console.error(error.message);
//     });
// };

// start();

// ===============2단계=================== //

const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const runDepth = async (name, duration) => {
  console.log(name, new Date());
  await delay(duration);
};

const start2 = async () => {
  console.log('START!', new Date());

  try {
    await runDepth('depth1', 2000);
    await runDepth('depth2', 2000);
    await runDepth('depth3', 2000);
    throw new Error('Already 3-depth!!');
  } catch (error) {
    console.error(error.message);
  }
};

start2();
