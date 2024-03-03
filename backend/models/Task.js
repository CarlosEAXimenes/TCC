const mongoose =require('mongoose');

const taskSchema = new mongoose.Schema({
  task:{
    type: String,
    required:true,
  },
  priority:{
    type: String,
    required:true,
  },
  status:{
    type: Boolean,
    required:true,
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;