const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Task {
    _id: ID!
    task: String!
    priority: String!
    status: Boolean!
  }

  type Query {
    tasks: [Task!]!
    incompleteTasks: [Task!]!
    finishedTasks: [Task!]!
    taskById(id: ID!): Task
  }

  type Mutation {
    addTask(
      task: String!
      priority: String!
      status: Boolean!
      ): Task
      
    updateTask(
      id: ID!
      task: String!
      priority: String!
      ): Task

    completedTask(
      id: ID!
      status: Boolean!
      ): Task
          
    deleteTask(id: ID!): Task

    deleteTasks(status: Boolean!): [Task]
  }
`;

module.exports = typeDefs;