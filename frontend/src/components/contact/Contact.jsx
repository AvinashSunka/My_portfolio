import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const Contact = () => {
  return (
    <div className="rn-contact-area rn-section-gap section-separator h-auto" id="CONTACT">
            <div className="">
                <div className="grid">
                    <div className="lg:col-span-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Contact</span>
                            <h2 className="title">Contact With Me</h2>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-32 '>
                    <div className="w-[90%] flex flex-col lg:flex-row justify-center gap-24">
                    <ContactRight />
                    <ContactLeft />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact
