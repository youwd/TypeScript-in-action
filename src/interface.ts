// 对象类型接口
interface List {
    readonly id: string, // 只读属性
    name: string,
    age?: number,   // 可选属性
    [x: string]: any  // 字符串索引签名
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(item => {
        console.log(item.id, item.name);
    })
}

let result = {
    data: [
        {
            id: "211",
            name: '13213'
        }
    ]
}

render(result);


// 函数类型接口
let add: (x: number, y: number) => number;  // 变量类型接口   === 等价于下面的函数类型接口 === 也等价于类型别名
interface Add {
    (x: number, y: number): number
}
type Add2 = (x: number, y: number) => number;    // 类型别名定义
// 具体实现
let add2: Add2 = (a, b) => a + b;


// 混合类型接口，既有变量也有函数的接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}
function getLib() {
    let lib: Lib = (() => { console.log(3) }) as Lib;
    lib.version = "1.0";
    lib.doSomething = () => { console.log(2) };
    return lib;
}
let lib1 = getLib();
lib1();
lib1.version;
lib1.doSomething();


// 函数
// ? 代表可选参数，可选参数必须在必选参数之后
function add3(x: number, y?: number, z = 2) {
    return y ? x + y : x;
}
add3(2);

// 剩余参数 ...args数组
function add4(x: number, y = 2, ...args: number[]) {
    return x + y + args.reduce((pre, cur) => pre + cur);
}
console.log(add4(1, 5, 4, 5, 6, 7, 8));

// 函数重载
function add6(...args: string[]): string; //重载列表
function add6(...args: number[]): number; //重载列表
function add6(...args: any[]): any {
    let first = args[0];
    if (typeof first === "string") {
        return args.join("");
    }
    if (typeof first === "number") {
        return args.reduce((pre, cur) => pre + cur);
    }
}
console.log(add6(1,2,3,4,5));
console.log(add6("3","4","5"));
