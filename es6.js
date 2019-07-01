var a = 1;

{
  var a = 2;
  console.log(a);
}

console.log(a);

// Different scrope diffrent value
let a = 1;

{
  let a = 2;
  console.log(a);
}

{
  let a = 3;
  console.log(a);
}

console.log(a);

// re-asign the value in scope

let a = 2;

a = 3;

{
  a = 5;
  console.log(a);
}

console.log(a);

//const

const a = 1;

{
  const a = 2;

  console.log(a);
}

{
  const a = 3;

  console.log(a);
}

console.log(a);

const firstName = "Yagnesh";

const lastName = "Modh";

// const fullName = firstName + ' ' + lastName;

const fullName = `${firstName}

${lastName}`;

console.log(fullName);

//string literal

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

// const html = '<!DOCTYPE html>' +
// '\n<html lang="en">' +
// '\n<head>' +
// '\n\t<meta charset="UTF-8">' +
// '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
// '\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
// '\n\t<title>Document</title>' +
// '\n</head>' +
// '\n<body>' +
// '\n' +
// "\n</body>" +
// '\n</html>';

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

console.log(html);

// object declaration

const a = 1;
const b = 2;

// es5
// const obj = {
//     a: a,
//     b: b,
//     c: function() {
//         return this.a + this.b
//     },
//     d: []
// }

//es 6
const obj = {
  a,
  b,
  c() {
    return this.a + this.b;
  },
  d: []
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c());
console.log(obj.d);

// class

class Animal {
  constructor(type = "animal") {
    this.type = type;
    this.name = "yagnesh modh";
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    console.log(this.type);
    console.log(this.name);
  }
}

let a = new Animal();

console.log(a.makeSound());

class Cat extends Animal {
  constructor() {
    super("cat");
  }

  makeSound() {
    super.makeSound();
    console.log("meow!!");
  }
}

let b = new Cat();
console.log(b.type);
console.log(b.makeSound());

const arr = [...Array(10).keys()];

console.time("for loop");

for (let index = 0; index < arr.length; index++) {}

console.timeEnd("for loop");

console.time("forEach loop");

arr.forEach(element => {});

console.timeEnd("forEach loop");

console.time("while loop");

let index = arr.length;
while (index > 0) {
  index--;
}

console.timeEnd("while loop");

const a = { a: 1, b: 2, c: 3, e: 5 };

// spread operator
const b = { ...a, c: 4, d: 5, d: 6 };

console.log(b);
console.log(a);

// destructors
const { a: aVar, e, ...rest } = a;

console.log(rest);
console.log(e);

const a = [1, 2, 4, 5, 6];

// const b = [4, ...a]

const index = a.findIndex(function(item) {
  return item === 2;
});

console.log(index);

const b = [...a.slice(0, index + 1), 3, ...a.slice(index + 1)];

console.log(b);

// console.log(b)

// // destructor

// const [d, e, ...rest] = b;

// console.log(rest);
// console.log(d);
// console.log(e);

const a = [1, 2, 3, 4, 5];

const b = [];

for (let index = 0; index < a.length; index++) {
  b.push(a[index] * 2);
}

console.log(b);

const c = a.map(x => {
  if (x % 2 === 0) {
    return x * 2;
  }
  return x;
});

console.log(c);

const a = [1, 2, 3, 4, 5];

let sum = 0;

for (let index = 0; index < a.length; index++) {
  sum += a[index];
}

console.log(sum);

const sim1 = a.reduce((p, c) => {
  console.log(p);
  console.log(c);
  return p + c;
}, 0);

console.log(sim1);
