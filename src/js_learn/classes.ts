
class MyClass {
    constructor(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    printMessages() {
        console.log("__call class method__")
        console.log("Hello " + this.name + ". ");
        console.log("Today is " + this.weather + ".");
    }
}
export { MyClass }