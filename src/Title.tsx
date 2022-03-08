export default function Title(props: any) {
  return (
    <div className="title">
      <h1>{props.titleText}</h1>
      <h3>{props.subTitleText}</h3>
    </div>
  );
}
