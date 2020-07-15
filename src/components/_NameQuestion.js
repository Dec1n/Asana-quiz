const NameQuestion = (question, options) => {
  const template = `
  <div class="name-quiz-container" id="view">
    <div class="name-question" >${question.sanskrit}</div>
    <div class="img-input-container">
      <img class="img-input" id=${options[0].id} src=${options[0].img}>
      <img class="img-input" id=${options[1].id} src=${options[1].img}>
      <img class="img-input" id=${options[2].id} src=${options[2].img}>
      <img class="img-input" id=${options[3].id} src=${options[3].img}>
    </div>
  </div>
  `;
  return template;
};

export default NameQuestion;
