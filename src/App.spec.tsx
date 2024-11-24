import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should have title", () => {
    const { getByText } = render(<App />);

    expect(getByText("Vite + React")).toBeInTheDocument();
  });
});
