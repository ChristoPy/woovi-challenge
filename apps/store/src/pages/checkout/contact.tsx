import { useNavigate } from "react-router-dom";
import Form from "../../components/form";
import { useState } from "react";
import Header from "../../components/header";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    taxID: ""
  });

  return (
    <>
      <Header noCartIcon />
      <section className="py-8 mt-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-black text-2xl my-4 mb-4">Finalizar Compra</h1>
          <div className="max-w-lg mx-auto">
            <Form
              title="Informações de Contato"
              onChange={({ key, value }) => setFormData({ ...formData, [key]: value })}
              onSubmit={() => {
                navigate("/pagamento/endereco")
              }}
              inputs={[
                { label: "Nome", id: "name" },
                { label: "Email", id: "email", type: "email" },
                { label: "Telefone", id: "phone", type: "phone" },
                { label: "CPF", id: "taxID" }
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
