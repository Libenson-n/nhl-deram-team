import { Card } from "@/components/ui/card";
import { columns } from "@/lib/columns";
import { Players } from "@/types";
import TableHeading from "./table-heading";

type DisplayPlayersProps = {
  players: Players[] | undefined | null;
  input: string;
};

const DisplayPlayers = ({ players, input }: DisplayPlayersProps) => {
  if (!players) return null;

  return (
    <Card className="p-5 flex justify-center">
      <table className="text-sm">
        <caption>
          <TableHeading input={input} players={players} />
        </caption>
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
          {players.map((player: Players, index) => (
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
