import { Players } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DisplayPlayers from "../home-page/display-players";
import { Button } from "@/components/ui/button";
import { Loader, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchPage = () => {
  const [players, setPlayers] = useState<Players[]>();
  const [searchText, setSearchText] = useState("");

  const { isPending } = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8000/api/player/?page=1&limit=1000`
      );
      const data = await response.json();
      setPlayers(data.data.players);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit} className="flex m-14">
        <Input name="search" value={searchText} onChange={handleSearchInput} />
        <Button variant={"ghost"} className="text-gray-700" type="submit">
          <Search />
        </Button>
      </form>
      {isPending ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <ul className="flex flex-wrap gap-1">
          <DisplayPlayers players={players} searchText={searchText} />
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
