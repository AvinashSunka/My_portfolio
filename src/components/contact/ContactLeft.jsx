import React from 'react'

const ContactLeft = () => {
  return (
    <div className='h-auto col-span-12  lg:col-span-7 lg:w-[90%]'>
      <div data-aos-delay="600" className="contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">

                                <form className="rnt-contact-form rwt-dynamic-form row grid grid-cols-12 gap-2 w-full py-5" id="contact-form" method="POST" action="">

                                    <div className="col-span-12 lg:col-span-6 ">
                                        <div className="form-group">
                                            <label for="contact-name">Your Name</label>
                                            <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="form-group">
                                            <label for="contact-phone">Phone Number</label>
                                            <input className="form-control" name="contact-phone" id="contact-phone" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-span-12">
                                        <div className="form-group">
                                            <label for="contact-email">Email</label>
                                            <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email" />
                                        </div>
                                    </div>

                                    <div className="col-span-12">
                                        <div className="form-group">
                                            <label for="subject">subject</label>
                                            <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-span-12">
                                        <div className="form-group">
                                            <label for="contact-message">Your Message</label>
                                            <textarea name="contact-message" id="contact-message" cols="20" rows="6"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <button name="submit" type="submit" id="submit" className="rn-btn">
                                            <span>SEND MESSAGE</span>
                                            <i data-feather="arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    </div>

    // <div className="grid-span-7 w-full h-auto">
    //     <div data-aos-delay="600" className="contact-input mt-20">
    //     <div className="contact-form-wrapper">
    //     <div className="introduce">
    //         <form action="" method="post" className='rnt-contact-form rwt-dynamic-form row grid grid-cols-12 gap-2'>
    //         <div className="lg:col-span-6">
    //         <div className="form-group">
    //             <label for="contact-name">Your Name</label>
    //             <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
    //         </div>
    //         </div>
    //         <div className="lg:col-span-6">
    //         <div className="form-group">
    //             <label for="contact-name">Your Name</label>
    //             <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
    //         </div>
    //         </div>
    //         <div className="lg:col-span-12">
    //         <div className="form-group">
    //             <label for="contact-name">Your Name</label>
    //             <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
    //         </div>
    //         </div>
    //         </form>

    //     </div>

    //     </div>

    //     </div>

    // </div>
  )
}

export default ContactLeft
