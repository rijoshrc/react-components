import { Button } from "../atoms/Button";

const ElementWrapper = () => {
  return (
    <div className="w-screen h-screen p-10">
      <div className="flex flex-col items-start justify-center">
        <label className="mb-4 text-2xl font-bold">Buttons</label>
        <div className="flex items-start justify-center gap-4">
          <Button>Primary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  );
};

export default ElementWrapper;
