import { Players } from "@/types";

type DisplayBannerProps = {
  input: string;
  players: Players[];
};

const DisplayBanner = ({ input, players }: DisplayBannerProps) => {
  let value = "";

  if (input === "team") {
    value = players[0].team;
  } else if (input === "position") {
    value = players[0].position;
  }

  let banner = "";

  switch (value) {
    case "ANA":
      banner = "Anaheim Ducks";
      break;
    case "BOS":
      banner = "Boston Bruins";
      break;
    case "BUF":
      banner = "Buffalo Sabres";
      break;
    case "CAR":
      banner = "Carolina Hurricanes";
      break;
    case "CBJ":
      banner = "Columbus Blue Jackets";
      break;
    case "CGY":
      banner = "Calgary Flames";
      break;
    case "CHI":
      banner = "Chicago Blackhawks";
      break;
    case "COL":
      banner = "Colorado Avalanche";
      break;
    case "DAL":
      banner = "Dallas Stars";
      break;
    case "DET":
      banner = "Detroit Red Wings";
      break;
    case "EDM":
      banner = "Edmonton Oilers";
      break;
    case "FLA":
      banner = "Florida Panthers";
      break;
    case "LAK":
      banner = "Los Angeles Kings";
      break;
    case "MIN":
      banner = "Minnesota Wild";
      break;
    case "MTL":
      banner = "Montreal Canadiens";
      break;
    case "NJD":
      banner = "New Jersey Devils";
      break;
    case "NYI":
      banner = "Ney York Islanders";
      break;
    case "NYR":
      banner = "New York Rangers";
      break;
    case "OTT":
      banner = "Ottawa Senators";
      break;
    case "PHI":
      banner = "Philadelphia Flyers";
      break;
    case "PIT":
      banner = "Pittsburgh Pinguins";
      break;
    case "SEA":
      banner = "Seattle Kraken";
      break;
    case "SJS":
      banner = "San Jose Sharks";
      break;
    case "STL":
      banner = "St. Louis Blues";
      break;
    case "TBL":
      banner = "Tampa Bay Lighting";
      break;
    case "TOR":
      banner = "Toronto Maple Leafs";
      break;
    case "UTA":
      banner = "Utah Hockey Club";
      break;
    case "VAN":
      banner = "Vancouver Canucks";
      break;
    case "VGK":
      banner = "Vegas Golden Knights";
      break;
    case "WPG":
      banner = "Winnipeg Jets";
      break;
    case "WSH":
      banner = "Washington Capitals";
      break;
    case "L":
      banner = "left wingers";
      break;
    case "R":
      banner = "right wingers";
      break;
    case "C":
      banner = "centers";
      break;
    case "D":
      banner = "defensemen";
      break;
    default:
      banner = banner;
  }

  return (
    <div className="">
      <p className="uppercase italic text-4xl font-semibold m-5">{banner}</p>
    </div>
  );
};

export default DisplayBanner;
