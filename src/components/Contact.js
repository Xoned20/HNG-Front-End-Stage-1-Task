import React from 'react'

const Contact = () => {
  return (
    <div className='contact__page'>
        <div className='contact__contain'>
            <div className='contact__container'>
                <div className='contact__content'>
                    <div className='header__container'>
                        <div className='header__content'>
                            <header>
                                <h1>Contact Me</h1>
                                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                            </header>
                        </div>
                    </div>
                    <div className='form__container'>
                        <div className='form_content'>
                            <form>
                                <div className='form__field'>
                                    <div className='form__name'>
                                        <div className='firstname'>
                                            <label for="first_name">First name</label>
                                            <input type="text" id="first_name" name="first_name" placeholder='Enter your first name' />
                                        </div>
                                        <div className='lastname'>
                                            <label for="last_name">Last name</label>
                                            <input type="text" id="last_name" name="last_name" placeholder='Enter your last name'/>
                                        </div>
                                    </div>
                                    <div className='email'>
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder='yourname@email.com' />
                                    </div>
                                    <div className='message'>
                                        <label for="message">Message</label>
                                        <textarea type="text" id="message" name="message" placeholder="Send me a message and I'll reply you as soon as possible..." />
                                    </div>
                                    <div className='form__checkbox'>
                                        <input type="checkbox" id="agree" name="agree" value="agree" />
                                        <label for="agree">You agree to providing your data to Xoned who may contact you.</label>
                                    </div>
                                </div>
                                <button type='submit' id='btn__submit'>Send message</button>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact