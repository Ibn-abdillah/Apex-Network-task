import React from 'react'
import logo from './assets/apex.gif'
import image from './assets/image.png'
import itunes from './assets/itunes.png'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import linkedIn from './assets/linkedIn.png'
import instagram from './assets/instagram.png'
import downloadApp from './assets/download-app.png'
import googlePlay from './assets/google-play.png'

import './App.css'

function App() {
  return (
    <div className='frame'>
       <div className='logo'>
          <img src={logo} alt="logo"/>
       </div>

       <div className='banner-image' >
          <img src={image} alt="gift voucher" />
       </div>

       <h2>you've just been gifted!</h2>

       <p>
          Lorem ipsum dolor sit amet consectetur. Ipsum scelerisque aliquam
          ornare eu feugiat aliquet. Nisi massa fermentum arcu semper. 
          Tellus sollicitudin quis faucibus leo. 
          Morbi at ac orci nunc viverra. Mi adipiscing.
       </p>

       <h2>to redeem your gift</h2>

       <div className='gradient-box'>
         <img src={itunes} alt="itunes" />
       </div>

       <p>
        Visit the website <span>@apexnetork.com</span> and log in to your account.
        Navigate to the “Redeem Gift” section and 
        enter the gift code. Confirm the redemption and enjoy your gift.
       </p>

       <div className="social-campaign">
         <img src={twitter} alt="twitter" />
         <img src={facebook} alt="facebook" />
         <img src={linkedIn} alt="linkedIn" />
         <img src={instagram} alt="instagram" />
      </div>

       <p>
        Get the most of Apex network by installing our mobile app. 
        You can log in by using your existing emails address and password.
       </p>

       <div className="get-app">
         <img src={downloadApp} alt="App store" />
         <img src={googlePlay} alt="Google play" />
       </div>

       <p>
         Questions or faq? Contact us at <span>Support@apexnetwork.com</span>.
         If you'd rather not receive this kind of email, 
         Don't want any more emails from Apexnetwork? 
         <span>Unsubscribe</span>.
       </p>
    </div>
  )
}

export default App

