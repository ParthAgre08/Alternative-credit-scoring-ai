function Features(){
    return <>
    {/* Features */}
      <section className="section container" id="features">
        <h2 className="section-title">Features</h2>
        <div className="grid-4">
          <div className="glass-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Scoring</h3>
            <p>Advanced machine learning models to assess your true financial behavior.</p>
          </div>
          <div className="glass-card">
            <div className="feature-icon">🛡️</div>
            <h3>Risk Analysis</h3>
            <p>Comprehensive risk profiling for better loan matching.</p>
          </div>
          <div className="glass-card">
            <div className="feature-icon">💸</div>
            <h3>Cash Flow</h3>
            <p>We analyze your income and expenses, not just past debts.</p>
          </div>
          <div className="glass-card">
            <div className="feature-icon">💡</div>
            <h3>AI Insights</h3>
            <p>Get actionable tips to improve your financial standing.</p>
          </div>
        </div>
      </section>
    </>
}
export default Features;