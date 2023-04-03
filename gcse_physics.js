var questions = [  {    question: "What is the unit of measurement for force?",    choices: ["Newton (N)", "Joule (J)", "Meter (m)"],
    answer: "Newton (N)"
  },
  {
    question: "What is the formula for calculating velocity?",
    choices: ["v = s/t", "v = m x g", "v = F/m"],
    answer: "v = s/t"
  },
  {
    question: "Which law states that an object at rest will remain at rest, and an object in motion will remain in motion with a constant velocity, unless acted upon by an external force?",
    choices: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law"],
    answer: "Newton's First Law"
  },
  {
    question: "What is the difference between weight and mass?",
    choices: ["Weight is a measure of the force of gravity on an object, while mass is a measure of the amount of matter in an object.", "Weight is a measure of the amount of matter in an object, while mass is a measure of the force of gravity on an object.", "Weight and mass are the same thing."],
    answer: "Weight is a measure of the force of gravity on an object, while mass is a measure of the amount of matter in an object."
  },
  {
    question: "Which of the following is not a type of energy?",
    choices: ["Thermal Energy", "Kinetic Energy", "Sound Energy", "Mass Energy"],
    answer: "Mass Energy"
  },
  {
    question: "What is the unit of measurement for power?",
    choices: ["Watt (W)", "Joule (J)", "Meter (m)"],
    answer: "Watt (W)"
  },
  {
    question: "Which law states that the total energy in a closed system remains constant?",
    choices: ["Law of Conservation of Energy", "Newton's First Law", "Newton's Third Law"],
    answer: "Law of Conservation of Energy"
  },
  {
    question: "What is the unit of measurement for electric current?",
    choices: ["Watt (W)", "Ampere (A)", "Volt (V)"],
    answer: "Ampere (A)"
  },
  {
    question: "What is the formula for calculating work?",
    choices: ["W = F x d", "W = m x g", "W = v/t"],
    answer: "W = F x d"
  },
  {
    question: "Which type of wave requires a medium to travel through?",
    choices: ["Transverse Waves", "Longitudinal Waves", "Electromagnetic Waves"],
    answer: "Longitudinal Waves"
  },
  {
    question: "What is the unit of measurement for frequency?",
    choices: ["Hertz (Hz)", "Newton (N)", "Joule (J)"],
    answer: "Hertz (Hz)"
  },
  {
    question: "Which law states that the pressure of a gas is inversely proportional to its volume?",
    choices: ["Boyle's Law", "Charles' Law", "Gay-Lussac's Law"],
    answer: "Boyle's Law"
  },
  {
    question: "What is the unit of measurement for electric potential difference?",
    choices: ["Ampere (A)", "Volt (V)", "Ohm (Ω)"],
    answer: "Volt (V)"
  },
  {
    question: "Which type of lens can only form virtual images? a) Convex Lens b) Concave Lens c) Both Convex and Concave Lenses",
choices: ["Convex Lens", "Concave Lens", "Both Convex and Concave Lenses"],
answer: "Concave Lens"
},
{
question: "What is the unit for wavelength? a) Meter (m) b) Centimetre (cm) c) Hertz (Hz)",
choices: ["Meter (m)", "Centimetre (cm)", "Hertz (Hz)"],
answer: "Meter (m)"
},
{
question: "Which law states that the resistance of a conductor is directly proportional to its length and inversely proportional to its cross-sectional area? a) Ohm's Law b) Kirchhoff's Law c) Joule's Law",
choices: ["Ohm's Law", "Kirchhoff's Law", "Joule's Law"],
answer: "Ohm's Law"
},
{
question: "What is the unit of measurement for capacitance? a) Farad (F) b) Ampere (A) c) Volt (V)",
choices: ["Farad (F)", "Ampere (A)", "Volt (V)"],
answer: "Farad (F)"
},
{
question: "What is the formula for calculating density? a) d = m/v b) d = v/m c) d = m x g",
choices: ["d = m/v", "d = v/m", "d = m x g"],
answer: "d = m/v"
},
{
question: "Which type of energy is stored in an object due to its position or configuration? a) Kinetic Energy b) Potential Energy c) Thermal Energy",
choices: ["Kinetic Energy", "Potential Energy", "Thermal Energy"],
answer: "Potential Energy"
},
{
question: "Which law states that the volume of a gas is directly proportional to its temperature, assuming constant pressure? a) Boyle's Law b) Charles' Law c) Gay-Lussac's Law",
choices: ["Boyle's Law", "Charles' Law", "Gay-Lussac's Law"],
answer: "Charles' Law"
},
{
question: "Which of the following is an example of conservation of momentum? a) A ball bouncing off a wall b) A roller coaster moving downhill c) A pendulum swinging back and forth d) A rocket accelerating in space",
choices: ["A ball bouncing off a wall", "A roller coaster moving downhill", "A pendulum swinging back and forth", "A rocket accelerating in space"],
answer: "A ball bouncing off a wall"
},
{
question: "Which of the following factors affects the strength of an electromagnet? a) The number of turns in the wire coil b) The length of the wire c) The voltage of the power source d) The resistance of the wire",
choices: ["The number of turns in the wire coil", "The length of the wire", "The voltage of the power source", "The resistance of the wire"],
answer: "The number of turns in the wire coil"
},
{
question: "Which of the following phenomena demonstrates the wave-particle duality of light? a) Reflection of light b) Refraction of light c) Interference of light d) Diffraction of light",
choices: ["Reflection of light", "Refraction of light", "Interference of light", "Diffraction of light"],
answer: "Interference of light"
},
{
question: "24.	The Planck constant, h, is measured in units of joule.second in the SI system. If it was to be measured in units of (centimetres, grams, second) instead of (metres, kilograms, seconds) by how much would its numerical value increase? a) 107  b) 105  c) 10-2  d) 10-5",
choices: ["107", "105", "10-2", "10-5"],
answer: "105"
},
{
question: "In 2014 the highest freefall jump was made from a height of 41 km. As the jumper travelled towards earth he reached a terminal velocity of over 1300 km/h. As he continued to fall towards the ground the atmosphere became thicker. On his descent and before he released his parachute, his terminal velocity:",
choices: ["Increased", "Stayed the same", "Reduced", "Zero"],
answer: "Increased"
}
];


