import QuestionTemplate from './QuestionTemplate';

function Question7() {
  return (
    <>
      <QuestionTemplate
        question={'злість'}
        to={'/question8'}
        from={'/question6'}
        endpoint="color7"
      />
    </>
  );
}

export default Question7;
