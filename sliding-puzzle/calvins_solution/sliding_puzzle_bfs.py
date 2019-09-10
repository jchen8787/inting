from copy import copy


class GameState:
    def __init__(self, board, move_history):
        self.board = board
        self.move_history = move_history
        self._zero_tile_position = None
        self.prev_state = None # for A* algorithm

    @property
    def zero_tile_position(self):
        if self._zero_tile_position:
            return self._zero_tile_position

        for i in range(0, len(self.board)):
            if self.board[i] == 0:
                self._zero_tile_position = i
                return i
        return None

    @property
    def available_moves(self):
        moves = dict()
        pos = self.zero_tile_position
        row, col = pos / 3, pos % 3
        if row > 0:
            moves['U'] = 3 * (row - 1) + col

        if row < 2:
            moves['D'] = 3 * (row + 1) + col

        if col > 0:
            moves['L'] = 3 * row + (col - 1)

        if col < 2:
            moves['R'] = 3 * row + (col + 1)

        return moves

    def __str__(self):
        return "".join(map(lambda el: str(el), self.board))

    def __hash__(self):
        return hash(str(self))

    def __eq__(self, other):
        return str(self) == str(other)

    def is_solution(self):
        final_state = [1, 2, 3, 4, 5, 6, 7, 8, 0]
        for i in range(0, len(self.board)):
            if final_state[i] != self.board[i]:
                return False
        return True


def solve(board):
    root_state = GameState(board, "")

    if root_state.is_solution():
        return root_state

    queue = [root_state]
    visit_record = dict()
    while len(queue) > 0:
        current_state = queue.pop(0)
        current_pos = current_state.zero_tile_position
        available_moves = current_state.available_moves
        for direction in available_moves:
            # Deep dup on a list
            new_board = copy(current_state.board)
            # Swap
            dest = available_moves[direction]
            new_board[current_pos], new_board[dest] = new_board[dest], new_board[current_pos]
            new_move_history = current_state.move_history + direction
            # Create a new state
            new_state = GameState(new_board, new_move_history)

            if new_state.is_solution():
                return new_state
            elif not visit_record.get(str(new_state.board)):
                queue.append(new_state)
                visit_record[str(new_state.board)] = True
    return False


state = solve([6, 2, 8, 7, 3, 5, 1, 4, 0])
print state
print state.move_history
print len(state.move_history)
