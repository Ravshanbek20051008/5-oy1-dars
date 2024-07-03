// massivlarga oid masalalar
// 1-masala
// let arr = ["salom", "yaxshimisz", "kim", "siz", "axvollar"];
// const boshxarfbilan = (arr) => {
//   let res = arr.filter(function (value) {
//     return value.length > 5;
//   });
//   let result = res.map(function (value) {
//     return value.charAt(0).toUpperCase() + value.slice(1).split(" ");
//   });
//   return result;
// };
// console.log(boshxarfbilan(arr));

// 2-masala
// let talaba = ["sardor 20", "abror 23", "jamshid 19"];
// function yoshiUlugtalaba(talaba) {
//   let res = talaba.find(function (value) {
//     let yosh = value.split(" ")[1];
//     return yosh == "20";
//   });
//   let result = res.map(function (a) {
//     return a.charAt(0).toUpperCase() + a.slice(1);
//   });
//   return result;
// }
// console.log(yoshiUlugtalaba(talaba));

// 3-masala

// 4-masala
// let son = [1, 2, 3, 4, 5, 6, 7, 800, 9];
// function tekshirish(son) {
//   let res = son.every(function (value) {
//     return value > 0;
//   });
//   let kattason = son.some(function (value) {
//     return value > 100;
//   });
//   let result;
//   if (res) {
//     result = "barchasi musbat";
//   } else {
//     result = "masfiy son bor";
//   }
//   if (kattason) {
//     result += ", 100dan katta son bor";
//   }
//   return result;
// }
// console.log(tekshirish(son));

// 5-masala
// let son = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function kvadratgaoshirish(son) {
//   let res = son.map(function (value) {
//     return value ** 2;
//   });
//   return res;
// }
// function chiqarish(son) {
//   let result = son.forEach(function (value) {
//     console.log(value);
//   });
// }
// console.log(kvadratgaoshirish(son));
3, 6, 7, `reduce`;
("o'tmagan edik bu narsani va talabalar baliga");
("qarab ajratoshni domala korib beraman degan edi");

// Yozuvlarga oid.
// 1-masala
// let str = "salom";
// function kattaHarfgaAylantirish(str) {
//   let result = str.toUpperCase();
//   return result;
// }
// console.log(kattaHarfgaAylantirish(str));

// 2 - masala
// let str = "salom";
// function kattaHarfgaAylantirish(str) {
//   let result = str.includes("s");
//   return result;
// }
// console.log(kattaHarfgaAylantirish(str));

// 3-masala
// let str = " men JavaScript o'rganyapman";
// function almashtirish(str) {
//   let result = str.replace("JavaScript", "JS");
//   return result;
// }
// console.log(almashtirish(str));

// 4-masala
// let str = " men JavaScript o'rganyapman";
// function teskariTartibdaQaytarish(str) {
//   let result = str.split("");
//   let res = result.reverse();
//   return res.join("");
// }
// console.log(teskariTartibdaQaytarish(str));

// 5-masala
// let str = " men JavaScript o'rganyapman ";
// function boshJoylarniOlish(str) {
//   let result = str.trimStart().trimEnd();
//   return result;
// }
// console.log(boshJoylarniOlish(str));

// savollarga javoblar

// 1-savol
// var a = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     var c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   inner();
// }
// outer();

// bunda outer functsiya ichida inner nomli yana bir funksiya va a o'zgauvchi
//  glabal scopedagi ozgaruvchi, b esa outer funsiya ichidagi ozgaruvchi"
// c esa inner function ichidagi ozgaruvchi va bizda birinchi chaqirilganda
// galabal scopedan a chaqiriladi va 1 ga tenglanadi song b ozining outer
//scopesi ga kotailadiva 2 ga tenglanadi keyin esa c ham ozining scopesiga
//kotariladi va 3 ga tenglanadi .Console.log yoradmida barchasi ekranga chiqariladi
// barchasi ekranga chiqariladi

// 2-savol
// console.log(x);
// var x = 5;
// console.log(x);
//bu yerda hoisting amalga oshiriladi. birinchi bolib console.logga
//var x kotariladi lekin qiymat berilmadi undefined chiqadi
//keyingi qismda esa hoisting hosdisasi togri ishlaydi
// keyin esa var x = 5 qiymat tayilandi va output 5 ga teng boladi tugadi

