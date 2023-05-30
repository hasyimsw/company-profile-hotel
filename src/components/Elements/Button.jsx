export default function Button(proops) {
  const { children, variant, onClick } = proops

  return (
    <button onClick={onClick} className={`text-[15px] tracking-[3px] font-tertiary uppercase text-white flex-1 transition-all px-8 flex justify-center items-center ${variant}`}>
      {children}
    </button>
  )
}
