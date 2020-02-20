// import util from "./util";
// let fn = () => {
//   console.log(1111);
//   util.mahenan();
// }
// fn();
//
// class Index{
//   a = 1;
//   mahenan(){
//     return "asdasdasd"
//   }
// }
//
// let name:string = 'mahenan';
// name = "chenhong";
// console.log(name);

let fn1 = (count:number = 1,name:string = 'default') => {
  console.log(count);
  console.log(name);
}
let fn11 = (count:number = 1,name?:string) => {
  console.log(count);
  console.log(name);
}
let fn111 = (count:number = 1,name = 'default') => {
  console.log(count);
  console.log(name);
}
fn1();
fn1(2);
fn11();
fn11(2);
fn111();
fn111(2);
console.log("---------------------------")
let fn2 = ({count = 'pre default'}:{count?:string} = {count:"default"}) => {
  console.log(count);
};
fn2({count:'value'});
fn2({});
fn2();
console.log("---------------------------")
let fn3 = ({count}:{count:string} = {count:"default"}) => {
  console.log(count);
};
fn3({count:'value'});
// 不可以 如果count设置为必须参数，给count设置默认值也是没用的
// fn3({});
fn3();
console.log("---------------------------")
class Name{
  constructor({name  = "default"} : {name?:string} = {name : "default"}){
    this.mahenan = name;
  }
  private readonly mahenan:string;
  public clickFn(){
    return this.mahenan;
  }
}
let sub = new Name();
console.log(sub);
console.log(sub.clickFn());
let sub2 = new Name({name:"value"});
console.log(sub2);
console.log(sub2.clickFn());
console.log("---------------------------");
interface LabelledValue {
  label: string;
  size?:number
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
let myObj:LabelledValue = {label: "Size 10 Object"};
printLabel(myObj);
console.log("---------------------------");
interface Person {
  readonly name:string,
  readonly age:number
}
let person1:Person = {name:"mahenan",age:18};
// unable
// person1.name = "chenhong";
console.log(person1.name);
console.log(person1.age);
console.log("---------------------------");
let arr: number[] = [1, 2, 3, 4];
let arrReadOnly:ReadonlyArray<number> = [1,2,3,4,5,6,7];
arr.push(1);
// unable
// arrReadOnly.push(1);
console.log(arr);
console.log(arrReadOnly);
console.log("---------------------------");
let dataList:any = [1,2,3,4,5,'1111',{name:1}];
console.log(dataList);
interface Animal {
  name:string,
  age?:number
}
let list:Animal[] = [{name:"mahenan"},{name:"chenhong"}];
console.log(list);

console.log("---------------------------");
interface Myobject{
  name:string,
  age?:number
}
let obj:Myobject = {
  name:"1111"
};
obj.age = 1;
console.log(obj);
console.log("---------------------------");
