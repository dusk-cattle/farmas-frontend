// contexts
import { SessionContextProvider } from '../../contexts';

// view
import { Root as DefaultRoot } from './view';

export function Root() {
  return (
    <SessionContextProvider>
      <DefaultRoot />
    </SessionContextProvider>
  );
}
