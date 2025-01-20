import { FeaturesArray } from "./FeaturesArray";

function Features() {
  return (
    <div className="h-[748px] w-full">
      <div className="flex flex-col items-center justify-center pt-20 w-full gap-5">
        <h1 className="font-bold text-5xl">Tailor-made features</h1>
        <p className="prose text-center">
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>
      <div className="grid grid-cols-3 place-items-center px-20 h-[60%] w-full gap-x-16">
        {FeaturesArray.map((box, index) => (
          <div key={index} className="flex items-center justify-center flex-col gap-2">
            {box.icon}
            <h3 className="font-bold text-3xl">{box.title}</h3>
            <p className="text-center">{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features
