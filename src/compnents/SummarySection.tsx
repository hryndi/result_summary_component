import { useApp } from "../useApp.hooks";

const SummarySection = () => {
  const { listData } = useApp();
  return (
    <section className="summary-wrapper">
      <h2 className="summary-header">Summary</h2>
      <ul className="summary-list">
        {listData.map((item) => (
          <li className="summary-item" key={item.category}>
            <div className="skills-wrapper">
              <img src={item.icon} alt="Reaction" />
              <h3>{item.category}</h3>
            </div>

            <div className="summary-score">
              <span>
                <span>{item.score} </span> / 100
              </span>
            </div>
          </li>
        ))}
      </ul>
      <button>Continue</button>
    </section>
  );
};

export default SummarySection;
