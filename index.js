const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag'); //dependency of apollo server
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolvers/index');
const typeDefs = require('./graphql/typeDefs');
const { MONGODB } = require('./config');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        return server.listen({ port: 5000 })
    })
    .then(res => {
        console.log('Server running at ', res.url)
    })