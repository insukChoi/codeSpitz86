
const Worker = class{
    run(){
        console.log("working");
    }
    print(){
        this.run();
    }
};

const HardWorker = class extends Worker{
    run() {
        console.log("hardWorking");
    }
};

const Manager = class{
    #workers;
    constructor(...workers) {
        if (workers.every(w=>w instanceof Worker)) this.#workers = workers;
        else throw "invalid workers";
    }
    doWork(){
        this.#workers.forEach(w=>w.run())
    }
};

const manager = new Manager(new Worker(), new HardWorker());
manager.doWork();