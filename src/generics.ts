// 泛型 T
function log<T>(value: T): T {
    console.log(value);
    return value;
}

log("1");
log([1, 2, 3]);


// 泛型类
class A<T>{
    run(value: T) {
        console.log(value);
        return value;
    }
}
let log1 = new A<number>();
log1.run(1);