import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { useSendMoneyMutation } from "@/redux/slices/api";
import { toast } from "sonner";

export default function UserItem({ data }: { data: UserItem }) {
  const [inputMoney, setInputMoney] = useState<string>("0");
  const [modalState, setModalState] = useState<boolean>(false);
  const [sendMoney] = useSendMoneyMutation();

  const inputRegex = new RegExp("[0-9]+");

  const handleSendMoney = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (Number(inputMoney) <= 0) {
        toast("Increase the amount first!");
      } else {
        await sendMoney({
          amount: Number(inputMoney),
          toAccountId: data._id,
        });
        setModalState(false);
        toast(
          `${inputMoney} successfully sent to ${data.firstName} ${data.lastName}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="rounded p-3 w-full flex justify-between items-center">
      <div className="">
        <h3 className="font-bold">
          {data.firstName} {data.lastName}
        </h3>
        <p className="text-gray-500 text-xs">{data.email}</p>
      </div>
      <Dialog open={modalState} onOpenChange={setModalState}>
        <DialogTrigger asChild>
          <Button>Send Money</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Send {data.firstName} {data.lastName} some bucks?
            </DialogTitle>
          </DialogHeader>
          <div>
            <form onSubmit={handleSendMoney} className="flex gap-3">
              <Input
                value={inputMoney}
                onChange={(e) =>
                  inputRegex.test(e.target.value)
                    ? setInputMoney(e.target.value)
                    : toast("Cannot type invalid text!")
                }
                placeholder="Enter the amount"
                required
              />
              <Button type="submit" variant="default">
                Confirm
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
