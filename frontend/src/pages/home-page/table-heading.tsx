import { Players } from "@/types";

type TableHeadingProps = {
  input: string;
  players: Players[];
};

const TableHeading = ({ input, players }: TableHeadingProps) => {
  let value = "";

  if (input === "team") {
    value = players[0].team;
  } else if (input === "position") {
    value = players[0].position;
  }

  let heading = "";

  switch (value) {
    case "ANA":
      heading = "Anaheim Ducks";
      break;
    case "BOS":
      heading = "Boston Bruins";
      break;
    case "BUF":
      heading = "Buffalo Sabres";
      break;
    case "CAR":
      heading = "Carolina Hurricanes";
      break;
    case "CBJ":
      heading = "Columbus Blue Jackets";
      break;
    case "CGY":
      heading = "Calgary Flames";
      break;
    case "CHI":
      heading = "Chicago Blackhawks";
      break;
    case "COL":
      heading = "Colorado Avalanche";
      break;
    case "DAL":
      heading = "Dallas Stars";
      break;
    case "DET":
      heading = "Detroit Red Wings";
      break;
    case "EDM":
      heading = "Edmonton Oilers";
      break;
    case "FLA":
      heading = "Florida Panthers";
      break;
    case "LAK":
      heading = "Los Angeles Kings";
      break;
    case "MIN":
      heading = "Minnesota Wild";
      break;
    case "MTL":
      heading = "Montreal Canadiens";
      break;
    case "NJD":
      heading = "New Jersey Devils";
      break;
    case "NSH":
      heading = "Nashville Predators";
      break;
    case "NYI":
      heading = "Ney York Islanders";
      break;
    case "NYR":
      heading = "New York Rangers";
      break;
    case "OTT":
      heading = "Ottawa Senators";
      break;
    case "PHI":
      heading = "Philadelphia Flyers";
      break;
    case "PIT":
      heading = "Pittsburgh Pinguins";
      break;
    case "SEA":
      heading = "Seattle Kraken";
      break;
    case "SJS":
      heading = "San Jose Sharks";
      break;
    case "STL":
      heading = "St. Louis Blues";
      break;
    case "TBL":
      heading = "Tampa Bay Lighting";
      break;
    case "TOR":
      heading = "Toronto Maple Leafs";
      break;
    case "UTA":
      heading = "Utah Hockey Club";
      break;
    case "VAN":
      heading = "Vancouver Canucks";
      break;
    case "VGK":
      heading = "Vegas Golden Knights";
      break;
    case "WPG":
      heading = "Winnipeg Jets";
      break;
    case "WSH":
      heading = "Washington Capitals";
      break;
    case "L":
      heading = "left wingers";
      break;
    case "R":
      heading = "right wingers";
      break;
    case "C":
      heading = "centers";
      break;
    case "D":
      heading = "defensemen";
      break;
    default:
      heading = heading;
  }

  return (
    <div className="">
      <p className="uppercase italic text-4xl font-semibold m-5">{heading}</p>
    </div>
  );
};

export default TableHeading;
