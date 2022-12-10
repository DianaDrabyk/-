import QuestionTemplate from './QuestionTemplate';

function Question1() {
  return (
    <>
      <QuestionTemplate
        question={'Чи це актуально?'}
        to={'/question2'}
        from={'/'}
      />
    </>
  );
}

export default Question1;
