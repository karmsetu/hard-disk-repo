const addMove = (x, y, level) => {
	if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && board[x][y] == null) {
		board[x][y] = level;
	}
};
