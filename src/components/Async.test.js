import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async post component", () => {
  test("Render posts from async component", async () => {
    render(<Async />);

    const posts = await screen.findAllByRole("listitem");
    expect(posts).not.toHaveLength(0);
  });
});
