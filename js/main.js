const svg = document.querySelector('svg')


for (x=0; x<6; x++) {
  var circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
    );
  const numOfCircle = document.querySelectorAll('circle').length
  circle.setAttribute("class", "slider")  
  circle.setAttribute("cx", "50%")
  circle.setAttribute("cy", "50%")
  circle.setAttribute("r", (50 * numOfCircle))
  circle.setAttribute("id", numOfCircle)
    console.log(circle)
    console.log(numOfCircle)
    svg.appendChild(circle)


  
  
  

    

  
}
