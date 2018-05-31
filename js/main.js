class CircularSlider {
	constructor(options) {
    this.mouseDown = false
    this.circumference = 2 * Math.PI * (options.radius - 6)
    this.numberOfCircles = document.getElementsByTagName('circle').length
    this.range = options.range
    this.radius = options.radius
    this.sliderContainer = sliderContainer()
    this.svg = svg(options)
    this.progressMeter = progressMeter(options)
    this.progressValue = progressValue(options, this.circumference)
    this.dial = dial(options)
    this.input = input(options)
    this.pricing = pricing(options)
  }

  appendNode() {
    this.svg.appendChild(this.progressMeter)
    this.svg.appendChild(this.progressValue)
    this.sliderContainer.appendChild(this.svg)
    this.sliderContainer.appendChild(this.dial)
    this.sliderContainer.appendChild(this.input)
    this.sliderContainer.style = `z-index: ${200 - this.numberOfCircles};`
    container.appendChild(this.sliderContainer)
    this.addEventListeners()
  }

  addEventListeners() {
    this.dial.addEventListener("mousedown", () => this.mouseDown = true)
    this.sliderContainer.addEventListener("mousemove", this.move.bind(this)) 
    document.addEventListener("mouseup", () => this.mouseDown = false)
    this.progress(this.input.value)
  }

  progress(value) {
    const progress = value / this.range[1];
    const dashoffset = this.circumference * (1 - progress);
    this.progressValue.style.strokeDashoffset = dashoffset;
  };

  move (e) {
    if(e.type !== 'click') {
      if (!this.mouseDown || this.range[1] === 0) return;
      this.update(e);
    } else {
      this.update(e);
    }
  }

  update (e) {
    const position = { x: e.pageX, y: e.pageY }
    const dialRadius = this.dial.offsetWidth / 2;
    const coords = {
      x: position.x - this.sliderContainer.offsetLeft,
      y: position.y - this.sliderContainer.offsetTop
    };
    const atan = Math.atan2(coords.x - this.radius, coords.y - this.radius);
    const deg = Math.ceil(-atan / (Math.PI / 180) + 180);
    const x = Math.ceil((this.radius - 5) * Math.sin(deg * Math.PI / 180)) + this.radius + "px";
    const y = Math.ceil((this.radius - 5) * - Math.cos(deg * Math.PI / 180)) + this.radius + "px";
    const points = Math.ceil(deg * this.range[1] / 360);
    this.dial.style.transform = `translate(${x},${y})`
    this.pricing.textContent = "$" + points;
    this.progress(points);
  }
}

function svg (options) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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

function pricing(options) {
  const pricing = document.createElement("span");
  pricing.setAttribute('class', 'pricing');
  pricing.textContent = "$" + options.range[0]

  const box = document.createElement("span");
  box.setAttribute('class', 'box');
  box.setAttribute("style", "background-color: " + options.color);

  const text = document.createElement("span");
  text.setAttribute('class', 'text');
  text.textContent = options.text;

  const div = document.createElement("div");
  div.setAttribute('class', 'textContainer');

  div.appendChild(pricing);
  div.appendChild(box);
  div.appendChild(text);

  document.querySelector('.price').appendChild(div)

  return pricing
}

function progressMeter(options) {
  const progressMeter = document.createElementNS(
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

function progressValue(options, circumference) {
  const progressValue = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  progressValue.setAttribute("class", "progress__value");
  progressValue.setAttribute("cx", options.radius);
  progressValue.setAttribute("cy", options.radius);
  progressValue.setAttribute("r", options.radius - 6);
  progressValue.setAttribute("stroke-width", 12);
  progressValue.style.stroke = options.color;
  progressValue.style.strokeDasharray = circumference
  return progressValue
}

function dial (options) {
  const xx = Math.ceil((options.radius - 5) * Math.sin(1 * Math.PI / 180)) + options.radius + "px"
  const yy = Math.ceil((options.radius - 5) * -Math.cos(1 * Math.PI / 180)) + options.radius + "px"
  const dial = document.createElement('div');
  dial.setAttribute('class', 'dial');
  dial.style.transform = `translate(${xx},${yy})`;
  return dial
}

function input(options) {
  const input = document.createElement("input");
  input.setAttribute("type", "range");
  input.setAttribute("id", "control");
  input.setAttribute("name", "points");
  input.setAttribute("min", options.range[0]);
  input.setAttribute("max", options.range[1]);
  input.setAttribute("step", options.step);
  input.setAttribute("value", "0");
  return input
}

function sliderContainer () {
  const sliderContainer = document.createElement("div");
  sliderContainer.setAttribute("class", "sliderContainer");
  return sliderContainer
}


const circleNode = new CircularSlider({
  color: "#ff3d70",
  range: [0, 100],
  radius : 40,
  step: 1,
  text: "Transportation"
})
circleNode.appendNode()

const circleNode2 = new CircularSlider({
  color: "#3333ff",
  range: [0, 300],
  radius : 80,
  step: 1,
  text: "Food"  
})
circleNode2.appendNode()

const circleNode3 = new CircularSlider({
  color: "#4a4a4a",
  range: [0, 600],
  radius : 120,
  step: 1,
  text: "Insurance"  
})
circleNode3.appendNode()

const circleNode4 = new CircularSlider({
  color: "#4fdee5",
  range: [0, 900],
  radius : 160,
  step: 1,
  text: "Entertainment"
})
circleNode4.appendNode()

const circleNode5 = new CircularSlider({
  color: "#a039cf",
  range: [0, 1200],
  radius : 200,
  step: 1,
  text: "Health care"  
})
circleNode5.appendNode()