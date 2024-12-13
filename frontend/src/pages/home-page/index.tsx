import { Button } from "@/components/ui/button";
import { useState } from "react";
import DisplayPlayers from "./display-players";
import { teams } from "@/lib/teams";
import DisplayBanner from "./display-banner";
import PageNavigation from "@/components/page-navigation";
import { Players } from "@/types";

const HomePage = () => {
  const [players, setPlayers] = useState<Players[]>();
  const [position, setPosition] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1 || undefined);
  const [totalPages, setTotalPages] = useState<number>();
  const [toggleBanner, setToggleBanner] = useState("");

  const fetchPlayersByTeam = async (team: string) => {
    const response = await fetch(
      `http://localhost:8000/api/player/team/${team}`
    );
    const data = await response.json();
    setToggleBanner("team");
    setPlayers(data.data);
  };

  const fetchPlayersByPosition = async (position: string) => {
    setPosition(position);
    const response = await fetch(
      `http://localhost:8000/api/player/position/${position}/?sortBy=assists&sortOrder=DESC`
    );
    const data = await response.json();
    setToggleBanner("position");
    setPlayers(data.data.players);
    setCurrentPage(data.data.pagination.currentPage);
    setTotalPages(data.data.pagination.totalPages);
  };

  const handlePageChange = async (direction: string) => {
    let page = currentPage;
    if (direction === "prev" && currentPage != undefined) {
      page = currentPage - 1;
    } else if (direction === "next" && currentPage != undefined) {
      page = currentPage + 1;
    }
    const response = await fetch(
      `http://localhost:8000/api/player/position/${position}/?page=${page}`
    );
    const data = await response.json();

    setPlayers(data.data.players);
    setTotalPages(data.data.pagination.totalPages);
    setCurrentPage(page);
  };

  return (
    <main>
      <p className="flex justify-center mt-20 text-3xl">
        Select a team or position to view the players
      </p>
      <div className="m-10">
        <ul className="flex flex-wrap justify-center gap-2">
          {teams.map((team) => (
            <li key={team} className="w-[60px]">
              <button onClick={() => fetchPlayersByTeam(team)}>
                <img
                  src={`${team}.png`}
                  alt={`${team}-logo`}
                  className="h-[50px]"
                />
              </button>
            </li>
          ))}
        </ul>
        {}
      </div>
      <div className="flex justify-between w-3/4 mx-auto">
        <Button
          type="button"
          className="bg-blue-500 hover:bg-blue-700"
          onClick={() => fetchPlayersByPosition("L")}
        >
          Left Wingers
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700"
          onClick={() => fetchPlayersByPosition("C")}
        >
          Centers
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700"
          onClick={() => fetchPlayersByPosition("R")}
        >
          Right Wingers
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700"
          onClick={() => fetchPlayersByPosition("D")}
        >
          Defensemen
        </Button>
      </div>
      {players && (
        <>
          <DisplayBanner input={toggleBanner} players={players} />
          <DisplayPlayers players={players} searchText="" />
        </>
      )}
      {toggleBanner === "position" && (
        <PageNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </main>
  );
};

export default HomePage;
