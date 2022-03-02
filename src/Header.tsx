export default function Header(props: any) {
  return (
    <div className="header">
      <h1>{props.titleText}</h1>
      <h3>{props.subTitleText}</h3>
    </div>
  );
}
