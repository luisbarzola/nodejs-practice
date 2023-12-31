class Target {
  request() {
    return 'Target: The default target\'s behavior.'
  }
}

class Adaptee {
  specialRequest() {
    return '.eetpadA eht fo roivaheb laicepS'
  }
}

class Adapter extends Target {
  adaptee;
  constructor(adaptee) {
    super()
    this.adaptee = adaptee
  }
  reset() {
    return `Adapter: (TRANSLATED) ${this.adaptee.specialRequest().split('').reverse().join('')}`; 
  }
  request() {
    return this.reset()
  }
}

function clientCode(target) {
  console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specialRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);