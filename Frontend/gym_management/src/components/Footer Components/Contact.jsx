import React from 'react'
import Visit from '../Topbar Components/Visit'

const Contact = () => {
  return (
    <>
      <div className='contactContainer'>
        <div className='contactDesc'>
          <h1 style={{ width: '48%', textAlign: 'left', color: 'white' }}>Have Questions or want to get in touch with us?</h1>
          <div className='bar_container'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div style={{ marginLeft: '1%', color: 'white', display: 'flex', alignItems: 'center' }}>We'd love to hear from you! Feel free to reach out through any of the following methods.</div>
          </div>
        </div>
        <div className='locations'>
          <h2 style={{ marginBottom: '0px', marginLeft: '2%', color: 'white', paddingLeft: '1rem' }}>Location and Map</h2>
          <h5 style={{ marginTop: '0px', marginLeft: '2%', color: 'white', paddingLeft: '1rem' }}>Google maps embed showing the location of different gym branches</h5>
          <div className='map_container'>
            <div className='frame-map' style={{}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.3756210289716!2d77.32651837527928!3d28.37772077580494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd2debecd6a7%3A0x7a5a943b6f588dbe!2sThe%20Inspire%20Gym!5e0!3m2!1sen!2sus!4v1740688120259!5m2!1sen!2sus">
              </iframe>
              <h3>The Inspire Gym</h3>
              <p>Inspire gym, J/141, 9-10 Dividing Rd, J Block, Sector 10 HBC, Faridabad, Haryana 121006, India</p>
            </div>

            <div className='frame-map' style={{}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.5967787359516!2d77.32837836715416!3d28.37737348887231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdda72d4d6ae9%3A0x93739f0e4686e1c4!2sV2%20GYM%20ZONE!5e0!3m2!1sen!2sus!4v1740695061500!5m2!1sen!2sus">
              </iframe>
              <h3>V2 GYM ZONE</h3>
              <p>SEO 133, v2gymzone, opposite GHAI HOSPITAL, J Block, Sector 10 HBC, Faridabad, Haryana 121006, India</p>
            </div>

            <div className='frame-map' style={{}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.5899055450691!2d77.3284507867977!3d28.378204172158984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd355506da39%3A0x5a043c82f44df105!2sHype%20The%20Gym!5e0!3m2!1sen!2sus!4v1740695258240!5m2!1sen!2sus">
              </iframe>
              <h3>Hype The Gym</h3>
              <p>J, 145, J Block, Sector 10 HBC, Faridabad, Haryana 121006, India</p>
            </div>

            <div className='frame-map'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.177459377938!2d77.32314437109534!3d28.37834628208677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd86782c974f%3A0xea72d98711544413!2s360%20FITNESS%20HUB!5e0!3m2!1sen!2sus!4v1740694482473!5m2!1sen!2sus">
              </iframe>
              <h3>360 FITNESS HUB</h3>
              <p>C1/1 MAIN ROAD SECTOR 11, opposite GURUDWARA, near POLICE STATION, SEC 11, Faridabad, Haryana 121006, India</p>
            </div>
          </div>
        </div>
        <div>
          <hr
            style={{
              color: "white",
              backgroundColor: "white",
              height: '0.1rem'
            }}
          />
        </div>
        <div className='visit_container'>
          <Visit />
        </div>
        <div className='assist'>
          <div>
            <h3>We're Here to Assist You</h3>
            <p>
              Weather you have any questions about our membership plans, upcoming events or simply need some fitness advice
              don't hesitate to reach out. Our dedicated team is here to assist you on your fitness journey, providing support,
              motivation and guidance every step of the way.
            </p>
          </div>
          <div>
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
