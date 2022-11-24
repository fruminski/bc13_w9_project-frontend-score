import { render, screen } from "@testing-library/react";
import App from "./App";

test('Check if H1 exists', () => {
  render(<App/>);
  const h1 = screen.getByRole('heading');
  expect(h1).toHaveTextContent("Live API")
})