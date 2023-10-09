import React from "react";
import { AreaChart, Card, Metric, Title } from "@tremor/react";
import Heading from "@/components/Heading";
import { LayoutDashboard } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import { useUser } from "@clerk/clerk-react";
 


const chartdata = [
  { month: "Jan", expense: 2000 },
  { month: "Feb", expense: 2480 },
  { month: "March", expense: 2420 },
  { month: "April", expense: 3210 },
  { month: "May", expense: 5250 },
  { month: "June", expense: 3300 },
  { month: "July", expense: 2270 },
  { month: "Aug", expense: 6280 },
  { month: "Sept", expense: 2230 },
  { month: "Oct", expense: 2440 },
  { month: "Nov", expense: 4260 },
  { month: "Dec", expense: 3290 },
];

// You can add more data for additional months if needed.

const DashBoard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  
  }
  const dataFormatter = (number) =>
    `₹${Intl.NumberFormat("en-IN").format(number)}`;

  return (
    <DashboardLayout>
      <Heading
        title="Dashboard"
        icon={LayoutDashboard}
        bgColor="bg-purple-600/30"
        iconColor="text-purple-600"
      />

      
  <div className="flex flex-col  space-y-32 mt-12">
      <div>
      <Title className='mb-7 pl-4 text-2xl font-semibold'>Account Details</Title>
        <div className="flex px-1 py-3 space-x-9">
          <Card
            decoration="top"
            decorationColor="violet"
            className="flex flex-col shadow-md space-y-3"
          >
            <Title>Account Number : 2817483782718</Title>
            <Title>Account Type : Savings</Title>
            <Title>Account Holder : Devang Banta</Title>
            <Title>Balance : 10000</Title>
          </Card>
          <Card
            decoration="top"
            decorationColor="teal"
            className="flex flex-col shadow-md space-y-3"
          >
            <Title>Account Number : 2817483782338</Title>
            <Title>Account Type : Current</Title>
            <Title>Account Holder : Devang Banta</Title>
            <Title>Balance : 20000</Title>
          </Card>
        </div>
      </div>

      <div>
        <Title className='pl-4 text-2xl font-semibold'>Monthly Expenses</Title>{" "}
        <AreaChart
          showLegend
          index="month"
          className="text-sm"
          data={chartdata}
          categories={["expense"]}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      </div>
      </div>
    </DashboardLayout>
  );
};

export default DashBoard;
