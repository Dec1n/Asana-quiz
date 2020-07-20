import "./scss/main.scss";
import poses from "./modules/posesData";
import {
  generateArrayRandomNumbers,
  generateRandomBoolean,
  randomNum,
  objectMaker,
} from "./modules/functions";
import ImageQuestion from "./components/_ImageQuestion";
import NameQuestion from "./components/_NameQuestion";

//fix for the mobile browser viewheigth
let vh = window.innerHeight * 0.01; 
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let questionTypePreference = 0.5; // This number represents questiontype balance, change numner between 0 and 1, to skew the results

const mainBtn = document.querySelector("#btn");
mainBtn.addEventListener("click", () => {
  mainBtn.innerHTML = "Next";
  const el = document.querySelector(".app-container");
  resetCurrentView(); // removes the latest component (first Child of #app)
  generateNewQuestion();
});

const generateNewQuestion = () => {
  const posesSelection = generateArrayRandomNumbers(poses.length, 4); //Output: 4 random numbers from 0 till poses.length(198)
  const questionNumber = randomNum(4); // Output: number between 0 and 4
  const boolean = generateRandomBoolean(questionTypePreference); //Output: random boolean
  const options = Object.values(objectMaker(poses, posesSelection)); //Makes and Array of Objects (values = from poses) > index-numbers from posesSelection
  const question = options.slice(questionNumber, questionNumber + 1)[0]; //Randomly picks a question and turn it into a Object
  const template = templateMaker(question, options, boolean); //Prints out the question type to HTLM template
  templatePrinter(template); //Prints out question & multiple choose options
  const inputId = Array.from(
    document.querySelectorAll(".name-input, .img-input")
  ); //Extracts multiple-chooce Elements
  checkInput(inputId, question); //On Click > Checks if multiple-chooce elements.Id === question.Id
};

//Creating the templete for the Questions
const imageQuestionTemplate = (question, options) => {
  const template = document.createElement("template");
  template.innerHTML = ImageQuestion(question, options);
  return template.content.cloneNode(true);
};
const nameQuestionTemplate = (question, options) => {
  const template = document.createElement("template");
  template.innerHTML = NameQuestion(question, options);
  return template.content.cloneNode(true);
};

//removes current component view.
const resetCurrentView = () => {
  if (document.querySelector("#view") === null) return;
  view.remove();
};

//Uses the already made template of the randomly choosen questionType, and adds the question & mulitiple-chooce in.
const templateMaker = (question, options, boolean) => {
  if (boolean === true) return nameQuestionTemplate(question, options);
  return imageQuestionTemplate(question, options);
};

//Prints out the filled in Template
const templatePrinter = (template) => {
  document.querySelector("#app").appendChild(template);
};

//On Click > Checks if multiple-choice.Id === question.Id, and triggers: Correct() or Wrong()
const checkInput = (inputId, question) => {
  for (let i = 0; i < 4; i++) {
    inputId[i].addEventListener("click", () => {
      if (parseInt(inputId[i].id) === question.id) {
        isCorrect(inputId[i]);
      } else {
        isWrong(inputId[i]);
      }
    });
  }
};

//Adds a CSS Class to a Element
const isCorrect = (el) => {
  el.classList.add("correct");
  console.log("Right!");
};
const isWrong = (el) => {
  el.classList.add("wrong");
  console.log("wrong!");
};
