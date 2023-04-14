export interface InputProps {
  label: string
  type?: string
  id: string
  onChange?: (value: string) => void
}

export default function Input({label, type, id, onChange}: InputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        required
        type={type || 'text'}
        id={id}
        className="border border-black hover:border-gray-700 rounded h-10 px-2"
        onChange={(event) => onChange && onChange(event.target.value)}
      />
    </>
  )
}
