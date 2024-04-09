import ButtonWrap from "./ButtonWrap";
import InputWrap from "./InputWrap";
import SelectWrap from "./SelectWrap";
import TableWrap from "./TableWrap";
import TextareaWrap from "./TextareaWrap";

const ElementWrapper = () => {
  return (
    <div className="w-screen h-screen p-10 space-y-10 bg-primary dark:bg-primary-dark">
      <ButtonWrap />
      <SelectWrap />
      <InputWrap />
      <TextareaWrap />
      <TableWrap />
    </div>
  );
};

export default ElementWrapper;
