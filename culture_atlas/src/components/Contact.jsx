import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send(
        'service_hyy7agv',
        'template_tdij9cc', 
        data,
        'Jl6lu_7DuHuzURGnn'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          reset();
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Message failed to send.');
        }
      );
  };

  return (
    <div className='Contact'>
        <div className='contact-img'>
            <img src='/images/contact.png'/>
        </div>
        <form onSubmit={handleSubmit(sendEmail)}className='contact-form'>
        <div>
            <label htmlFor="name" >Name</label>
            <input 
            {...register('name', { required: true })} 
            id ='name'
            autoComplete='off'
            />
            {errors.name && <span>Name is required</span>}
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input
            {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i
            })}
            id ='email'
            autoComplete='off'
            />
            {errors.email && <span>Valid email is required</span>}
        </div>

        <div>
            <label htmlFor="message" >Message</label>
            <textarea 
            {...register('message', { required: true })} 
            id='message'
            autoComplete='off'/>
            {errors.message && <span>Message is required</span>}
        </div>

        <button type="submit" className='send'>Send</button>
        </form>
    </div>
  );
};

export default Contact;
