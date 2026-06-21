function Hero_Section() {
    return <>
        {/* Hero Section */}
        <section className="hero container" id="home">
            <div className="hero-glow"></div>
            <div className="hero-content">
                <span className="badge">Alternative Credit Score</span>
                <h1>Get Your Credit Score Even Without Traditional Credit History</h1>
                <p>
                    We analyze financial behavior, savings, cash flow and transactions
                    to generate an AI-powered credit score.
                </p>
                <a href="#score" className="btn btn-large">Check My Score</a>
            </div>
            <div className="hero-image">
                <img src="/dashboard_credit_meter.png" alt="Financial Dashboard Credit Meter" />
            </div>
        </section>
    </>
}

export default Hero_Section;