const Task = require('../models/Task.js')

const resolvers = {
  Query: {
    tasks: async () => {
      try {
        const tasks = await Task.find();
        return tasks;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter tarefas.');
      }
    },
    incompleteTasks: async () => {
      try {
        const incompleteTasks = await Task.find({ status: false });
        return incompleteTasks;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter tarefas incompletas.');
      }
    },

    finishedTasks: async () => {
      try {
        const finishedTasks= await Task.find({ status: true });
        return finishedTasks;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter tarefas incompletas.');
      }
    },

    taskById: async (_, { id }) => {
      try {
        const taskById = await Task.findById(id)
        return taskById;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter tarefa.');
      }
    },
  },

  Mutation: {
    addTask: async (_, { task, priority, status }) => {
      try {
        const newTask = new Task({ task, priority, status });
        const result = await newTask.save();
        return result;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao adicionar tarefa.');
      }
    },
    updateTask: async (_, { id, task, priority }) => {
      try {
        const updatedTask = await Task.findByIdAndUpdate(
          id,
          { task, priority },
          { new: true } 
        );
        if (!updatedTask) {
          throw new Error('Tarefa não encontrada para atualização.');
        }
        return updatedTask;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao atualizar tarefa.');
      }
    },

    completedTask: async (_, { id, status }) => {
      try {
        const updatedTask = await Task.findByIdAndUpdate(
          id,
          { status },
          { new: true } 
        );
        if (!updatedTask) {
          throw new Error('Tarefa não encontrada para atualização.');
        }
        return updatedTask;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao atualizar tarefa.');
      }
    },
    
    deleteTask: async (_, { id }) => {
      try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
          throw new Error('Tarefa não encontrada');
        }
    
        return deletedTask;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao excluir tarefa.');
      }
    },

    deleteTasks: async () => {      
      try {
        const tasksToDelete = await Task.find({status: true});
        if (tasksToDelete.length === 0) {
          throw new Error('Nenhuma tarefa encontrada para exclusão.');
        }
        const deletedTasks = await Task.deleteMany({ status: true});
        return deletedTasks;
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao excluir tarefa.');
      }
    },
  },
};

module.exports = resolvers;