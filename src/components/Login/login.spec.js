import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../Login";
import "mutationobserver-shim";

test("User Name", async () => {
  const { container, debug } = render(<Login />);
  debug(screen.getByText("Submit"));
  await fireEvent.click(screen.getByText("Submit"));

  await waitFor(() => debug(container));
});
