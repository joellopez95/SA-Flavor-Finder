import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    
<div className="App">



    <ApolloProvider client={client}>
      <StoreProvider>
        <Nav />
        <center>
    <div style={{
      width: '1200px',
      height: '600px',
      margin: '0px',
      backgroundSize: 'cover', 
      backgroundImage: 'url("images/banner.webp")'
      }}>
</div>
</center>
        <Outlet />
      </StoreProvider>
    </ApolloProvider>
    </div>

    
  );
}


export default App;
