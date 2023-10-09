import React,{useState} from 'react'
import Cards from 'react-credit-cards'
import { Dialog,DialogContent,DialogOverlay } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/Label"
import {useCardModal} from '@/hooks/useModal';


function CardModal() {

  const modal=useCardModal();
    const [cardInfo, setCardInfo] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
      };

      
    
      return (
        <Dialog open={modal.isOpen}  onOpenChange={modal.onClose}>
        <DialogOverlay />
          <DialogContent>
            
            
            <div>
              <Cards
                number={cardInfo.number}
                name={cardInfo.name}
                expiry={cardInfo.expiry}
                cvc={cardInfo.cvc}
              />
            </div>
            <form>
              <Label htmlFor="number">Card Number:</Label>
              <Input
                type="text"
                id="number"
                name="number"
                
                value={cardInfo.number}
                onChange={handleInputChange}
              />
              <Label htmlFor="name">Cardholder Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={cardInfo.name}
                onChange={handleInputChange}
              />
              <Label htmlFor="expiry">Expiry Date:</Label>
              <Input
                type="text"
                id="expiry"
                name="expiry"
                value={cardInfo.expiry}
                onChange={handleInputChange}
              />
              <Label htmlFor="cvc">CVC:</Label>
              <Input
                type="text"
                id="cvc"
                name="cvc"
                value={cardInfo.cvc}
                onChange={handleInputChange}
              />
              
              
      <Button variant="primary" className="mt-4 w-full" type="submit">Add Card</Button>

            </form>
            
          </DialogContent>
        </Dialog>
        
      );
    }

export default CardModal