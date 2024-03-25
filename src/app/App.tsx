import { RoutesApp } from './routes';
import { UsuarioLogadoProvider } from './shared/contexts';

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <RoutesApp />
    </UsuarioLogadoProvider>

  );
}


