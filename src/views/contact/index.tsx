import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef(null)

  const onSend = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!formRef.current) { return }

    emailjs
      .sendForm(
        'service_e0e41ig',
        'template_0mef36j',
        formRef.current,
        'WwUz0Dha33_TxsEpq',
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload()
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error.text)
          alert('Failed to send message. Please try again.')
        },
      )
  }

  return (
    <div className='content-container mx-auto max-w-3xl px-6 pb-6'>
      <h2>Contact Me</h2>
      <p className="mb-8">
        Please use this contact form for booking and general requests.
      </p>
      <div>
        <form ref={formRef} onSubmit={onSend}>
          <div className="grid-cols-2 gap-4 md:grid">
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea maxLength={400} rows={4} name="message" placeholder="Message" required />
          <div className="mt-6 flex justify-center">
            <input type="submit" value="SEND" className="w-1/3 cursor-pointer text-white" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact