export default function Timer(props) {
  return (
    <section className="timer">
      <p>
        Your Timer: <label>{props.minutes}</label>:
        <label>{props.seconds % 60}</label>
      </p>
    </section>
  );
}
