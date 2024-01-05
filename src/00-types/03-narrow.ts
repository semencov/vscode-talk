let moves: any[] = [];

function record(move) {
  moves.push(move);
}

// Correct usage
record({ direction: 'left', steps: 4 });
record({ direction: 'up', steps: 2 });
record({ direction: 'right', steps: 3 });

// Incorrect usage
record({ direction: 'north-north-west', steps: 8 });
record('up');
record(true);
