import React from 'react'
import "./HeroSection.css"
import Tabs from "../Tabs/Tabs"
// import Carousel from '../Carousel/Carousel'

const HeroSection = () => {

    const parallax = (e) => {
        let x = (window.innerWidth / 2 - e.pageX) * 0.01;
        let y = (window.innerHeight / 2 - e.pageY) * 0.01;
        document.querySelector(".heroSectionImage").style.transform = `translate(${x}px, ${y}px)`;
    }

    const openLink = ()=>{
        window.open("https://vectorzz.typeform.com/peoplewhocode")
    }

    return (
        <>
            {/* Hero Section */}
            <section className='heroSection' onMouseMove={(e) => parallax(e)}>
                <div className='heroSectionImage'>
                    <img src="images/herosectionimage.png" alt="heroImage"/>
                </div>
                <div className='heroSectionText'>
                    <h2>The Coding Community</h2>
                    <div className="w-node" onClick={()=> window.open("https://discord.gg/bccuMvEZnV")}>
                        <i className='fab fa-discord discordIcon'></i>
                        <p>let's start talking</p>
                        <i className="fas fa-arrow-right arrowIcon"></i>
                    </div>
                </div>
            </section>

            {/* Community section */}
            <section className="community-section">
                <div className="community-section-heading">
                    <h2>Another coding community?</h2>
                </div>
                <div className='community-section-content'>
                    <p>Umm... No. We're The Coding Community. <br />May sound weird, but we're a bunch of 4-something people who are a cobination of designers, coder and developers, who want to give back to the mentor. <br/>
                        <br />Too early? Who cares. We're not the most experienced - but we're working on a lot of stuff & want you to be a part of our journey.
                    </p>
                    <div className='community-image'>
                        <img src="images/community.png" alt="communityImage"/>
                    </div>
                </div>
            </section>

            {/* Experience section */}
            <section className="experience-section">
                <div className="experience-section-content">
                    <div className="experience-section-image">
                        <img src="images/rocket.png" alt="rocketImage"/>
                    </div>
                    <div className="experience-tab-section">
                        <div className="experience-section-heading">
                            <h2>What's in it for You?</h2>
                        </div>
                        <Tabs />
                    </div>
                </div>
            </section>
            
            {/* Mentor Section */}
            <section className="mentor-section">
                <div className="mentor-section-heading">
                    <h2>Become a mentor...</h2>
                </div>
                <div className='mentor-section-content'>
                    <div className='mentor-section-p'>
                        <p>Are you someone who wants to give back to the community? <br/> Yes! we’ve got something for you...</p>
                        <p className="contributer-link" onClick={openLink}>join contributer network <i class="fas fa-arrow-right"></i></p>
                    </div>
                    <div className='mentor-image'>
                        <img src="images/mentor.png" alt="communityImage"/>
                    </div>
                </div>
            </section>

            {/* partner container */}
            {/* <Carousel /> */}
        </>
    )
}

export default HeroSection