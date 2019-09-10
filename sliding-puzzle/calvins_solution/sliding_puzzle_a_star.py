from copy import copy
from pdb import set_trace

class GameState(object):
    def __init__(self, board, move_history):
        self.board = board
        self.move_history = move_history
        self._zero_tile_position = None

    @property
    def zero_tile_position(self):
        if self._zero_tile_position:
            return self._zero_tile_position

        for i in range(0, len(self.board)):
            if self.board[i] == 0:
                self._zero_tile_position = i

        return self._zero_tile_position

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

    @property
    def cost(self):
        """The total cost is a sum of the g and h cost, a.k.a the f function
        """
        return self.g_cost + self.h_cost

    @property
    def g_cost(self):
        """The distance away from the source node, a.k.a the root state, which is best represented by the number of steps
        away from the root state.
        """
        return len(self.move_history)

    @property
    def h_cost(self):
        """Manhattan distance
        This heuristc function is not the best for sliding puzzle but it is simplest of all. The best heuristic function is
        Nilsson's sequencing score function.
        """
        final_state = [1, 2, 3, 4, 5, 6, 7, 8, 0]
        score = 0
        for idx, el in enumerate(self.board):
            score += abs(idx - final_state.index(el))
        return score

    @property
    def is_solution(self):
        final_state = [1, 2, 3, 4, 5, 6, 7, 8, 0]
        for i in range(0, len(self.board)):
            if final_state[i] != self.board[i]:
                return False
        return True

    def __str__(self):
        return "".join(map(lambda el: str(el), self.board))

    def __hash__(self):
        return hash(str(self))

    def __eq__(self, other):
        return str(self) == str(other)

def find_min_in_queue(queue):
    """For the lack of a PriorityQueueMap, I am doing an O(n) operation to find the state with the lowest cost
    """
    min_state = None
    for key in queue:
        if min_state is None:
            min_state = queue[key]
        if min_state.cost > queue[key].cost:
            min_state = queue[key]

    return min_state


def a_star(board):
    closed_states = dict()

    # Initialize the Queue Map
    open_states = dict()

    # Initialize root state and put it into the open states
    root_state = GameState(board, "")
    open_states[root_state] = root_state

    while len(open_states) > 0:
        current_state = find_min_in_queue(open_states)
        del open_states[current_state]

        if current_state.is_solution:
            return current_state

        closed_states[current_state] = current_state

        current_pos = current_state.zero_tile_position
        for dir in current_state.available_moves:
            new_board = copy(current_state.board)
            dest = current_state.available_moves[dir]
            new_board[current_pos], new_board[dest] = new_board[dest], new_board[current_pos]
            new_move_history = current_state.move_history + dir

            new_state = GameState(new_board, new_move_history)

            if closed_states.get(new_state):
                continue

            extended_path_cost = new_state.cost
            if open_states.get(new_state) and open_states.get(new_state).cost <= extended_path_cost:
                continue

            open_states[new_state] = new_state

    return None


state = a_star([6, 2, 8, 7, 3, 5, 1, 4, 0])
print state
print state.move_history
print len(state.move_history)
