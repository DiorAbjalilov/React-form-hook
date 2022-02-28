import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <>
        <div className="container">  
            <form onSubmit={handleSubmit(onSubmit)} id="contact" action="" method="post">
                <h3>Contact Form</h3>
                <h4>Contact us for custom quote</h4>
                <fieldset>
                    <input placeholder="Your name" type="text" className={`${errors.firstName?'error':''}`} {...register('firstName', { required: true, minLength:6 })} tabIndex="1" autoFocus  />
                {errors.firstName && <span className='errorMessage'>Last name is required and min length 6.</span>}
                </fieldset>
                <fieldset>
                    <input placeholder="Your Email Address" type="text" className={`${errors.yourEmail?'error':''}`} {...register('yourEmail', { required: true, minLength:5, pattern: /^\S+@\S+$/i })} tabIndex="2" />
                    {errors.yourEmail && <span className='errorMessage'>Email is required.</span>}
                </fieldset>
                <fieldset>
                    <input placeholder="Your Phone Number" type="tel" className={`${errors.yourEmail?'error':''}`} tabIndex="3" />
                    {errors.yourEmail && <span className='errorMessage'>Phone number is required.</span>}
                </fieldset>
                <fieldset>
                    <input placeholder="Your Web Site (optional)" type="text" {...register('yourWebSite')} tabIndex="4"  />
                </fieldset>
                <fieldset>
                    <textarea placeholder="Type your message here...." {...register('messageText', { required: true })} tabIndex="5"></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
                    <p className="copyright">Designed by <a href="https://github.com/DiorAbjalilov" target="_blank" title="Colorlib">Programmer</a></p>
            </form>
        </div>
    </>
  )
}

export default Form