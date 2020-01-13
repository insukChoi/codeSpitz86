const a = {
    a:3,
    b:5
};

const b = {
    a:3,
    b:5
};

console.log(a === b); // false
console.log(JSON.stringify(a) === JSON.stringify(b)); // true


/******  Polymorphism  ******/
const Worker = class{
    run(){
        console.log("working")
    }
    print(){
        this.run();
    }
};

const HardWorker = class extends Worker{
    run() {
        console.log("hardWorking")
    }
};

const worker = new HardWorker();
console.log(worker instanceof Worker); // 대체가능성 -> 확장된 클래스는 대상 클래스를 대체할 수 있다.
worker.print(); // working (or) hardWorking ? hardWorking 이유는; this 는 원래 태어날때의 본질을 유지한다. (내적일관성)

/*
Substitution & Internal identity
확장된 객체는 원본으로 대체 가능
생성 시점의 타입이 내부에 일관성 있게 참조됨.

즉!!! Polymorphism 는 대체가능성 + 내적일관성 이다.
*/


