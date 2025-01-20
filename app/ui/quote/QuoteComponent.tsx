import Quotes from "../svg/Quotes";


interface Props {
    logo: React.ReactNode;
    testimonial: string
    name: string
    company: string
    css: string
}

function QuoteComponent({ logo, testimonial, name, company, css }: Props) {
  return (
    <div className={`${css} flex items-center flex-col max-w-[400px] gap-4 bg-white p-9 rounded-md`}>
      <div className="flex self-start">{logo}</div>
      <div className="relative">
            {<Quotes className="absolute -top-1 -left-6" />}
            <p className="prose">{testimonial}</p>
      </div>
      <div className="self-start">
          <p className="font-bold">{name}</p>
          <p className="text-sm text-slate-500">{company}</p>
      </div>
    </div>
  )
}

export default QuoteComponent