// 3-Savol
// console.log(y)
// let y = 10
// console.log(y)
// let x = 5 qatorda qiymat qabul qilindi. Bu qatorda x o'zgaruvchisi let bilan e'lon qilingan,
//shuning uchun hoisting jarayonida yuqori chiqmedi
// Birinchi console.log(x); qatorda x o'zgaruvchisi yuqori chiqmagani sababli, JavaScript xato chiqarmaydi.
// Bu qatorda x ozgaruvchi yuqori chiqmaydi, shuning uchun ReferenceError: Cannot access 'x' before
//initialization xatosi chiqadi.
// let x = 5; qiymat tayinlangandan  keyin, x o'zgaruvchisiga qiymat beriladi.
// Ikkinchi console.log(x); qatorda esa x o'zgaruvchisi 5 qiymatini chiqaradi

// 4-savol
// console.log(z);
// let z = 15;
// console.log(z);
// console.log(z); qatorda z o'zgaruvchisi uchun murojaat qilinadi. Bu qism
// deklaratsiya qilingan paytdan oldin sodir bo'ladigan vaqtincha olik
// zona (TDZ) boladi. z o'zgaruvchisi deklaratsiya qilingan joydan
// oldin foydalanilmasligi kerak.
// let z = 15; qatorda z o'zgaruvchisi deklaratsiya qilinadi va unda 15 qiymati beriladi.
// Ikkinchi console.log(z); qatorda z o'zgaruvchisining qiymati 15 bo'lsa ham,
//   bu qatorda murojaat qilinganda to'g'ri natija chiqadi.

// 5-savol
// const student = {
//   name: "ali",
//   age: 25,
//   course: "coputer sceience",
// };
// for (let key in student) {
//   console.log(key + ":" + student[key]);
// }
// const grade = [90, 23, 4352, 13, 34];
// for (let grad of grade) {
//   console.log(grade);
// }

/* studen nomli obyekt olinibund kalit sozlar 
*berilgan for in orqali student obyekrini aylantirdik va console.log()
 oynasiga chiqardik for in asososan  obyektlar uchun ishlatiladi for of esa 
 massiv va boshqalar uchun ishlatiladi 2 qismida grade nomli massiv elon qildik va massivga qiymatlat berdik
 for of yordamida esa siklni aylantirdik va lekin bu kod hatolik kuzatildi har bir berilgan qiymatlar soniga
  butun boshli massivni qayta yozib chiqdi*/

// 6-savol
console.log("task 1:");
function hoistExample() {
  console.log();
  var a = 20;
  console.log(a);
}
hoistExample();
/*bu yerda task 1 tog'ridan togri oynaga chiqariladi undan keyin esa  hoisExample funcsiyasi ishlaydi
bu yerda tepada korganimizdek birinchi a hoisting bolib tepaga kotariladi va shu yerda hatolik beradi
keyin a ga qiymat tayinandi bundan keyingi console.log(a)qismida esa a ga qiymat berilgani uchun 
oynaga 20 soni chiqadi*/
console.log("task 2:");
function scopeExample() {
  var x = 10;
  if (true) {
    let y = 20;
    const z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
  }
  console.log(x);
  // console.log(y);
  // console.log(z);
}
scopeExample();

/*bu task 2 qisimda task birdagi kasbi task 2 elon qilinb oynaga chiqariladi va scopeExaple()functsiyasi
bunda  scopeExample(); functsiya ichida if shart operatori ochildi(bloc scope) va x o'zgauvchi
//  glabal scopedagi ozgaruvchi, y,z esa scopeExample(); funsiya ichidagi ozgaruvchilardir"
 bizda scopeExample();  chaqirilganda // galabal scopedan x chaqiriladi va 10 ga tenglanadi song 
 y,z ozining outer
//scopesi ga kotailadiva 20,30 ga tenglanadi Console.log yoradmida barchasi ekranga chiqariladi
// lekin pastdagi global scopedagi qisimda chaqirilgan y va z ozgaruvchilar consolga chiqmaydi
 unda hatolik kuzatiladi chunki y va z functsiya ichidagi shrt operatori scopesida joylashgan*/

console.log("task 3 :");
const obj = { name: "john", age: 30 };
for (let propt in obj) {
  console.log(propt + ":" + obj[propt]);
}
const arr = [12, 31, 4];
for (let value of arr) {
  console.log(value);
}
