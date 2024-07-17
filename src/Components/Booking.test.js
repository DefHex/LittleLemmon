import {
  render,
  screen,
  act,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Booking from "./Booking";
import user from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

describe("missing text test", () => {
  it("check first name error", async () => {
    const handleSubmit = jest.fn();
    render(<Booking onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/first name is required!/i)).toBeInTheDocument();
    });
  });
  it("check last name error", async () => {
    const handleSubmit = jest.fn();
    render(<Booking onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/last name is required!/i)).toBeInTheDocument();
    });
  });
  it("check email error", async () => {
    const handleSubmit = jest.fn();
    render(<Booking onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/e-mail is required!/i)).toBeInTheDocument();
    });
  });
  it("check time error", async () => {
    const handleSubmit = jest.fn();
    render(<Booking onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/hour is required!/i)).toBeInTheDocument();
      expect(screen.getByText(/minutes are required!/i)).toBeInTheDocument();
    });
  });
});
describe("Check if email is correct", () => {
  it("email check", async () => {
    const handleSubmit = jest.fn();
    render(<Booking onSubmit={handleSubmit} />);
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "John Doe" },
    });

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid email address!/i)).toBeInTheDocument();
    });
  });
});
describe("Correct submission", () => {
  it("enter all user data", async () => {
    const handleSubmit = jest.fn();
    act(() => render(<Booking onSubmit={handleSubmit} />));
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(document.querySelector("#Hour"), {
      target: { value: "18" },
    });
    fireEvent.change(document.querySelector("#Minutes"), {
      target: { value: "15" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2024-07-16" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });
});
