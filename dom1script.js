let fName = document.getElementsByClassName('fName')[0];
let lName = document.getElementsByClassName('lName')[0];
let p1 = document.getElementsByClassName('p1')[0];

lName.onchange = nameChange;
fName.onchange = nameChange;

function nameChange(e) {
    if (fName.value && lName.value) {
    p1.innerHTML = `Salams ${document.getElementsByClassName('fName')[0].value} ${document.getElementsByClassName('lName')[0].value}! Thank you for joining us.`;
} else {
    p1.innerHTML = '';
}
}

function removeCar () {
    document.getElementById("hola").style.color = "blue";
    let uncar = document.getElementById(`${addCount}`);
    uncar.remove();
    addCount--;
}


let addCount = 0;


let end = document.getElementById('end');
function addCar () {
    addCount++;
    let currentCount = addCount;
    let carNumber = document.createElement("div");
    let carAdd = document.createAttribute("id");
    carAdd.value=`${addCount}`;
    carNumber.setAttributeNode(carAdd);
    document.getElementById("hola").style.color = "red";
    let vehicle = document.createAttribute("class")
    vehicle.value="vehicle"
    let car = document.createElement("h2")
    let newtest = document.createTextNode(`What color of vehicle would you prefer for vehicle ${addCount}`);
    car.appendChild(newtest);
    car.setAttributeNode(vehicle);
    carNumber.appendChild(car);
    
    let dive2 = document.createElement("div");
    car.appendChild(dive2);
    let colorButtons = document.createAttribute("class")
    colorButtons.value="colorButtons";
    dive2.setAttributeNode(colorButtons);
    let green = document.createElement("BUTTON");
    green.innerHTML="green";
    green.onclick = green1;

    function green1() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "green";
    }

    let grey = document.createElement("BUTTON");
    grey.innerHTML="grey";
    grey.onclick = grey1;

    function grey1 () {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "grey";
    }

    let yellow = document.createElement("BUTTON");
    yellow.innerHTML="yellow";
    yellow.onclick = yellow1;

    function yellow1(){
        document.getElementById(`car${currentCount}`).style.backgroundColor = "yellow";
    }

    let brown = document.createElement("BUTTON");
    brown.innerHTML="brown";
    brown.onclick = brown1;

    function brown1 () {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "brown";
    }

    dive2.appendChild(green);
    dive2.appendChild(grey);
    dive2.appendChild(yellow);
    dive2.appendChild(brown);
    
    let size = document.createElement("h2")
    let sizetext = document.createTextNode("What is the size of the car?");
    size.appendChild(sizetext);
    car.appendChild(size);

    let dive3 = document.createElement("div");
    car.appendChild(dive3);
    let sizeVehicle = document.createAttribute("class")
    sizeVehicle.value="sizeVehicle";
    dive3.setAttributeNode(sizeVehicle);
    let dive3l = document.createElement("p");
    let ltext = document.createTextNode("Length");
    let length = document.createElement("INPUT");
    length.setAttribute("type", "text");
    let l1 = document.createAttribute("class")
    l1.value=`l1${currentCount}`;
    length.setAttributeNode(l1);
    length.onchange = lChange;

    function lChange(e) {
        document.getElementById(`car${currentCount}`).style.height = `${document.getElementsByClassName(`l1${currentCount}`)[0].value}px`;
    }    

    dive3l.appendChild(ltext);
    dive3l.appendChild(length);
    dive3.appendChild(dive3l);
    let dive3w = document.createElement("p");
    let wtext = document.createTextNode("Width");
    let width = document.createElement("INPUT");
    width.setAttribute("type", "text", "w1");
    let w1 = document.createAttribute("class")
    w1.value=`w1${currentCount}`;
    width.setAttributeNode(w1);
    width.onchange = wChange;

    function wChange(e) {
        document.getElementById(`car${currentCount}`).style.width = `${document.getElementsByClassName(`w1${currentCount}`)[0].value}px`;
    }

    dive3w.appendChild(wtext);
    dive3w.appendChild(width);
    dive3.appendChild(dive3w);

    let dive4 = document.createElement("div");
    let dive4text = document.createTextNode("Car size & color");
    dive4.appendChild(dive4text);
    car.appendChild(dive4);
    let vehicleSize = document.createAttribute("class")
    vehicleSize.value="vehicleSize";
    dive4.setAttributeNode(vehicleSize);
    dive4.setAttribute("id", `car${currentCount}`);
    

/*  */

    
    end.appendChild(carNumber);
}













