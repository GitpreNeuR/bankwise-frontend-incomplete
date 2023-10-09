import React,{useState} from 'react'
import { Dialog,DialogContent,DialogOverlay } from '@/components/ui/dialog';
import { Input } from "@/components/ui/Input"
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/Label"
import { useCardModal } from '@/hooks/useModal';


function FdModal() {

  const modal=useCardModal();
    const [depositInfo, setDepositInfo] = useState({
      accountNumber: '',
      accountHolder: '',
      principalAmount: '',
      interestRate: '',
      tenureMonths: '',
      maturityAmount: '',
      maturityDate: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    setDepositInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
      };

      
    
      return (
        <Dialog open={modal.isOpen}  onOpenChange={modal.onClose}>
        <DialogOverlay />
          <DialogContent>
            
            
          <form>
          
          <Label htmlFor="accountNumber">Account Number:</Label>
          <Input
            type="text"
            name="accountNumber"
            value={depositInfo.accountNumber}
            onChange={handleChange}
          />
        
        
          <Label htmlFor="accountHolder">Account Holder:</Label>
          <Input
            type="text"
            name="accountHolder"
            value={depositInfo.accountHolder}
            onChange={handleChange}
          />
        
        
          <Label htmlFor="principalAmount">Principal Amount:</Label>
          <Input
            type="text"
            name="principalAmount"
            value={depositInfo.principalAmount}
            onChange={handleChange}
          />
        
        
          <Label htmlFor="interestRate">Interest Rate:</Label>
          <Input
            type="text"
            name="interestRate"
            value={depositInfo.interestRate}
            onChange={handleChange}
          />
        
        
          <Label htmlFor="tenureMonths">Tenure Months:</Label>
          <Input
            type="text"
            name="tenureMonths"
            value={depositInfo.tenureMonths}
            onChange={handleChange}
          />
        
        
          <Label htmlFor="maturityAmount">Maturity Amount:</Label>
          <Input
            type="text"
            name="maturityAmount"
            value={depositInfo.maturityAmount}
            onChange={handleChange}
          />
        
        
          <Label htmlFor="maturityDate">Maturity Date:</Label>
          <Input
            type="text"
            name="maturityDate"
            value={depositInfo.maturityDate}
            onChange={handleChange}
          />
        
              
        <Button variant="primary" className="mt-4 w-full" type="submit">Add Card</Button>

            </form>
            
          </DialogContent>
        </Dialog>
        
      );
    }

export default FdModal