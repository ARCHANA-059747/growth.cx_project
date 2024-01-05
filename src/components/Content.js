import React from 'react'
import image from './image-hero-desktop.png'
import mobile from '../Images/image-hero-mobile.png'
import client1 from '../Images/client-audiophile.svg'
import client2 from '../Images/client-databiz.svg'
import client3 from '../Images/client-maker.svg'
import client4 from '../Images/client-meet.svg'
function Content() {
  return (

    <div className='container content mt-5 p-5'>

   
    <div className='row mt-3  p-5 content'>
      <div className='col-12 col-md-6  col-sm-12  col-lg-6  container order-2 order-md-1'>
        <h2 className='text-start'>
            Make <br/>Remote Work
        </h2>
        <br/>
        <p className='text-start'>
           Get your team in sync, no matter your location.
           Streamline processes, create team rituals, and
           watch productivity soar.
        </p>
        <br/>
        <div className='learn text-start btn-1 mt-3'>
        <button className='btn'>Learn More</button>
    
        </div>
        <br/>
        {/* Client images */}
        <div className='text-start pt-5 mt-2'>
            <img className='mx-1 client' src={client2}/>
            <img className='mx-1 client' src={client1}/>
            <img className='mx-1 client' src={client4}/>
            <img className='mx-1 client' src={client3}/>
        </div>
         </div>
         {/* Mobile image */}
      <div className='p-1 iimg2  col-12 col-md-6  col-sm-12 d-md-block d-sm-block col-lg-6 d-md-none order-1 order-md-2 order-lg-1 order-sm-1'>
     <img className='img2 ' src={mobile}/>
      </div>
      {/* Desktop mode image */}
      <div className=' p-0 col-12 col-md-6  col-sm-12  col-lg-6 d-none d-md-block order-1 order-md-2 order-lg-1 order-sm-1'>
     <img className='img1 ' src={image}/>
      </div>
    </div>
    </div>
  )
}

export default Content
