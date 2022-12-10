import QuestionTemplate from './QuestionTemplate';

function Question4() {
  return (
    <>
      <QuestionTemplate
        question={'Чи сняться вам сни?'}
        to={'/question5'}
        from={'/question3'}
      />
    </>
  );
}

export default Question4;
