import QuestionTemplate from './QuestionTemplate';

function Question5() {

  return (
    <>
      <QuestionTemplate
        question={'спокій'}
        to={'/question6'}
        from={'/question4'}
        endpoint="color5"
      />
    </>
  );
}

export default Question5;
