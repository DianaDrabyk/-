import QuestionTemplate from './QuestionTemplate';

function Question5() {

  return (
    <>
      <QuestionTemplate
        question={'Чи сняться вам?'}
        to={'/question6'}
        from={'/question4'}
      />
    </>
  );
}

export default Question5;
