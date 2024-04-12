const ResultSection = () => {
  return (
    <section className="your-result-wrapper">
      <h2 className="your-result-header">Your Result</h2>
      <div className="result-score-styled">
        <span className="score-dynamic">76</span>
        <span className="score-of">of 100</span>
      </div>
      <h1>Great</h1>
      <p className="result-description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default ResultSection;
