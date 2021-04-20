class Battery {
    constructor(energy) {
        this.energy = energy
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

class Flashlamp {
    constructor() {
    }

    setBattery(battery) {
        this.battery = battery
    }

    getBattery() {
        return this.battery.getEnergy();
    }

    light() {
        if (this.status) {
            this.battery.energy--
            alert("Lighting")
        } else {
            alert("Not lighting")
        }
    }

    turnOn(){
        this.status = true;
    };

    turnOff(){
        this.status = false;
    }

}

let battery = new Battery();
battery.setEnergy(10);

let flashlamp = new Flashlamp();
flashlamp.setBattery(battery);

document.write("Battery info: "+ flashlamp.getBattery()+"</br>")
flashlamp.light();

document.write("Turn on<br/>")
flashlamp.turnOn();
flashlamp.light();
document.write("Battery info:"+ flashlamp.getBattery()+"<br/>")

document.write("Turn off<br/>")
flashlamp.turnOff();
flashlamp.light();
