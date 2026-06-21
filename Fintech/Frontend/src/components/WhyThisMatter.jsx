function WhyThisMatter(){
    return <>
    {/* Why This Matters */}
      <section className="section container" id="about">
        <div className="grid-2">
          <div className="glass-card">
            <h2>Why This Matters?</h2>
            <p style={{ marginBottom: '2rem' }}>Traditional banking leaves many behind. We believe financial access should be based on your actual behavior, not just a credit card.</p>
            <ul className="check-list">
              <li><span className="cross-icon">❌</span> No Credit Card</li>
              <li><span className="cross-icon">❌</span> No Loan History</li>
              <li><span className="cross-icon">❌</span> New Freelancer</li>
            </ul>
          </div>
          <div className="glass-card">
            <h2>The Solution</h2>
            <p style={{ marginBottom: '2rem' }}>Our AI-driven platform unlocks opportunities by looking at the bigger picture of your financial health.</p>
            <ul className="check-list">
              <li><span className="check-icon">✅</span> Alternative Credit Score</li>
              <li><span className="check-icon">✅</span> Financial Risk Analysis</li>
              <li><span className="check-icon">✅</span> Loan Eligibility Insights</li>
            </ul>
          </div>
        </div>
      </section>
    </>
}

export default WhyThisMatter;

