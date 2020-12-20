import {
  SelectFormContainer,
  SelectFormTextWrapper,
  SelectItem,
} from "../Styled";
const SelectForm = ({ setRole, setRegOpen }) => {
  return (
    <>
      <SelectFormTextWrapper>
        <span>선택해주세요.</span>
      </SelectFormTextWrapper>
      <SelectFormContainer>
        <SelectItem
          onClick={() => {
            setRole(3);
            setRegOpen(true);
          }}
        >
          <label>
            <input type="radio" />
            학생
          </label>
        </SelectItem>
        <SelectItem
          onClick={() => {
            setRole(2);
            setRegOpen(true);
          }}
          props={true}
        >
          <label className="teacher">
            <input type="radio" />
            교사
          </label>
        </SelectItem>
      </SelectFormContainer>
    </>
  );
};
export default SelectForm;
