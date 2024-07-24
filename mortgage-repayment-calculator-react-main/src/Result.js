export default function ResultSection({ monthlyRepayment, totalRepayment }) {
  return (
    <section className="result-section">
      {monthlyRepayment === 0 ? (
        <Empty />
      ) : (
        <Result
          monthlyRepayment={monthlyRepayment}
          totalRepayment={totalRepayment}
        />
      )}
    </section>
  );
}

function Empty() {
  return (
    <div className="empty">
      <div>
        <img src="../images/illustration-empty.svg" alt="illustration" />
        <h2>Results shown here</h2>
        <p>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
}

function Result({ monthlyRepayment, totalRepayment }) {
  return (
    <div className="result">
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <ul>
        <li>
          <p>Your monthly repayments</p>
          <span className="monthly">
            £
            {monthlyRepayment.toLocaleString({
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </li>
        <li>
          <p>Total you'll repay over the term</p>
          <span className="total">
            £
            {totalRepayment.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </li>
      </ul>
    </div>
  );
}
