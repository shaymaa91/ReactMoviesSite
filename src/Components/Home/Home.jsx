import React from 'react';

export default function Home() {

  return (
    <>
      <section className="home-bg position-relative overflow-hidden border-bottom border-secondary border-5">

        <div className="bg-gradiant">
          <div className='container'>
            <header className="home pt-5 vh-100 text-center px-5 mx-5">
              <div className="pb-5 pt-2">
                <h1 className='home-title pt-5'>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>

              </div>
              <div className="getStarted px-5 mx-5">
                <form>
                  <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                  <div className="input-group mb-5 text-center">
                    <input type="email" className="form-control" placeholder="Email Address" aria-label="Email" aria-describedby="button-addon2" />
                    <button className="btn btn-info" type="button" id="button-addon2">Get Started </button>
                  </div>
                </form>
              </div>
            </header>




          </div>
        </div>

      </section>

      <section className="our-story-card animation-card watchOnTv container p-5" data-uia-nmhp="watchOnTv" data-uia="our-story-card">
        <div className="animation-card-container row ">
          <div className="our-story-card-text col-md-6 pt-5">
            <h1 className="our-story-card-title" data-uia="animation-card-title">Enjoy on your TV.</h1>
            <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
          </div>
          <div className="story-img col-md-6 ">
            <div className="our-story-card-img-container ">
              <div className="our-story-card-animation-container">
                <img className="our-story-card-img" src="tv.png" data-uia="our-story-card-img" />
                <div className="our-story-card-animation">
                  <video className="our-story-card-video" autoPlay playsInline muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                  </video>
                  <div className="our-story-card-animation-text" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="our-story-section border-top border-bottom border-secondary border-5">
        <div className="container pt-5 px-5" data-uia-nmhp="downloadAndWatch" data-uia="our-story-card">
          <div className="row ">
            <div className=" col-md-6 pt-5">
              <h1>Download your shows to watch offline.</h1>
              <h2>Save your favorites easily and always have something to watch.</h2>
            </div>
            <div className="col-md-6">
              <div>
                <img className="our-story-card-img" src="mobile-0819.jpg" data-uia="our-story-card-img" />

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=''>
        <div className="kids-profile container ">
          <div className="container px-5 py-5" data-uia-nmhp="kidsValueProp" data-uia="our-story-card">
            <div className="row">
              <div className="col-md-6">
                <h1 className="pt-5 pb-3" data-uia="animation-card-title">Create profiles for kids.</h1>
                <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
              </div>
              <div className="col-md-6">
                <div className="our-story-card-animation-container">
                  <img className="our-story-card-img" src="kidsValueProp.png" data-uia="our-story-card-img" />
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>




    </>


  )
}
