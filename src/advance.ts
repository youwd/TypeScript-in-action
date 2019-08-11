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
function getPet(master:Master){
    let pet = master===Master.boy?new DogAdvanceClass(): new CatAdvanceClass();
    pet.eat();  // 联合类型  只能访问共有方法

    let pet1;
    if(master===Master.boy){
        pet1 = new DogAdvanceClass();
        pet1.run();
    }
    return pet;
}
console.log(111);

// 联合应用类型 类型保护区块