function dispatch(action: Action) { }

type Action =
  | { type: 'loading' }
  | { type: 'error', payload: string };

const action = {
  type: 'error',
  payload: 'Something went wrong'
} as const;

dispatch(action);

