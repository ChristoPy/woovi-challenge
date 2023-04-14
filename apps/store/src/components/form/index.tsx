import Button from "../button";
import Input, { InputProps } from "../input";

export interface FormProps {
  title: string
  inputs: InputProps[]
  onSubmit: () => void
  onChange?: ({ key, value }: { key: string, value: string }) => void
}

export default function Form({ title, inputs, onSubmit, onChange }: FormProps) {
  return (
    <div>
      <h2 className="text-2xl mt-8 my-4 mb-4">{title}</h2>
      <form className="grid gap-4" onSubmit={onSubmit}>
        {
          inputs.map(input => <Input key={input.id} {...input} onChange={(value) =>  { onChange && onChange({ key: input.id, value }) }} />)
        }
          <div className="mt-6">
            <Button full text="Próximo" />
          </div>
      </form>
    </div>
  )
}
