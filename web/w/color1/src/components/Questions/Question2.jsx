import QuestionTemplate from './QuestionTemplate';

function Question2() {
  return (
    <>
      <QuestionTemplate
        question={'Що ви відчуваєте дивлячись на небо?'}
        to={'/question3'}
        from={'/question1'}
      />
    </>
  );
}

export default Question2;
