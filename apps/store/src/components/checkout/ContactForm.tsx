export default function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl mt-8 my-4 mb-4">Informações de Contato</h2>
      <form className="grid gap-4">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="phone">Telefone</label>
        <input type="tel" id="phone" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="taxID">CPF</label>
        <input type="text" id="taxID" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />
      </form>
    </div>
  )
}
