// 原始类型
let a: boolean = true;
let num: number = 123;
// num = "123"

// 数组
let arr: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, "2"];

// object
let obj1 = { x: 1, y: 2 };
obj1.x = 2;

// symbol
let i: symbol = Symbol();


// 枚举类型
enum Role {
    GUESS,
    REPORT,
}
enum G {a,b}
enum E {a = 1,b = 2}

console.log(Role.GUESS);