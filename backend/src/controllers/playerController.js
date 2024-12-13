import {
  getAllPlayersService,
  getPlayersByPositionService,
  getPlayersByTeamService,
} from "../models/playerModel.js";

// Standardized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const getAllPlayers = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const result = await getAllPlayersService(parseInt(page), parseInt(limit));

    handleResponse(res, 200, "Players fetched successfully", {
      players: result.players,
      pagination: {
        currentPage: page,
        totalPages: result.totalPages,
        totalRecords: result.totalRecords,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getPlayerByTeam = async (req, res, next) => {
  const { team } = req.params;
  try {
    const result = await getPlayersByTeamService(team);
    handleResponse(res, 200, "Players fetched successfully", result);
  } catch (error) {
    next(error);
  }
};

export const getPlayerByPosition = async (req, res, next) => {
  const { position } = req.params;
  const { page = 1, limit = 10, sortBy, sortOrder } = req.query;

  try {
    const result = await getPlayersByPositionService(
      position,
      parseInt(page),
      parseInt(limit),
      sortBy,
      sortOrder
    );
    handleResponse(res, 200, "Players fetched successfully", {
      players: result.players,
      pagination: {
        currentPage: result.currentPage,
        totalPages: result.totalPages,
        totalRecords: result.totalRecords,
      },
    });
  } catch (error) {
    next(error);
  }
};
