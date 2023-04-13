import { useParams } from 'react-router-dom'
import ContactForm from "./ContactForm"
import Button from '../button'
import AddressForm from './AddressForm'

export default function Form() {
  const { step } = useParams<{ step: string }>()

  const possibilities = {
    '1': <ContactForm />,
    '2': <AddressForm />
  }

  return (
    <section className="py-8 mt-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-black text-2xl my-4 mb-4">Finalizar Compra</h1>
        <div className="max-w-lg mx-auto">
          {
            // @ts-ignore
            possibilities[step] || <ContactForm />
          }
          <div className="mt-6">
            <Button full text="Próximo" />
          </div>
        </div>
      </div>
    </section>
  )
}
