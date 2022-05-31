import "./common.css";

const Title = ({ title }) => {
  return (
    <div className="custom-title">
      <div className="lines-l" />
      <h2>{title}</h2>
      <div className="lines-r" />
    </div>
  );
};

export default Title;
