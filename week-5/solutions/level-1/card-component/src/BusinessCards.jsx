/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */

import './BusinessCards.css'

function BusinessCards() {
  

  return (
    <div class="main-container">
      
        <div class="card-component">
           <h1>Narottam Narhari</h1>
           <p class="description">
              A fullstack web developer. Well versed in fullstack software development technologies like React, Node, Express and MongoDB.
           </p>
           <hr></hr>

           <h2>Interests</h2>
           <div class="interests-container">
           <ul class="interest-list">
              <li class="interest-items">
                 Website Development
              </li>

              <li class="interest-items">
                 Open Source
              </li>

              <li class="interest-items">
                 DevOps
              </li >

              <li class="interest-items">
                 Compititive Programming
              </li>

              <li class="interest-items">
                Problem Solving
              </li>

           </ul>

           <img class="image" src="https://cdn.dribbble.com/users/1714010/screenshots/10822383/media/ea98dfbdc8c2a056427061871bb42edc.gif" alt="coding"></img>

           </div>
           
           <div class="button-container">
                <a class="button" href="https://www.linkedin.com/in/narottam-narhari-266502188/"  target="_blank">
                   LinkedIn
                </a>
                  
                <a class="button" href="https://twitter.com/codenarocode"  target="_blank">
                   Twitter
                </a>

                <a class="button" href="https://github.com/codenarocode"  target="_blank">
                   Github
                </a>
           </div>
         </div>
        
      </div>
  )
}

export default BusinessCards
