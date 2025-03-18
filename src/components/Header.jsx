import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="Green shopping bag with a golden dollar sign, surrounded by stacks of gold coins, representing wealth, investment, or financial growth"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
