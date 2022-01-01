import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./router";
import "./styles/index.css";

const client = new ApolloClient({
	uri: process.env.REACT_APP_ENDPOINT || "http://localhost:3002/graphql",
	cache: new InMemoryCache(),
	fetchPolicy: "network-only",
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root"),
);
