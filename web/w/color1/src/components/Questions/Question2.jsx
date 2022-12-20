import QuestionTemplate from './QuestionTemplate';

function Question2() {
  return (
    <>
      <QuestionTemplate
        question={'роздратування'}
        to={'/question3'}
        from={'/question1'}
        endpoint="color2"
      />
    </>
  );
}

export default Question2;
