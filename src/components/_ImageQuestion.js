const ImageQuestion = (question, options) => {
  const template = `
    <div class="img-quiz-container" id="view">
      <img class="img-question" src="${question.img}">
      <div class="name-input-container">
      <div class="name-input" id=${options[0].id}>${options[0].sanskrit}</div>
      <div class="name-input" id=${options[1].id}>${options[1].sanskrit}</div>
      <div class="name-input" id=${options[2].id}>${options[2].sanskrit}</div>
      <div class="name-input" id=${options[3].id}>${options[3].sanskrit}</div>
      </div>
    </div>
  `;
  return template;
};

export default ImageQuestion;
