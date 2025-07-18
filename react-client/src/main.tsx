import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

const client = new ApolloClient({
  uri: "http://localhost:4000", //バックエンドのURLを指定
  cache: new InMemoryCache(),
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
)
