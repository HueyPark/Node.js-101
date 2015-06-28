var MyClass = function(){
    this.name = 'MyClass';
};

var variable = 1;
variable = 'text';
variable = new MyClass();
console.log(typeof(variable) + ': ' + variable.name);