import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md"; // + 아이콘
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
    //submit 이벤트는 브라우저에서 새로 고침을 발생시키는데, 이를 방지하기 위해 이 함수를 호출한다.
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); //value ㄱ밧 초기화
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
