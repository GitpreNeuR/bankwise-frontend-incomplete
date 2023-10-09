import { Button } from '@/components/ui/button';
import React,{useState} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from './Pagination';
import { Title } from '@tremor/react';

const recurringDeposits = [
    {
      accountNumber: "RD001",
      accountHolder: "John Doe",
      depositAmount: 1000,
      frequency: "Monthly",
      interestRate: 6.5,
      maturityDate: "2023-12-31",
    },
    {
      accountNumber: "RD002",
      accountHolder: "Jane Smith",
      depositAmount: 2000,
      frequency: "Quarterly",
      interestRate: 7.0,
      maturityDate: "2024-06-30",
    },
    {
      accountNumber: "RD003",
      accountHolder: "Alice Johnson",
      depositAmount: 1500,
      frequency: "Monthly",
      interestRate: 6.0,
      maturityDate: "2024-04-30",
    },
    {
      accountNumber: "RD004",
      accountHolder: "Robert Brown",
      depositAmount: 2500,
      frequency: "Monthly",
      interestRate: 6.25,
      maturityDate: "2023-11-30",
    },
    {
      accountNumber: "RD005",
      accountHolder: "Sarah Adams",
      depositAmount: 1800,
      frequency: "Quarterly",
      interestRate: 6.75,
      maturityDate: "2024-08-31",
    },
    {
      accountNumber: "RD006",
      accountHolder: "Michael Wilson",
      depositAmount: 1200,
      frequency: "Monthly",
      interestRate: 6.2,
      maturityDate: "2024-03-31",
    },
    {
      accountNumber: "RD007",
      accountHolder: "Emily Davis",
      depositAmount: 3000,
      frequency: "Monthly",
      interestRate: 6.4,
      maturityDate: "2023-10-31",
    },
    {
      accountNumber: "RD008",
      accountHolder: "William White",
      depositAmount: 2200,
      frequency: "Quarterly",
      interestRate: 6.8,
      maturityDate: "2024-09-30",
    },
    {
      accountNumber: "RD009",
      accountHolder: "Olivia Martinez",
      depositAmount: 1900,
      frequency: "Monthly",
      interestRate: 6.1,
      maturityDate: "2024-05-31",
    },
    {
      accountNumber: "RD010",
      accountHolder: "James Lee",
      depositAmount: 2700,
      frequency: "Monthly",
      interestRate: 6.3,
      maturityDate: "2023-09-30",
    },
  ];
  

export default function RecurringDepositsPage() {

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Filter the transactions for the current page
    const currentDeposits = recurringDeposits.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    
    <>
<div className='px-4 flex items-center justify-between'>
<Title className='text-2xl font-semibold'>Recurring Deposits</Title>
<Button variant="primary">Add</Button>
</div>    <Table>
          <TableHeader>
            <TableRow>
            <TableHead>Account Number</TableHead>
          <TableHead>Account Holder</TableHead>
          <TableHead>Deposit Amount</TableHead>
      <TableHead>Frequency</TableHead>
      <TableHead>Interest Rate</TableHead>
          <TableHead>Maturity Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
{currentDeposits.map((item,index) => (
              <TableRow key={index}>
                <TableCell>{item.accountNumber}</TableCell>
            <TableCell>{item.accountHolder}</TableCell>
            <TableCell>{item.depositAmount}</TableCell>
            <TableCell>{item.frequency}</TableCell>
            <TableCell>{item.interestRate}</TableCell>
            <TableCell>{item.maturityDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(recurringDeposits.length / rowsPerPage)}
        onPageChange={handlePageChange}
      />
    </>
    
  );
}
