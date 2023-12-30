import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppFunctional from "../components/AppFunctional";

describe("AppFunctional", () => {
  test("koordinat ve adımları test et", () => {
    render(<AppFunctional />);
    const coordinates = screen.getByText("Koordinatlar (2, 2)");
    const steps = screen.getByText("0 kere ilerlediniz");
    expect(coordinates).toBeInTheDocument();
    expect(steps).toBeInTheDocument();
  });

  test("butonları test et", () => {
    render(<AppFunctional />);
    const upButton = screen.getByText("YUKARI");
    const downButton = screen.getByText("AŞAĞI");
    const leftButton = screen.getByText("SOL");
    const rightButton = screen.getByText("SAĞ");
    const resetButton = screen.getByText("reset");
    expect(upButton).toBeInTheDocument();
    expect(downButton).toBeInTheDocument();
    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  test("input değeri güncelleniyor mu", () => {
    render(<AppFunctional />);
    const emailInput = screen.getByPlaceholderText("email girin");

    fireEvent.change(emailInput, { target: { value: "ornek@gmail.com" } });
    expect(emailInput.value).toBe("ornek@gmail.com");
  });
});
