const svg = document.querySelector('svg')
for (x=0; x<6; x++) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const numOfCircle = document.querySelectorAll('circle').length
  circle.setAttribute("cx", "50%")
  circle.setAttribute("cy", "50%")
  circle.setAttribute("r", (50 * numOfCircle))
  circle.setAttribute("style", "stroke:#000000; fill:none")
    console.log(svg)
    console.log(numOfCircle)
    svg.appendChild(circle)
  }