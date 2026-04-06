import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__actions'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            E-mail me
          </span>
        </a>
      </div>

      <p className='contact__or'>or</p>

      <p className='contact__alt'>
        Fill up the{' '}
        <a
          className='link-primary'
          href='https://forms.visme.co/formsPlayer/90dz3n6m-business-contact-form'
          target='_blank'
          rel='noreferrer'
        >
          Contact Form
        </a>
      </p>
    </section>
  )
}

export default Contact
