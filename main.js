let person1 = document.getElementById("person1");
let person2 = document.getElementById("person2");
let total1 = document.getElementById("total1");
let total2 = document.getElementById("total2");
let summary = document.getElementById("last-total");
let resultAlert = document.querySelector(".results");

alert(
  "Enter either two digits in the input field or enter the third digit with decimal notation."
);

// Rest of your existing code
showResults = () => {
  studentOne((nameS1, percentageS1) => {
    studentTwo((nameS2, percentageS2) => {
      compare(nameS1, nameS2, percentageS1, percentageS2);
    });
  });
};

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  showResults();
});

studentOne = (callback) => {
  let nameS1 = document.getElementById("name1").value;
  let math = parseFloat(document.getElementById("math1").value);
  let science = parseFloat(document.getElementById("science1").value);
  let hindi = parseFloat(document.getElementById("hindi1").value);
  let english = parseFloat(document.getElementById("english1").value);
  let programming = parseFloat(document.getElementById("programming1").value);
  let total = math + science + hindi + english + programming;
  let percentageS1 = (total / 500) * 100; // corrected total marks to 500
  callback(nameS1, percentageS1);
};

studentTwo = (callback) => {
  let nameS2 = document.getElementById("name2").value;
  let math = parseFloat(document.getElementById("math2").value);
  let science = parseFloat(document.getElementById("science2").value);
  let hindi = parseFloat(document.getElementById("hindi2").value);
  let english = parseFloat(document.getElementById("english2").value);
  let programming = parseFloat(document.getElementById("programming2").value);
  let total = math + science + hindi + english + programming;
  let percentageS2 = (total / 500) * 100; // corrected total marks to 500
  callback(nameS2, percentageS2);
};

compare = (nameS1, nameS2, percentageS1, percentageS2) => {
  if (percentageS1 > percentageS2) {
    let GreaterP = percentageS1 - percentageS2;

    resultAlert.style.display = "block";
    person1.innerHTML = `Name : ${nameS1}`;
    total1.innerHTML = `Total : ${percentageS1.toFixed(2)}%`;
    person2.innerHTML = `Name : ${nameS2}`;
    total2.innerHTML = `Total : ${percentageS2.toFixed(2)}%`;
    summary.innerHTML = `${nameS2} scored a total of ${percentageS2.toFixed(
      2
    )}% 
    while ${nameS1} scored more than ${GreaterP.toFixed(
      2
    )} higher than ${nameS2}.`;
  } else if (percentageS1 < percentageS2) {
    let GreaterP2 = percentageS2 - percentageS1;
    resultAlert.style.display = "block";
    person2.innerHTML = `Name : ${nameS2}`;
    total2.innerHTML = `Total : ${percentageS2.toFixed(2)}%`;
    person1.innerHTML = `Name : ${nameS1}`;
    total1.innerHTML = `Total : ${percentageS1.toFixed(2)}%`;
    summary.innerHTML = `${nameS1} scored a total of ${percentageS1.toFixed(
      2
    )}% 
    while ${nameS2} scored more than ${GreaterP2.toFixed(
      2
    )} higher than ${nameS1}.`;
  } else {
    alert(`${nameS1},${nameS2}
    Did you get the same result? Have you filled in all the inputs?`);
  }
};

// Add this script to your existing code
document.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);

document.addEventListener("gesturestart", function (event) {
  event.preventDefault();
});
