type A = {
  type: "basic";
  name: string;
  email?: string;
};
type B = {
  type: "advanced";
  name: string;
};

type C = A | B;
function Component(props: C) {
  const { type, name } = props;

  const alertType = type === "basic" ? "success" : "danger";
  const className = `alert alert-${alertType}`;
  if (type === "basic") {
    return (
      <article className={className}>
        <h2>user: {name}</h2>
        <h2>email : {props.email}</h2>
      </article>
    );
  }
  return (
    <article className={className}>
      <h2>user: {name}</h2>
    </article>
  );
}
export default Component;
