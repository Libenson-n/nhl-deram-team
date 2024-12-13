import { Card } from "@/components/ui/card";
import { columns } from "@/lib/columns";
import { Players } from "@/types";

type DisplayPlayersProps = {
  players: Players[] | undefined;
  searchText: string | "";
};

const DisplayPlayers = ({ players, searchText }: DisplayPlayersProps) => {
  if (!players) return null;

  return (
    <Card className="p-5 flex justify-center">
      <table className="text-sm">
        <thead>
          <tr className="border border-black text-gray-800">
            {columns.map((column) => (
              <th key={column} className="border border-gray-200 p-2">
                {column.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players
            .filter((player) =>
              player.name.toLocaleLowerCase().includes(searchText.toLowerCase())
            )
            .map((player: Players, index) => (
              <tr
                key={player.name}
                className={`border border-gray-400 text-center ${
                  index % 2 === 0 ? "bg-slate-200" : "bg-white"
                }`}
              >
                {Object.entries(player).map((player, index) => (
                  <td key={index} className="border border-gray-200 p-1">
                    {player[1]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
};

export default DisplayPlayers;

{
  /* <CardContent>
              <p>Games played: {player.gamePlayed}</p>
              <p>Goals: {player.goals}</p>
              <p>Assists: {player.assists}</p>
              <p>Points: {player.points}</p>
            </CardContent> */
}
