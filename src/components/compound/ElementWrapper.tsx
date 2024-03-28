import { Button } from "../atoms/Button";
import { RiLinkM } from "react-icons/ri";

const ElementWrapper = () => {
  return (
    <div className="w-screen h-screen p-10 space-y-10 bg-primary dark:bg-primary-dark">
      <div className="flex flex-col items-start justify-center">
        <label className="mb-4 text-xl font-bold text-primary dark:text-primary-dark">
          Buttons
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Primary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" variant="outline">
            <RiLinkM size={20} /> Icon button
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <label className="mb-4 text-xl font-bold text-primary dark:text-primary-dark">
          Switch
        </label>
        <div className="flex flex-wrap gap-4"></div>
      </div>
    </div>
  );
};

export default ElementWrapper;
