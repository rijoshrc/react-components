import ButtonWrap from "./ButtonWrap";
import SelectWrap from "./SelectWrap";

const ElementWrapper = () => {
  return (
    <div className="w-screen h-screen p-10 space-y-10 bg-primary dark:bg-primary-dark">
      <ButtonWrap />
      <SelectWrap />
    </div>
  );
};

export default ElementWrapper;
