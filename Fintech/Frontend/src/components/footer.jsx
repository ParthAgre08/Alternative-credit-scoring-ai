function footer(){
    return <>
    {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p>&copy; {new Date().getFullYear()} E-BANK Alternative Credit. All rights reserved.</p>
        </div>
      </footer>
    </>
}

export default footer;