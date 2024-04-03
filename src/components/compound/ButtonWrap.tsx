import { RiLinkM } from "react-icons/ri";
import { Button } from "../atoms/button";

const ButtonWrap = () => {
  return (
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
  );
};

export default ButtonWrap;
