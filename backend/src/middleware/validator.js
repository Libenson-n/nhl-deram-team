import Joi from "joi";

const teamSchema = Joi.object({
  team: Joi.string()
    .required()
    .valid(
      "ANA",
      "BOS",
      "BUF",
      "CAR",
      "CBJ",
      "CGY",
      "CHI",
      "COL",
      "DAL",
      "DET",
      "EDM",
      "FLA",
      "LAK",
      "MIN",
      "MTL",
      "NJD",
      "NSH",
      "NYI",
      "NYR",
      "OTT",
      "PHI",
      "PIT",
      "SEA",
      "SJS",
      "STL",
      "TBL",
      "TOR",
      "UTA",
      "VAN",
      "VGK",
      "WPG",
      "WSH"
    ),
});

const validateTeam = (req, res, next) => {
  const { error } = teamSchema.validate(req.params);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  next();
};

const positionSchema = Joi.object({
  position: Joi.string().required().valid("L", "C", "R", "D"),
});

const validatePosition = (req, res, next) => {
  const { error } = positionSchema.validate(req.params);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  next();
};

export { validateTeam, validatePosition };
