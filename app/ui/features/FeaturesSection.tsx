import { FeaturesArray } from "./FeaturesArray";

function Features() {
  return (
    <div className="min-h-[748px] w-full flex flex-col gap-20">
      <div className="flex flex-col items-center justify-center pt-20 w-full gap-4">
        <h1 className="font-bold text-5xl">Tailor-made features</h1>
        <p className="prose text-center">
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center px-20 h-[60%] w-full gap-x-16 gap-y-14">
        {FeaturesArray.map((box, index) => (
          <div key={index} className="flex items-center justify-center flex-col gap-2 mb-20">
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
