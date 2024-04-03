import { Input } from "../atoms/input";

const InputWrap = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <label className="mb-4 text-xl font-bold text-primary dark:text-primary-dark">
        Input
      </label>
      <div className="flex flex-wrap gap-4">
        <Input placeholder="Border input" />
        <Input variant="underline" placeholder="Underline input" />
      </div>
    </div>
  );
};

export default InputWrap;
