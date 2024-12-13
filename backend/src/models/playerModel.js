import pool from "../config/db.js";

const validateInput = (sortBy, sortOrder) => {
  const validSortColumns = ["points", "goals", "assists"];
  const validSortOrders = ["ASC", "DESC"];

  if (!validSortColumns.includes(sortBy)) {
    throw new Error("Invalid sort column");
  }
  if (!validSortOrders.includes(sortOrder)) {
    throw new Error("Invalid sort order");
  }
};

export const getPlayersByTeamService = async (
  team,
  sortBy = "points",
  sortOrder = "DESC"
) => {
  try {
    // Sanitize and validate inputs to prevent SQL injection risks
    validateInput(sortBy, sortOrder);

    // Construct the query with placeholders
    const query = `SELECT * FROM player_stats WHERE team = $1 ORDER BY ${sortBy} ${sortOrder}`;

    const result = await pool.query(query, [team]);

    return result.rows;
  } catch (error) {
    console.error("Error fetching players by team:", error);
    throw new Error("Failed to retrieve player data");
  }
};

export const getPlayersByPositionService = async (
  position,
  page = 1,
  limit = 10,
  sortBy = "points",
  sortOrder = "DESC"
) => {
  try {
    // Sanitize and validate inputs to prevent SQL injection risks
    validateInput(sortBy, sortOrder);
    const offset = (page - 1) * limit;

    // Construct the query with placeholders
    const query = `
      SELECT * FROM player_stats 
      WHERE position = $1 
      ORDER BY ${sortBy} ${sortOrder} 
      LIMIT $2 OFFSET $3
    `;
    const result = await pool.query(query, [position, limit, offset]);

    // Get the total count for pagination
    const countResult = await pool.query(
      `SELECT COUNT(*) FROM player_stats WHERE position = $1`,
      [position]
    );

    const totalRecords = countResult.rows[0].count;

    return {
      players: result.rows,
      totalRecords: totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      currentPage: page,
    };
  } catch (error) {
    // Error handling
    console.error("Error fetching players by position:", error);
    throw new Error("Failed to retrieve player data");
  }
};

export const getAllPlayersService = async (
  page = 1,
  limit = 10,
  sortBy = "points",
  sortOrder = "DESC"
) => {
  try {
    // Sanitize and validate inputs to prevent SQL injection risks
    validateInput(sortBy, sortOrder);

    const offset = (page - 1) * limit;

    const query = `SELECT * FROM player_stats ORDER BY ${sortBy} ${sortOrder} LIMIT $1 OFFSET $2`;

    const result = await pool.query(query, [limit, offset]);
    const countResult = await pool.query(`SELECT COUNT(*) FROM player_stats`);

    const totalRecords = countResult.rows[0].count;

    return {
      players: result.rows,
      totalRecords: totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      currentPage: page,
    };
  } catch (error) {
    // Error handling
    console.error("Error fetching players by position:", error);
    throw new Error("Failed to retrieve player data");
  }
};