var currentQuestion = 0;
var score = 0;
var timeLeft =300;
var timer;

function displayQuestion() {
  var questionElem = document.getElementById("question");
  var choicesElem = document.getElementById("choices");
  questionElem.innerHTML = questions[currentQuestion].question;
  choicesElem.innerHTML = "";
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    var choice = questions[currentQuestion].choices[i];
    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "choice";
    radio.value = choice;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(choice));
    choicesElem.appendChild(label);
  }
}

function checkAnswer() {
  var selected = document.querySelector('input[name="choice"]:checked');
  if (selected && selected.value === questions[currentQuestion].answer) {
  score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
  displayQuestion();
  } else {
  clearInterval(timer);
  showScore();
  }
  }

  function showScore() {
  var scoreElem = document.getElementById("score");
  scoreElem.innerHTML = "Final Score: " + score + " out of " + questions.length;
  var choicesElem = document.getElementById("choices");
  choicesElem.style.display = "none";
  var submitElem = document.getElementById("submit");
  submitElem.style.display = "none";
  }

  function startTimer() {
  var timeElem = document.getElementById("time");
  timeElem.innerHTML = timeLeft;
  timer = setInterval(function() {
  timeLeft--;
  timeElem.innerHTML = timeLeft;
  if (timeLeft <= 0) {
  clearInterval(timer);
  showScore();
  }
  }, 1000);
  }

  window.onload = function() {
  displayQuestion();
  var submitElem = document.getElementById("submit");
  submitElem.onclick = checkAnswer;
  startTimer();
  };
