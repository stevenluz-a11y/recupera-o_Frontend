export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-center gap-8 rounded-3xl bg-ink p-8 md:flex-row md:gap-12 md:p-12">
      <div className="flex justify-center md:w-[44%]">
        <img
          src="/public/hero.svg"
          className="w-full max-w-87"
        />
      </div>
      <div className="md:flex-1">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1.5 text-[13px] font-bold text-peach">
          Patinhas felizes, tutores tranquilos.
        </span>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[52px]">
          Cuidado completo em um só <span className="text-peach">lugar.</span>
        </h1>
        <p className="mt-4 max-w-sm text-base leading-7 text-white/85">
          Clientes, pets e serviços organizados para o atendimento do dia a dia.
        </p>
      </div>
    </section>
  )
}