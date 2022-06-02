import "./common.css";

const Title = ({ title }) => {
  return (
    <div className="custom-title">
      <div className="lines-l" />
      <div>{title}</div>
      <div className="lines-r" />
    </div>
  );
};

export default Title;
