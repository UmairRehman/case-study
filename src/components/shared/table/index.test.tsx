import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DataTable } from "./"; // Adjust the import path

// Mock components
jest.mock("../../../components/ui/button", () => ({
  Button: (props) => <button {...props}>{props.children}</button>,
}))

jest.mock("../../../components/ui/input", () => ({
  Input: (props) => <input {...props} />,
}));

jest.mock("../../../components/ui/table", () => ({
  Table: (props) => <table {...props}>{props.children}</table>,
  TableBody: (props) => <tbody {...props}>{props.children}</tbody>,
  TableCell: (props) => <td {...props}>{props.children}</td>,
  TableHead: (props) => <th {...props}>{props.children}</th>,
  TableHeader: (props) => <thead {...props}>{props.children}</thead>,
  TableRow: (props) => <tr {...props}>{props.children}</tr>,
}));

const columns = [
  {
    id: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  },
  {
    id: "amount",
    header: "Amount",
    cell: (info) => info.getValue(),
  },
];

const data = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
];

describe("DataTable", () => {
  it("should render the data table with data", async () => {
    render(<DataTable columns={columns} data={data} />);

    // Check table headers
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
  });

  it("should handle pagination", async () => {
    // Test data to simulate pagination if applicable
    const paginatedData = [
      { id: 1, amount: 100 },
      { id: 2, amount: 200 },
      { id: 3, amount: 300 },
    ];

    render(<DataTable columns={columns} data={paginatedData} />);

    // Check for pagination buttons and interaction
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();

    // Mock page change
    fireEvent.click(screen.getByText("Next"));

    await waitFor(() => {
      // Check if pagination has worked (assuming data changes on page change)
      // Add necessary assertions based on how pagination is handled
    });
  });
});
