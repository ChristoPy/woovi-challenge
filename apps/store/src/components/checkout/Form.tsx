import { Address, Shopper } from "data/model"

export default function Form() {
  return (
    <section className="py-8 mt-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-black text-2xl my-4 mb-4">Finalizar Compra</h1>
        <div className="container mx-auto grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="text-2xl mt-8 my-4 mb-4">Informações de Contato</h2>
            <form className="grid gap-4">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="taxID">CPF</label>
              <input type="text" id="taxID" className="border border-black rounded-lg h-10 px-2" />
            </form>

            <h2 className="text-2xl mt-8 my-4 mb-4">Endereço de Entrega</h2>
            <form className="grid gap-4">
              <label htmlFor="zipCode">CEP</label>
              <input type="text" id="zipCode" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="street">Rua</label>
              <input type="text" id="street" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="number">Número</label>
              <input type="text" id="number" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="complement">Complemento</label>
              <input type="text" id="complement" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="neighborhood">Bairro</label>
              <input type="text" id="neighborhood" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" className="border border-black rounded-lg h-10 px-2" />

              <label htmlFor="state">Estado</label>
              <input type="text" id="state" className="border border-black rounded-lg h-10 px-2" />
            </form>
          </div>
          <div>test</div>
        </div>
      </div>
    </section>
  )
}
