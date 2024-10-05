interface ButtonProps {
  text: string
  children: React.ReactNode
}

export const Button = ({ text, children }: ButtonProps) => {
  return (
    <div className="flex flex-col gap-1">
      <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white hover:bg-gray-150">
        {children}
      </button>
      <span className="label-5 text-center text-white">{text}</span>
    </div>
  )
}
