import UserItem from "@/components/UserItem";
import { Input } from "@/components/ui/input";
import { useFetchBalanceQuery, useGetAllUsersQuery } from "@/redux/slices/api";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState<string>("");
  const { data: myAccount } = useFetchBalanceQuery();
  const { data: allUsers } = useGetAllUsersQuery(searchInput);
  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );
  if (isLoggedIn)
    return (
      <div className="h-body p-3 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">
          Balance: <span className="text-green-400">${myAccount?.balance}</span>
        </h1>
        <div className="__users_container border rounded p-3">
          <h2 className="font-semibold text-xl">All Users</h2>
          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Type the account holder name to search..."
            className="my-3"
          />
          <div className="__users_list">
            {allUsers?.users.map((user) => {
              return <UserItem key={user._id} data={user} />;
            })}
          </div>
        </div>
      </div>
    );
  else {
    return (
      <>
        <div className="h-body p-3 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">
            You must login to see your dashboard
          </h1>
        </div>
      </>
    );
  }
}
