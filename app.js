const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const graphQlSchema=require('./graphql/schema/index');
const graphQlResolvers=require('./graphql/resolvers/index')



const app = express();

app.use(bodyParser.json());

const user = (userId) => {
  return User.findById(userId)
    .then((user) => {
      return { ...user._doc, _id: user.id };
    })
    .catch((err) => {
      throw err;
    });
};

const event = (eventIds) => {
  return Event.find({ _id: { $in: eventIds } })
    .then((event) => {
      return events.map((event) => {
        return {
          ...event._doc,
          _id: event.id,
          creator: user.bind(this, event.creator),
        };
      });
    })
    .catch((err) => {
      throw err;
    });
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.1l1yn.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
  )
  .then(() => app.listen(5000), console.log("success"))
  .catch((err) => {
    console.log(err);
  });
