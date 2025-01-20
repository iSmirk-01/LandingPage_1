interface Props {
    icon: React.ReactNode;
    stat: string;
    from: string;
}

const StatComponent = ({ icon, stat, from }: Props) => {
  return (
    <div className="flex gap-5 w-[200px] items-center justify-start">
      <span>{icon}</span>
      <div className="flex flex-col ">
        <div className="font-semibold text-2xl">{stat}</div>
        <p>{from}</p>
      </div>
    </div>
  );
}

export default StatComponent
