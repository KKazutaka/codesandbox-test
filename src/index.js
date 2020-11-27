// const val4 = {
//   name: " aa",
//   age: 28
// };
// val4.name = "dsfa";
// val4.addres = 'fa'
// console.log(val4);

// const val5 = ['dog','cat'];
// val5[0]= ['bird']
// val5.push("monkey")
// console.log(val5);

// const name = "じゃけえ";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は、${age}です`;
// console.log(message2);

// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// const func2 = (str) => str;
// console.log(func2("func2じゃけえ"));

// const func3 = (num1,num2) =>{
//   return num1 + num2;
// }
// console.log(func3(10,22));

// 分割代入
// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };
// const aaa = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(aaa);

// ↓の書き方を分割代入といいます
// const { name, age } = myProfile;
// const aaaa = `名前は${name}です。年齢は${age}歳ですaa`;
// console.log(aaaa);

// 配列の分割代入です
// const myProfile = ["jak", 30];
// const message = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message)

// const [name, age]= myProfile
// const message2 = `名前は${name}です。年齢は${age}`;
// console.log(message2)

// デフォルト値、引数など
// const sayHello = (name = "guest") => console.log(`こんにちは${name}さん`);
// sayHello('main chara');

// スプレッド構文 .を３つかく。
// 配列の展開。下の6行
// const arr1 = [1, 2, 3, 4, 5, 6];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる 。、下の5行数
// const arr2 = [1, 2, 3, 5, 6];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4]
// console.log(arr6)

// const arr7= [...arr4, ...arr5]
// console.log(arr7)
// ＊参照は引き継がれない

// map,filter
const nameArr = ["nakata", "yamada", "wai", "じゃけえ"];
//　before
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index+1}番目は,${nameArr[index]}です`);
// }

// into arg using map part1
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// into arg using map part2
// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// nameArr.map((name,index) => console.log(`${index + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子。ある条件？ true : false

// ex1
// const num = 1300;
// console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "input number";
// console.log(formattedNum);

// ex2
// const checkSum = (num1,num2) =>{
//   return num1 + num2 > 100 ? 'over 100':'available';
// }
// console.log(checkSum(40,10));

// 論理演算子
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log("1 or 2 is true")
// }
// if (flag1 && flag2){
//   console.log('1 and 2 are true')
// }

// 　　||は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

//   &&は、左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
