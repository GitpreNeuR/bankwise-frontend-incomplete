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
import { useFdModal } from '@/hooks/useModal';
import { FdModalProvider } from './providers/ModalProvider';

const fixedDeposits = [
  {
    accountNumber: "FD001",
    accountHolder: "John Smith",
    principalAmount: 10000,
    interestRate: 5.0,
    tenureMonths: 12,
    maturityAmount: 10500,
    maturityDate: "2024-10-05",
    bankName: "ABC Bank",
  },
  {
    accountNumber: "FD002",
    accountHolder: "Jane Doe",
    principalAmount: 15000,
    interestRate: 4.5,
    tenureMonths: 24,
    maturityAmount: 15750,
    maturityDate: "2025-03-15",
    bankName: "XYZ Bank",
  },
  {
    accountNumber: "FD003",
    accountHolder: "David Johnson",
    principalAmount: 20000,
    interestRate: 6.0,
    tenureMonths: 36,
    maturityAmount: 21200,
    maturityDate: "2026-07-22",
    bankName: "PQR Bank",
  },
  // Add 10 more fixed deposit objects below
  {
    accountNumber: "FD004",
    accountHolder: "Emily Brown",
    principalAmount: 25000,
    interestRate: 5.5,
    tenureMonths: 18,
    maturityAmount: 26250,
    maturityDate: "2025-09-10",
    bankName: "LMN Bank",
  },
  {
    accountNumber: "FD005",
    accountHolder: "Michael Jackson",
    principalAmount: 30000,
    interestRate: 4.0,
    tenureMonths: 60,
    maturityAmount: 32400,
    maturityDate: "2027-12-30",
    bankName: "JKL Bank",
  },
  {
    accountNumber: "FD006",
    accountHolder: "Sarah Wilson",
    principalAmount: 18000,
    interestRate: 5.8,
    tenureMonths: 24,
    maturityAmount: 19044,
    maturityDate: "2025-11-18",
    bankName: "OPQ Bank",
  },
  {
    accountNumber: "FD007",
    accountHolder: "Robert Miller",
    principalAmount: 12000,
    interestRate: 4.2,
    tenureMonths: 48,
    maturityAmount: 13440,
    maturityDate: "2026-05-02",
    bankName: "RST Bank",
  },
  {
    accountNumber: "FD008",
    accountHolder: "Lisa Davis",
    principalAmount: 22000,
    interestRate: 5.2,
    tenureMonths: 36,
    maturityAmount: 23232,
    maturityDate: "2026-09-21",
    bankName: "UVW Bank",
  },
  {
    accountNumber: "FD009",
    accountHolder: "James Wilson",
    principalAmount: 17000,
    interestRate: 4.8,
    tenureMonths: 30,
    maturityAmount: 17856,
    maturityDate: "2026-04-14",
    bankName: "XYZ Bank",
  },
  {
    accountNumber: "FD010",
    accountHolder: "Maria Garcia",
    principalAmount: 35000,
    interestRate: 6.5,
    tenureMonths: 48,
    maturityAmount: 37100,
    maturityDate: "2026-11-30",
    bankName: "ABC Bank",
  },
  // Add more fixed deposit objects as needed
];


export default function FixedDepositsPage() {
  const modal=useFdModal();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Filter the transactions for the current page
    const currentDeposits = fixedDeposits.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    
    <>
    
  <div className='px-4 flex items-center justify-between'>
  <FdModalProvider/>
<Title className='text-2xl font-semibold'>Fixed Deposits</Title>
<Button variant="primary" onClick={modal.onOpen}>Add</Button>
</div>
    <Table>
          <TableHeader>
            <TableRow>
            <TableHead>Account Number</TableHead>
          <TableHead>Account Holder</TableHead>
          <TableHead>Principal Amount</TableHead>
          <TableHead>Interest Rate</TableHead>
          <TableHead>Tenure Months</TableHead>
          <TableHead>Maturity Amount</TableHead>
          <TableHead>Maturity Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
{currentDeposits.map((item,index) => (
              <TableRow key={index}>
                <TableCell>{item.accountNumber}</TableCell>
            <TableCell>{item.accountHolder}</TableCell>
            <TableCell>{item.principalAmount}</TableCell>
            <TableCell>{item.interestRate}</TableCell>
            <TableCell>{item.tenureMonths}</TableCell>
            <TableCell>{item.maturityAmount}</TableCell>
            <TableCell>{item.maturityDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(fixedDeposits.length / rowsPerPage)}
        onPageChange={handlePageChange}
      />
    </>
    
  );
}
