console.log("Ahoy!");

let cardFooterNodes = document.querySelectorAll(".card-footer");
let cardFooter = [...cardFooterNodes];
let svgNew = [];

// Make an object containing the common properties to the footer SVGs
const svgAttributes = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "version": "1.1",
  "width": "24",
  "height": "24",
  "viewbox": "0 0 24 24",
};

// create an svg and add the comoon attributes
for (let index = 0; index < 3; index++) {
  svgNew[index] = document.createElement("svg");
  Object.keys(svgAttributes).forEach(attribute => {
    svgNew[index].setAttribute(attribute, svgAttributes[attribute]);
  });
};

console.log(svgNew);

let pathNew = [];
for (let index = 0; index < 3; index++) {
  pathNew[index] = document.createElement("path");
};

pathNew[0].setAttribute("d", "M3 18.34C3 18.34 4 7.09 7 3L12 4L11 7.09H9V14.25H10C12 11.18 16.14 10.06 18.64 11.18C21.94 12.71 21.64 17.32 18.64 19.36C16.24 21 9 22.43 3 18.34Z");

pathNew[1].setAttribute("d", "M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z");

pathNew[2].setAttribute("d", "M11 8C11 10.21 9.21 12 7 12C4.79 12 3 10.21 3 8C3 5.79 4.79 4 7 4C9.21 4 11 5.79 11 8M11 14.72V20H0V18C0 15.79 3.13 14 7 14C8.5 14 9.87 14.27 11 14.72M24 20H13V3H24V20M16 11.5C16 10.12 17.12 9 18.5 9C19.88 9 21 10.12 21 11.5C21 12.88 19.88 14 18.5 14C17.12 14 16 12.88 16 11.5M22 7C20.9 7 20 6.11 20 5H17C17 6.11 16.11 7 15 7V16C16.11 16 17 16.9 17 18H20C20 16.9 20.9 16 22 16V7Z");

console.log(pathNew)

for (let index = 0; index < 3; index++) {
  svgNew[index].appendChild(pathNew[index]);
};

console.log(svgNew);

for (let index = 0; index < cardFooter.length; index++) {
  for (let j = 0; j < 3; j++) {
    cardFooter[index].appendChild(svgNew[j]);
  }
};

console.log(cardFooter);