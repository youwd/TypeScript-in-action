class Dog {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    run() {
        console.log("it can run!");
    }
    private pri() { };
    protected pro() { };
    static food: string = "food";
}
let dog = new Dog("tom");  // 创建类的事例
console.log(dog.name);
dog.run();
// dog.pro();
Dog.food;

// 类的继承
class Husky extends Dog {
    constructor(name: string, color: string) {
        super(name)
        this.color = color;
        this.pro();
        // this.food
    }
    color: string;

}
Husky.food;

// 类的修饰符
// public 默认都是public
// private 只能在本类调用，不能在其它包括子类调用
// protected   受保护类，只能在类和子类调用 不能被实例化只能被继承
// static 类的静态成员  不能被实例化调用


// 抽象类   只能被继承 不能被实例化
abstract class Animal {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() {
        console.log("eat");
    }

    abstract sleep(): void;  // 抽象方法，可以实现多态
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    sleep() {
        console.log(`cat ${this.name} sleep`);
    }
}

class Pig extends Animal {
    constructor(name: string) {
        super(name);
    }
    sleep() {
        console.log(`pig ${this.name} sleep`);
    }
}
let cat = new Cat("tom");
let pig = new Cat("pig");
const animals: Animal[] = [cat, pig];
animals.forEach(i => i.sleep());


// 类实现接口
interface eat {
    name: string;
    eat(): void;
}
class birder implements eat {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() {}
}