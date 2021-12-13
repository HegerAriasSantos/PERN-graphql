import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./model/schemas";
const app = express();
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Listen on port ${port}`));

app.use(
	"/graphql",
	graphqlHTTP({
		graphiql: true,
		schema,
	}),
);
