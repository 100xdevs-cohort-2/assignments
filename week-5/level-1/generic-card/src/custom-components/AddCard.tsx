import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CardComponentProps } from "@/interfaces/card";

const AddCard = ({ setCardList }) => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [interest, setInterest] = useState("");
  const [interestList, setInterestList] = useState<string[]>([]);

  return (
    <div className="w-[400px] px-10">
      <h2 className="pb-3 font-bold font-mono text-[2rem]">Add User Card</h2>
      <div className="flex items-center gap-2 justify-between">
        <Label htmlFor="name">Name:</Label>
        <Input
          className="w-[200px]"
          id="name"
          value={name}
          onInput={(e) => setName(e.target?.value)}
          type="text"
          placeholder="name"
        />
      </div>
      <div className="flex items-center gap-2 justify-between pt-5">
        <Label htmlFor="about">About:</Label>
        <Input
          className="w-[200px]"
          id="about"
          value={about}
          onInput={(e) => setAbout(e.target?.value)}
          type="text"
          placeholder="About"
        />
      </div>
      <div className="">
        <div className="flex items-center gap-2 justify-between pt-5">
          <Label htmlFor="interest">Interests:</Label>
          <Input
            className="w-[200px]"
            id="interest"
            value={interest}
            onInput={(e) => setInterest(e.target?.value)}
            type="text"
            placeholder="interest"
          />
        </div>
        <div className="flex justify-end pt-2">
          <Button
            variant={"outline"}
            onClick={() => {
              if (interest && interest.length > 0)
                setInterestList([...interestList, interest]);
            }}
          >
            Add Interest
          </Button>
        </div>
        {interestList && interestList.length > 0 && (
          <div>
            <Label>Your Interests</Label>
            <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
              {interestList.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ScrollArea>
          </div>
        )}
      </div>
      <div className="pt-4">
        <Button
          onClick={() => {
            setCardList((prev: CardComponentProps[]) => [
              ...prev,
              {
                name: name,
                interests: interestList,
                about: about,
              },
            ]);
          }}
          className="w-[100%] "
          variant={"outline"}
        >
          Add Card
        </Button>
      </div>
    </div>
  );
};

export default AddCard;
