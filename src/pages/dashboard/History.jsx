import { History } from "lucide-react";
import React,{useState} from "react";
import Heading from "@/components/Heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "../layout/DashboardLayout";
import Pagination from "@/components/Pagination";
const transactionHistory = [
  {
    id: 1,
    date: "2023-10-01",
    amount: -50.75,
    currency: "INR",
    category: "Groceries",
    merchant: "Local Mart",
    paymentMethod: "Credit Card",
    location: "123 Main St, City",
  },
  {
    id: 2,
    date: "2023-09-28",
    amount: 2500.0,
    currency: "INR",
    category: "Income",
    merchant: "Company XYZ",
    paymentMethod: "Direct Deposit",
    location: "123 Company Ave, City",
  },
  {
    id: 3,
    date: "2023-09-25",
    amount: -75.0,
    currency: "INR",

    category: "Dining",
    merchant: "Restaurant ABC",
    paymentMethod: "Debit Card",
    location: "456 Oak St, City",
  },

  {
    id: 4,
    date: "2023-09-20",
    amount: -35.25,
    currency: "INR",
    category: "Clothing",
    merchant: "Fashion World",
    paymentMethod: "Credit Card",
    location: "789 High St, City",
  },
  {
    id: 5,
    date: "2023-09-15",
    amount: -20.0,
    currency: "INR",
    category: "Entertainment",
    merchant: "CinemaPlex",
    paymentMethod: "Debit Card",
    location: "101 Movie Rd, City",
  },
  {
    id: 6,
    date: "2023-09-10",
    amount: -120.5,
    currency: "INR",
    category: "Electronics",
    merchant: "Tech Zone",
    paymentMethod: "Credit Card",
    location: "456 Tech Blvd, City",
  },
  {
    id: 7,
    date: "2023-09-05",
    amount: -60.0,
    currency: "INR",
    category: "Dining",
    merchant: "Pizza Palace",
    paymentMethod: "Debit Card",
    location: "789 Pizzeria Ln, City",
  },
  {
    id: 8,
    date: "2023-08-30",
    amount: -45.75,
    currency: "INR",
    category: "Groceries",
    merchant: "SuperMart",
    paymentMethod: "Credit Card",
    location: "456 Grocery St, City",
  },
  {
    id: 9,
    date: "2023-08-25",
    amount: -90.0,
    currency: "INR",
    category: "Shopping",
    merchant: "Mega Mall",
    paymentMethod: "Debit Card",
    location: "101 Mega Ave, City",
  },
  {
    id: 10,
    date: "2023-08-20",
    amount: 500.0,
    currency: "INR",
    category: "Income",
    merchant: "Freelance Gig",
    paymentMethod: "Bank Transfer",
    location: "123 Freelance St, City",
  },
  // Add more transactions as needed
];

function HistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Filter the transactions for the current page
  const currentTransactions = transactionHistory.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <DashboardLayout>
      <Heading
        title="History"
        icon={History}
        bgColor="bg-red-600/30"
        iconColor="text-red-600"
      />

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Currency</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Merchant</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
        {currentTransactions.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell className="text-start">{item.currency}</TableCell>
                <TableCell>{item.category}</TableCell>

                <TableCell>{item.merchant}</TableCell>

                <TableCell>{item.paymentMethod}</TableCell>

                <TableCell>{item.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(transactionHistory.length / rowsPerPage)}
        onPageChange={handlePageChange}
      />
      </div>
    </DashboardLayout>
  );
}

export default HistoryPage;
