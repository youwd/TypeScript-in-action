interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}

// 交叉引用类型，取所有接口的并集
let pet: DogInterface & CatInterface = {
    run() { },
    jump() { }
}

// 联合引用类型
let a1: string | number = 1;
let a2: 1 | 2 | 3 = 3;

class DogAdvanceClass implements DogInterface {
    run() { }
    eat() { }
}
class CatAdvanceClass implements CatInterface {
    jump() { }
    eat() { }
}
enum Master {
    boy,
    girl
}
function getPet(master: Master) {
    let pet = master === Master.boy ? new DogAdvanceClass() : new CatAdvanceClass();
    pet.eat();  // 联合类型  只能访问共有方法

    let pet1;
    if (master === Master.boy) {
        pet1 = new DogAdvanceClass();
        pet1.run();
    }
    return pet;
}
console.log(111);

// 索引类型
let ad1 = {
    a: 1,
    b: 2,
    c: 3
}
function getValue(obj: any, keys: string[]) {
    return keys.map(key => obj[key]);
}
function getValueT<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}
console.log(getValue(ad1, ["a", "b", "q"]));
// console.log(getValueT(ad1, ["a", "b", "q"]));  // 会报错

// 映射类型
interface Obj2 {
    a: string,
    b: number,
    c: boolean
}
type ReadonlyObj = Readonly<Obj2>;
type PickObj = Pick<Obj2, "a" | "b">;
type RecordObj = Record<'a' | 'b', Obj2>

// 条件类型
