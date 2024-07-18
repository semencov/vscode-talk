const moves: any[] = [];

function record(move) {
    moves.push(move);
}

// Correct usage
record({ direction: 'west', steps: 4 });
record({ direction: 'north', steps: 2 });
record({ direction: 'east', steps: 3 });

// Incorrect usage
record({ direction: 'north-west', steps: 8 });
record({ direction: 'south' });
record('up');
record(true);
