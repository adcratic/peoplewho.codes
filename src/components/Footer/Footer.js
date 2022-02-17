import React from 'react'
import "./Footer.css"

const Footer = () => {

    const backToTop = ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

    }

    const sendEmail = () => {
        const emailTo = "peoplewhocodes@gmail.com";
        const emailCC = "";
        const emailSub = "";
        const emailBody = "";
        window.location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;
    }

    return (
        <>
          <section className="footer">
            <div className="backToTop">
                <button className="backToTop-button" onClick={backToTop}>
                    <i class="fas fa-chevron-up"></i>
                </button>
            </div>
              <div className="footer-container">
                <div className="footer-mail-container">
                    <h2>Help & Support</h2>
                    <p onClick={sendEmail}>peoplewhocodes@gmail.com</p>
                </div>
                <div className='footer-social-container'>
                    <h2>Quick Link</h2>
                    <div className="footer-social-icons">
                        <i onClick={()=> window.open("https://www.instagram.com/peoplewho_codes/")} class="fab fa-instagram instagram"></i>
                        <i onClick={()=> window.open("https://www.linkedin.com/company/peoplewho-codes/")} class="fab fa-linkedin-in linkedIn"></i>
                        <i onClick={()=> window.open("https://twitter.com/peoplewho_codes")} class="fab fa-twitter twitter"></i>
                        <i onClick={()=> window.open("https://www.youtube.com/c/PeopleWhoCodes")} class="fab fa-youtube youtube"></i>

                    </div>
                </div>
              </div>
              <div className='copyright-section'>
                  <p>©2022 PeopleWho.Codes. All rights reserved.</p>
              </div>
          </section>  
        </>
    )
}

export default Footer
