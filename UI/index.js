function displaysGreeting() {
  document.getElementById("greeting").innerText = "hello & welcome";
  var h1tag = document.createElement("h1");
  h1tag.innerText = "Hello & Welcome!";
  document.body.appendChild(h1tag);
  document.getElementById("greeting").innerText = "<h1> Hello & welcome</h1>";
  document.getElementById("greeting").innerHTML = "<h1> Hello & welcome</h1>";
}
function displaysMessage() {
  var age = prompt("Enter your age(in a year)");
  age = +age;
  // if age greater than 13 display welcome to facebook otherwise display watch cartoon
  if (age >= 13) {
    // document.getElementById("greeting").innerText="welcome to Facebook";
    alert("welcome to Facebook");
  } else {
    // document.getElementById("greeting").innerText="watch Cartoon";
    alert("watch cartoon");
  }
}
