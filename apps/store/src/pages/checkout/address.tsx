import { useNavigate } from "react-router-dom";
import Form from "../../components/form";
import { useState } from "react";

export default function Address() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: ""
  });

  return (
    <section className="py-8 mt-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-black text-2xl my-4 mb-4">Finalizar Compra</h1>
        <div className="max-w-lg mx-auto">
          <Form
            title="Endereço de Entrega"
            onChange={({ key, value }) => setFormData({ ...formData, [key]: value })}
            onSubmit={() => {
              navigate("/pagamento/finalizar")
            }}
            inputs={[
              { label: "CEP", id: "zipCode" },
              { label: "Rua", id: "street" },
              { label: "Número", id: "number" },
              { label: "Complemento", id: "complement" },
              { label: "Bairro", id: "neighborhood" },
              { label: "Cidade", id: "city" },
              { label: "Estado", id: "state" }
            ]}
          />
        </div>
      </div>
    </section>
  )
}
