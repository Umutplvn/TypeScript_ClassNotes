//! Types

// String
let isim: string = `Merhaba, degisiklik!`;
console.log(isim)

// Number
let yas: number = 25;
console.log(yas)

// Boolean
let isActive: boolean = true;
console.log(isActive)

// Any
let value: any = 42;
value = "Merhaba";
console.log(value); 

// Void
function selamla(): void {
    console.log("Void!");
  }
  selamla();
  
// Void  
let a: null = null;
let b: undefined = undefined;
console.log(a, b);

// Array
let sayilar: number[] = [1, 2, 3, 4];
console.log(sayilar); 

let karisikDizi: Array<any> = [1, "Merhaba", { isim: "Umut" }];
console.log(karisikDizi);  // [ 1, "Merhaba", { isim: "Umut" }]

let karisikDizi2: (string | number | object)[] = [1, "Merhaba", { isim: "Umut" }];
console.log(karisikDizi2);  // [ 1, "Merhaba", { isim: "Umut" }]


// Tuple
let kullanici: [string, number] = ["Umut", 25];
console.log(kullanici); // ["Umut", 25]

// Object
let kisi: { isim: string, yas: number } = { isim: "Umut", yas: 25 };
console.log(kisi); // { isim: "Umut", yas: 25 }
