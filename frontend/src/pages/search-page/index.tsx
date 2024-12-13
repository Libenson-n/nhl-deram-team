import PageNavigation from "@/components/page-navigation";
import { Players } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DisplayPlayers from "../home-page/display-players";
import { Button } from "@/components/ui/button";
import { Loader, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchPage = () => {
  const [players, setPlayers] = useState<Players[]>();
  const [currentPage, setCurrentPage] = useState<number>(1 || undefined);
  const [totalPages, setTotalPages] = useState<number>();
  const [searchText, setSearchText] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8000/api/player/?page=1&limit=1000`
      );
      const data = await response.json();
      setPlayers(data.data.players);
      setCurrentPage(data.data.pagination.currentPage);
      setTotalPages(data.data.pagination.totalPages);
      return data;
    },
  });

  const handlePageChange = async (direction: string) => {
    let page = currentPage;
    if (direction === "prev" && currentPage != undefined) {
      page = currentPage - 1;
    } else if (direction === "next" && currentPage != undefined) {
      page = currentPage + 1;
    }
    const response = await fetch(
      `http://localhost:8000/api/player/?page=${page}`
    );
    const data = await response.json();
    setPlayers(data.data.players);
    setTotalPages(data.data.pagination.totalPages);
    setCurrentPage(page);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="m-20">
      <form onSubmit={handleSubmit} className="flex m-10">
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
        <>
          <PageNavigation
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
          <ul className="flex flex-wrap gap-1">
            <DisplayPlayers players={players} searchText={searchText} />
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchPage;
