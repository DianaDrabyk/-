import QuestionTemplate from './QuestionTemplate';

function Question8() {
  return (
    <>
      <QuestionTemplate
        question={'щирість'}
        to={'/finish'}
        from={'/question7'}
        endpoint="color8"
      />
    </>
  );
}

export default Question8;