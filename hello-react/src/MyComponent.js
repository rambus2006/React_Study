const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
      <br />
      children 값은 {props.children}입니다.
    </div>
  );
};
// props의 기본값 설정
MyComponent.defaultProps = {
  name: "기본이름",
};
export default MyComponent;
