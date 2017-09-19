'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.list_all_tasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) return res.send(err);
    res.json(task);
  });
};

exports.create_a_task = (req, res) => {
  const new_task = new Task(req.body);
  new_task.save((err, task) => {
    if (err) return res.send(err);
    console.log(req.body.name + ' saved to db');
    res.redirect('/');
  });
};

exports.read_a_task = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) return res.send(err);
    res.json(task);
  });
};

exports.update_a_task = (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
    if (err) return res.send(err);
    console.log(req.body.name + ' updated to db');
    res.redirect('/');
  });
};

exports.delete_a_task = (req, res) => {
  Task.remove({
    _id: req.params.taskId
  }, (err, task) => {
    if (err) return res.send(err);
    res.json({message: 'Task successfully deleted'});
  });
};
