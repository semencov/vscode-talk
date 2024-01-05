let moves: any[] = [];

function record(move) {
  moves.push(move);
}

record({ direction: 'left', steps: 4 });
record({ direction: 'up', steps: 2 });
record({ direction: 'right', steps: 3 });

record({ direction: 'north-north-west', steps: 8 });
record('up');
record(true);
