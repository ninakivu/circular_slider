// const svg = document.querySelector('svg')
const btn = document.querySelector('button')
const body = document.querySelector('body')
const container = document.getElementById('container')
console.log(container)
// const dial = document.getElementsByClassName('dial')

// document.getElementById("body").addEventListener("click", function(e) {
//   console.log(e.clientX, e.clientY)
//   const x = e.clientX + "px"
//   const y = e.clientY + "px"
//   dial[0].style.transform = `translate(${x},${y})`
// });




class CircularSlider {
	constructor(options) {
    this.mouseDown = true
    this.sliderContainer = sliderContainer()
    this.svg = svg(options)
    this.progressMeter = progressMeter(options)
    this.progressValue = progressValue(options)
    this.dial = dial()
    this.input = input(options)
  }

  appendNode() {
    console.log(body)
    this.svg.appendChild(this.progressMeter);
    this.svg.appendChild(this.progressValue)
    this.sliderContainer.appendChild(this.svg)
    container.appendChild(this.sliderContainer)
  }
 


}



function svg (options) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "progress");
  svg.setAttribute("width", options.radius * 2);
  svg.setAttribute("height", options.radius * 2);
  svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
  svg.setAttribute(
    "viewBox",
    `0 0 ${options.radius * 2} ${options.radius * 2}`
  );
  return svg;
}

function progressMeter(options) {
  var progressMeter = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  progressMeter.setAttribute("class", "progress__meter");
  progressMeter.setAttribute("cx", options.radius);
  progressMeter.setAttribute("cy", options.radius);
  progressMeter.setAttribute("r", options.radius - 6);
  progressMeter.setAttribute("stroke-width", 12);
  return progressMeter
}

function progressValue(options) {
  var progressValue = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  progressValue.setAttribute("class", "progress__value");
  progressValue.setAttribute("cx", options.radius);
  progressValue.setAttribute("cy", options.radius);
  progressValue.setAttribute("r", options.radius - 6);
  progressValue.setAttribute("stroke-width", 12);
  progressValue.style.stroke = options.color;
  return progressValue
}

function dial () {
  var dial = document.createElement('div');
  dial.setAttribute('class', 'dial');
  return dial
}

function input(options) {
  var input = document.createElement("input");
  input.setAttribute("type", "range");
  input.setAttribute("id", "control");
  input.setAttribute("name", "points");
  input.setAttribute("min", options.range[0]);
  input.setAttribute("max", options.range[1]);
  input.setAttribute("step", options.step);
  input.setAttribute("value", "0");
  // input.addEventListener("input", function(event) {
  //   this.progress(event.target.valueAsNumber);
  // });
  return input
}

function sliderContainer () {
  var sliderContainer = document.createElement("div");
  sliderContainer.setAttribute("class", "sliderContainer");
  return sliderContainer
}




const circleNode = new CircularSlider({
  color: "red",
  range: [0, 100],
  radius : 30
})
console.log(circleNode.appendNode())
const circleNode2 = new CircularSlider({
  color: "red",
  range: [0, 300],
  radius : 60
})
console.log(circleNode2.appendNode())
const circleNode3 = new CircularSlider({
  color: "red",
  range: [0, 600],
  radius : 90
})
console.log(circleNode3.appendNode())