export default function Header({ logo }) {
  return (
    <header id="header">
      <img src={logo} alt="" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
