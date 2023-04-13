export default function AddressForm() {
  return (
    <div>
      <h2 className="text-2xl mt-8 my-4 mb-4">Endereço de Entrega</h2>
      <form className="grid gap-4">
        <label htmlFor="zipCode">CEP</label>
        <input type="text" id="zipCode" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="street">Rua</label>
        <input type="text" id="street" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="number">Número</label>
        <input type="text" id="number" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="complement">Complemento</label>
        <input type="text" id="complement" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="neighborhood">Bairro</label>
        <input type="text" id="neighborhood" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />

        <label htmlFor="state">Estado</label>
        <input type="text" id="state" className="border border-black hover:border-gray-700 rounded-lg h-10 px-2" />
      </form>
    </div>
  )
}
