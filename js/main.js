const btn = document.querySelector('button')
const body = document.querySelector('body')
const container = document.getElementById('container')
console.log(container)

// document.getElementById("body").addEventListener("click", function(e) {
//   console.log(e.clientX, e.clientY)
//   const x = e.clientX + "px"
//   const y = e.clientY + "px"
//   dial[0].style.transform = `translate(${x},${y})`
// });

class CircularSlider {
	constructor(options) {
    this.circumference = 2 * Math.PI * (options.radius - 6)
    this.numberOfCircles = document.getElementsByTagName('circle').length
    this.range = options.range
    this.radius = options.radius
    this.mouseDown = true
    this.sliderContainer = sliderContainer()
    this.svg = svg(options)
    this.progressMeter = progressMeter(options)
    this.progressValue = progressValue(options)
    this.dial = dial()
    this.input = input(options)
  }

  appendNode() {
    var xx = Math.ceil((this.radius - 5) * Math.sin(1 * Math.PI / 180)) + this.radius + "px";
    var yy = Math.ceil((this.radius - 5) * -Math.cos(1 * Math.PI / 180)) + this.radius + "px";
    this.dial.style.transform = "translate(" + xx + "," + yy + ")";
    console.log(body)
    this.svg.appendChild(this.progressMeter);
    this.svg.appendChild(this.progressValue)
    this.sliderContainer.appendChild(this.svg)
    this.sliderContainer.appendChild(this.dial)
    this.sliderContainer.appendChild(this.input)
    this.sliderContainer.style = `z-index: ${200 - this.numberOfCircles};`
    this.progressValue.style.strokeDasharray = this.circumference
    this.progressMeter.addEventListener("click", this.move.bind(this))
    this.progressValue.addEventListener("click", this.move.bind(this))
    container.appendChild(this.sliderContainer)
    this.progressValue.style.strokeDasharray = this.circumference;
    this.progress(this.input.value)
  }

  progress(value) {
    var progress = value / this.range[1];
    var dashoffset = this.circumference * (1 - progress);
    this.progressValue.style.strokeDashoffset = dashoffset;
  };

  move(e) {
    this.update(e)
  }

  update(e) {
    // this.sliderContainer.style = "z-index: 20"
    let position = { x: e.pageX, y: e.pageY }
    var dialRadius = this.dial.offsetWidth / 2;
    var coords = {
      x: position.x - this.sliderContainer.offsetLeft,
      y: position.y - this.sliderContainer.offsetTop
    };
    var atan = Math.atan2(coords.x - this.radius, coords.y - this.radius);
    var deg = Math.ceil(-atan / (Math.PI / 180) + 180);

    var x = Math.ceil((this.radius - 5) * Math.sin(deg * Math.PI / 180)) + this.radius + "px";
    var y = Math.ceil((this.radius - 5) * -Math.cos(deg * Math.PI / 180)) + this.radius + "px";
    var points = Math.ceil(deg * this.range[1] / 360);
    this.dial.style.transform = "translate(" + x + "," + y + ")";
    // console.log(position)
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

function dial() {
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
  color: "#ff3d70",
  range: [0, 100],
  radius : 40
})
console.log(circleNode.appendNode())

const circleNode2 = new CircularSlider({
  color: "3333ff",
  range: [0, 300],
  radius : 80
})
console.log(circleNode2.appendNode())

const circleNode3 = new CircularSlider({
  color: "4a4a4a",
  range: [0, 600],
  radius : 120
})
console.log(circleNode3.appendNode())

const circleNode4 = new CircularSlider({
  color: "4fdee5",
  range: [0, 600],
  radius : 160
})
console.log(circleNode4.appendNode())

const circleNode5 = new CircularSlider({
  color: "a039cf",
  range: [0, 600],
  radius : 200
})
console.log(circleNode5.appendNode())