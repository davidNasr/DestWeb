//functions
function getParametersFromUrl() {
    const params = new URLSearchParams(window.location.search);
    
    // Check if the parameters exist in the URL
    if (!params.has('dest') || !params.has('button')) {
        console.error('Parameters not found in the URL.');
        return null; // or handle the error appropriately
    }

    const dest = params.get('dest');
    const button = params.get('button');
    return { dest, button };
}
//-----------------------------------

// Get the button parameter from the URL
const { dest, button } = getParametersFromUrl();
const buttonPressed = button;

var hotelName = buttonPressed.replace(/_/g, ' ');

const mainH1 = document.getElementById("main-name");
mainH1.innerHTML = hotelName;

//populate images
const filePath = "images/"+dest+"_Hotels/" + hotelName + "/Photos";
var imgCount;

switch(hotelName){
    case "Golden Plaza": imgCount=72; break;
    case "Sea Horse": imgCount=16; break;
    case "Wahet Siwa": imgCount=17; break;
    case "Siwa Palace": imgCount=10; break;
}

for (let i = 1; i <= imgCount; i++) {
    let divID = "div" + String(i);
    let colID = "col" + String(i);

    //col div
    const div1 = document.createElement('div');
    div1.classList.add('col');
    div1.setAttribute("id", colID);
    document.getElementById("main-row").appendChild(div1);

    //inner card div (with the image)
    const div2 = document.createElement('div');
    div2.classList.add('card', 'shadow-sm');
    div2.setAttribute("id", divID);
    document.getElementById(colID).appendChild(div2);

    //add the image
    const newImage = document.createElement('img');
    document.getElementById(divID).appendChild(newImage);
    newImage.src = filePath + "/img" + String(i) + ".jpg";
}
