import React from 'react'
import './Home_Footer.css'

const Home_Footer = () => {
  return (
    <div>
      <div className="paddings innerWidth flexCenter footer-container">
        {/* left side */}
        <div className="flexColStart footer-left">
          <img src="./ai-logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Just a CS major whos likes coding and the gym! <br />
            Pictures will be uploaded...eventually.
          </span>
        </div>

        <div className="flexColStart footer-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">@Bsian_Chris</span>
          <div className="flexCenter footer-menu">
            <span>Social</span>
            <span>Email</span>
            <span>Phone</span>
            <span>Git-Hub</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_Footer