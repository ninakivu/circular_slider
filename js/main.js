const svg = document.querySelector('svg')
const body = document.querySelector('body')
const dial = document.querySelector('dial')

document.getElementById("body").addEventListener("click", function(e) {
  console.log(e.clientX, e.clientY)
})
const transport = new CircularSlider({
  color: "green",
  range: [0, 100],
  step: 1
})

const food = new CircularSlider({
  color: "red",
  range: [0, 5000],
  step: 1
})
class CircularSlider {
  constructor(options) {
    this.numberOfCircles = document.querySelectorAll('circle').length
    this.circle = document.createElementNS(
      "http://www.w3.org/2000/svg", 
      "circle" 
    );
    this.color = options.color
    this.range = options.range
    this.circle.setAttribute("cx", "50%")
    this.circle.setAttribute("cy", "50%")
    this.circle.setAttribute("r", (5 * this.numberOfCircles))
    this.circle.setAttribute("style", "stroke:#ccc; fill:none")
    this.circle.setAttribute("class", "slider")
    
    this.mouseDown = true
  }
  move() {
    console.log("move")
  }
}



svg.appendChild(transport.circle)
console.log(transport)


  

  
  
