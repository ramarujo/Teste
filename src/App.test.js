import { render, screen } from '@testing-library/react';
import { click } from '@testing-library/user-event/dist/click';
import App from './App';
import NewCostumerForm from './components/Costumer/NewCostumerForm';
import StudentLifeCard from './components/Cards/StudentLifeCard';

describe("Main page", () => {
  it("should render NewCustomerForm component", () => {
    render(<App />);
    expect(screen.getByText("Check your eligibility")).toBeInTheDocument();
  }
  );


});

describe("Form", () => {
  it("should ask for first name", () => {
    render(<NewCostumerForm />);
    expect(screen.getByText("First Name")).toBeInTheDocument();
  });

  it("should ask for middle name", () => {
    render(<NewCostumerForm />);
    expect(screen.getByText("Middle Name")).toBeInTheDocument();
  });

  it("should ask for last name", () => {
    render(<NewCostumerForm />);
    expect(screen.getByText("Last Name")).toBeInTheDocument();
  });

  it("should ask for dob", () => {
    render(<NewCostumerForm />);
    expect(screen.getByText("Date of Birth")).toBeInTheDocument();
  });

  it("should ask for job status", () => {
    render(<NewCostumerForm />);
    expect(screen.getByText("Job Status")).toBeInTheDocument();
  });

  it("should ask for annual income", () => {
    render(<NewCostumerForm />);
    expect(screen.getByText("Annual Income Before Tax:")).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    render(<NewCostumerForm />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  }
  );

  it("should display cards after submit button is clicked", () => {
    render(<NewCostumerForm />);
    click(screen.getByText("Submit"));
    // expect StudentLifeCard to be displayed
    expect(screen.getByText("Student Life Card")).toBeInTheDocument();
  }
  );


} );
