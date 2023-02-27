function HeadText(props) {
  return (
    <div>
      <h1>{props.header}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default HeadText;
