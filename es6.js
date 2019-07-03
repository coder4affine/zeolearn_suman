var a = 1;

{
  var a = 2;
  console.log(a);
}

console.log(a);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve p1");
    // reject('reject p1')
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve p2");
  }, 1000);
});

// console.log('hello');
// p1.then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log(err);
// });

const getPromise = async () => {
  try {
    // const res = await Promise.all([p1, p2]);
    const res = await Promise.race([p1, p2]);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

getPromise();

console.log("hello1");
