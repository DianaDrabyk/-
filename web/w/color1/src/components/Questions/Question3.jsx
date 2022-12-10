import QuestionTemplate from './QuestionTemplate';

function Question3() {
  return (
    <>
      <QuestionTemplate
        question={'Чи любили ви квіти?'}
        to={'/question4'}
        from={'/question2'}
      />
    </>
  );
}

export default Question3;
