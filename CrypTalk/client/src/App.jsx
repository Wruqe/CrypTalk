import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./pages/Blog";
import store from "./components/utils/store";
import Home from "./pages/Home";
import News from "./pages/News";
import BasicExample from "./components/Nav";
import Trade from "./pages/Trade"; // Import the Trade component
import OneCoin from "./pages/OneCoin";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';
import LoginContainer from "./pages/login";
import './App.css';
import UserProfile from "./pages/profile";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BasicExample />
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<BlogList />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/news" element={<News />} />
              <Route path="/trade" element={<Trade />} /> 
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/onecoin/:id" element={<OneCoin />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </ApolloProvider>
  );
}

export default App;
