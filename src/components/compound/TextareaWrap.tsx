import { Textarea } from "../atoms/textarea";

const TextareaWrap = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <label className="mb-4 text-xl font-bold text-primary dark:text-primary-dark">
        Textarea
      </label>
      <div className="flex flex-wrap w-1/2 gap-4">
        <Textarea placeholder="Border input" />
      </div>
    </div>
  );
};

export default TextareaWrap;
