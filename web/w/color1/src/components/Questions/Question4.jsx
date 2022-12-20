import QuestionTemplate from './QuestionTemplate';

function Question4() {
  return (
    <>
      <QuestionTemplate
        question={'надія'}
        to={'/question5'}
        from={'/question3'}
        endpoint="color4"
      />
    </>
  );
}

export default Question4;
