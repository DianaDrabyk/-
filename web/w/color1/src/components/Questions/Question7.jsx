import QuestionTemplate from './QuestionTemplate';

function Question7() {
  return (
    <>
      <QuestionTemplate
        question={'Чи?'}
        to={'/finish'}
        from={'/question6'}
      />
    </>
  );
}

export default Question7;
