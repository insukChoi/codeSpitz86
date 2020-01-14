
const EssentialObject = class {
  #name = "";
  #screen = null;
  constructor(name) {
    this.#name = name;
  }
  camouflage(){
      this.#screen = (Math.random() * 10).toString(16).replace(".", "")
  }
  get name(){
      return this.#screen || this.#name;
  }
};

const obj1 = new EssentialObject("indi");
console.log(obj1.name);

/******  Object essentials  ******/
/*
    - Encapsulation of Functionality
    - Maintenance of State

    => Isolation of change (변화에 의한 격리)
 */