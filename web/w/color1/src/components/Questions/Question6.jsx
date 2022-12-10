import QuestionTemplate from './QuestionTemplate';

function Question6() {
  return (
    <>
      <QuestionTemplate
        question={'Чи сняться?'}
        to={'/question7'}
        from={'/question5'}
      />
    </>
  );
}

export default Question6;
