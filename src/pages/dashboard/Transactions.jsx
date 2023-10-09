import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { ArrowLeftRight } from 'lucide-react';
import toast from 'react-hot-toast';
import DashboardLayout from '../layout/DashboardLayout';
function TransactionPage() {
  

  const handleTransfer = () => {
   toast.success("Transferred Successfully");
  };

  return (
    <DashboardLayout>
      <Heading title="Transactions" bgColor="bg-cyan-600/30" icon={ArrowLeftRight} iconColor="text-cyan-600"/>
      <div className="flex flex-col  bg-gray-100">
        <div className="p-8 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Transfer Funds</h2>
          <form>
            <div className="mb-4">
              <Label >From Account</Label>
              <Input className="mt-1 w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <Label >To Account</Label>
              <Input className="mt-1 w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <Label >Amount</Label>
              <Slider className="w-full" min={0} max={1000} step={10}>
                
              </Slider>
            </div>
            <div className="mb-4">
              <Label >Transfer Type</Label>
              <RadioGroup defaultValue="oneTime">
                <RadioGroupItem value="oneTime">One Time</RadioGroupItem>
                <RadioGroupItem value="recurring">Recurring</RadioGroupItem>
              </RadioGroup>
            </div>
            <Dialog>
              <DialogTrigger as={Button} className="w-full py-2 px-4 bg-blue-600 text-white rounded">
                Transfer
              </DialogTrigger>
              <DialogContent className="p-4 bg-white rounded shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Confirm Transfer</h3>
                <p>Are you sure you want to transfer funds?</p>
                <div className="mt-4 flex justify-end">
                  <Button onClick={handleTransfer} className="mr-2">Confirm</Button>
                  <Button>Cancel</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Collapsible className="mt-4">
              <CollapsibleTrigger as={Button} className="w-full py-2 px-4 bg-blue-600 text-white rounded">
                More Info
      </CollapsibleTrigger>
              <CollapsibleContent as="div" >
                Transfers are processed instantly but may take up to 24 hours to appear in the recipient's account.
              </CollapsibleContent>
            </Collapsible>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TransactionPage;
