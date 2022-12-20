import QuestionTemplate from './QuestionTemplate';

function Question1() {
  return (
    <>
      <QuestionTemplate
        question={'турбота'}
        to={'/question2'}
        from={'/'}
        endpoint="color1"
      />
    </>
  );
}

export default Question1;
