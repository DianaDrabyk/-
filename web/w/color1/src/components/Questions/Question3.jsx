import QuestionTemplate from './QuestionTemplate';

function Question3() {
  return (
    <>
      <QuestionTemplate
        question={'вина'}
        to={'/question4'}
        from={'/question2'}
        endpoint="color3"
      />
    </>
  );
}

export default Question3;
