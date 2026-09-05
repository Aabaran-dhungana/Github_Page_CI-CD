import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";

describe("HomePage", () => {
  it("renders the site logo/brand", () => {
    render(<HomePage />);
    const logos = screen.getAllByText("myshop");
    expect(logos.length).toBeGreaterThan(0);
  });

  it("renders the contact email in the footer", () => {
    render(<HomePage />);
    expect(screen.getByText(/bhattsameer4447@gmail.com/i)).toBeInTheDocument();
  });
});
