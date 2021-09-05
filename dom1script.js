let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
lName.onchange = nameChange;
fName.onchange = nameChange;
function nameChange() {
    if (fName.value && lName.value) {
        document.getElementById('salamText').innerHTML = `Salams ${document.getElementById('fName').value} ${document.getElementById('lName').value}! Thank you for joining us.`;
    }
}
function removeCar() {
    document.getElementById(`${carCount}`).remove();
    carCount--;
}
//Counter to get the right # of vehicle for each card. 'end' div to append car cards to when they are added. this div is at the end of html code
let carCount = 0;
let end = document.getElementById('end');
function addCar() {
    carCount++;
    let currentCount = carCount; //makes sure the colour and size changes only apply to the current car box
    let car = document.createElement("div");
    car.setAttribute('id', `${carCount}`);
    car.setAttribute('class', 'vehicle');
    end.appendChild(car); //creates car div that appends to existing end div in html
    let h2Text = document.createElement("h2")
    h2Text.innerHTML = `What color of vehicle would you prefer for vehicle ${carCount}?`;
    car.appendChild(h2Text); //adds header and appends to original div
    let div2 = document.createElement("div");
    car.appendChild(div2);
    div2.setAttribute('class', 'colorButtons'); //creates another div for color buttons
    let green = document.createElement("BUTTON");
    green.innerHTML = "green";
    green.onclick = changeGreen;
    function changeGreen() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "green";
    } //creates button and function for green
    let grey = document.createElement("BUTTON");
    grey.innerHTML = "grey";
    grey.onclick = changeGrey;
    function changeGrey() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "grey";
    } //creates button and function for grey
    let yellow = document.createElement("BUTTON");
    yellow.innerHTML = "yellow";
    yellow.onclick = changeYellow;
    function changeYellow() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "yellow";
    } //creates button and function for yellow
    let brown = document.createElement("BUTTON");
    brown.innerHTML = "brown";
    brown.onclick = changeBrown;
    function changeBrown() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "brown";
    } //creates button and function for brown
    div2.appendChild(green);
    div2.appendChild(grey);
    div2.appendChild(yellow);
    div2.appendChild(brown); //appends all colours to the colour div
    let size = document.createElement("h2")
    size.innerHTML = "What is the size of the car?";
    car.appendChild(size); //creates header
    let div3 = document.createElement("div");
    div3.setAttribute("class", "sizeVehicle");
    car.appendChild(div3); //creates div for size of cars
    let lText = document.createElement("p");
    lText.innerHTML = "Length";
    let length = document.createElement("INPUT");
    length.setAttribute("type", "text");
    length.setAttribute("placeholder", "Length");
    length.setAttribute('id', `length${currentCount}`);;
    length.onchange = lChange;
    function lChange() {
        document.getElementById(`car${currentCount}`).style.height = `${document.getElementById(`length${currentCount}`).value}px`;
    }
    lText.appendChild(length);
    div3.appendChild(lText); //creates length input and function
    let wText = document.createElement("p");
    wText.innerHTML = "Width";
    let width = document.createElement("INPUT");
    width.setAttribute("type", "text");
    width.setAttribute("placeholder", "width");
    width.setAttribute('id', `width${currentCount}`);
    width.onchange = wChange;
    function wChange() {
        document.getElementById(`car${currentCount}`).style.width = `${document.getElementById(`width${currentCount}`).value}px`;
    }
    wText.appendChild(width);
    div3.appendChild(wText); //creates width input and function
    let div4 = document.createElement("div");
    div4.innerHTML = "Car size & color";
    div4.setAttribute('class', 'vehicleSize');
    div4.setAttribute("id", `car${currentCount}`);
    car.appendChild(div4); //creates last div for the car box that will change colour and size
}
