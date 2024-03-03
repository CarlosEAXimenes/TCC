import axios from 'axios';

const apiUrl = 'http://localhost:4000/graphql'

export default {  
  createTask(data){       
    const { task, priority, status } = data;
    return axios.post(apiUrl,
      {
      query: `
        mutation AddTask($task: String!, $priority: String!, $status: Boolean!) {
          addTask(task: $task, priority: $priority, status: $status) {
            _id
            task
            priority
            status
          }
        }
      `,
      variables: {
        task,
        priority,
        status,
      },
    });
  },

  updateTask(data) {
    const { id, task, priority } = data;
    return axios.post(apiUrl, {
      query: `
        mutation UpdateTask($id: ID!, $task: String!, $priority: String!) {
          updateTask(id: $id, task: $task, priority: $priority) {
            _id
            task
            priority
          }
        }
      `,
      variables: {
        id,
        task,
        priority,
      },
    });
  },
  
  completedTask(data) {
    const { id, status } = data;
    return axios.post(apiUrl, {
      query: `
        mutation CompletedTask($id: ID!, $status: Boolean!) {
          completedTask(id: $id, status: $status) {
            _id
            status
          }
        }
      `,
      variables: {
        id,
        status
      },
    });
  },

  incompleteTasks(){
    return axios.post(apiUrl, {
      query: `
        query {
          incompleteTasks {
            _id
            task
            priority
            status
          }
        }
      `,
    });
  },

  finishedTasks(){
    return axios.post(apiUrl, {
      query: `
        query {
          finishedTasks {
            _id
            task
            priority
            status
          }
        }
      `,
    });
  },

  taskById(id){
    return axios.post(apiUrl, {
      query: `
        query {
          taskById(id: "${id}") {
            _id
            task
            priority
            status
          }
        }
      `,
    });
  },

  deleteTask(id){
    return axios.post(apiUrl, {
      query: `
        mutation DeleteTask($id: ID!){
          deleteTask(id: $id) {
            _id
          }
        }  
      `,
      variables: {
        id: id
      }
    })
  },

  deleteTasks(){
    return axios.post(apiUrl, {
      query: `
        mutation DeleteTasks($status: Boolean!){
          deleteTasks(status: $status) {
            _id
            task
            priority
            status
          }
        }
      `,
      variables: {
        status: true
      }
    });
  }

  
};
