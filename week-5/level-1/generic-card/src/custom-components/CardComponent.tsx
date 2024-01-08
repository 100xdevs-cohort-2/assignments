import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardComponentProps } from "@/interfaces/card";
import { Label } from "@/components/ui/label";
import { element } from "prop-types";
const socialMediaHandles = [
  {
    link: "https://google.com",
    name: "google",
    logo: "https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg",
  },
  {
    link: "https://linkedin.com",
    name: "linkedIn",
    logo: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
  },
  {
    logo: "https://cdn1.vectorstock.com/i/1000x1000/47/55/x-logo-twitter-new-icon-vector-48174755.jpg",
  },
];
const CardComponent = ({ name, about, interests }: CardComponentProps) => {
  return (
    <div>
      {" "}
      <Card className="w-[30rem]  border-2 border-black">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{about}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <Label htmlFor="interests-list" className=" font-bold text-md">
            Interests:
          </Label>
          <div id="interests-list">{interests.join(", ")}</div>
        </CardContent>
        <CardFooter>
          <div id="Social-handles" className="flex justify-around w-[100%]">
            {socialMediaHandles.map((element) => {
              return (
                <div className="w-20 ">
                  <img src={element.logo} className="w-[100%] rounded-[100%]" />
                </div>
              );
            })}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComponent;
