import ButtonWrap from "./ButtonWrap";
import InputWrap from "./InputWrap";
import ProgressWrap from "./ProgressWrap";
import SelectWrap from "./SelectWrap";
import TableWrap from "./TableWrap";
import TextareaWrap from "./TextareaWrap";

const ElementWrapper = () => {
  return (
    <div className="w-screen h-screen px-10 pt-20 mt-10 space-y-10 overflow-auto bg-primary dark:bg-primary-dark">
      <ButtonWrap />
      <SelectWrap />
      <InputWrap />
      <TextareaWrap />
      <TableWrap />
      <ProgressWrap />
    </div>
  );
};

export default ElementWrapper;
