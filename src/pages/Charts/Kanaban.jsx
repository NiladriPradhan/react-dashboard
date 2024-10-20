import React, { useState } from 'react';
import { Grid, Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { Header } from '../../components';

import { kanbanData, kanbanGrid } from '../../data/dummy';
// Kanban grid configuration
// const kanbanGrid = [
//   { headerText: 'To Do', keyField: 'Open', allowToggle: true },
//   { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
//   { headerText: 'Testing', keyField: 'Testing', allowToggle: true, isExpanded: false },
//   { headerText: 'Done', keyField: 'Close', allowToggle: true },
// ];

// Initial kanban task data
// const kanbanData = [
//   {
//     Id: 'Task 1',
//     Title: 'Task - 29001',
//     Status: 'Open',
//     Summary: 'Analyze the new requirements gathered from the customer.',
//     Type: 'Story',
//     Priority: 'Low',
//     Tags: 'Analyze,Customer',
//     Estimate: 3.5,
//     Assignee: 'Nancy Davloio',
//     Color: '#02897B',
//   },
//   {
//     Id: 'Task 2',
//     Title: 'Task - 29002',
//     Status: 'InProgress',
//     Summary: 'Improve application performance',
//     Type: 'Improvement',
//     Priority: 'Normal',
//     Tags: 'Improvement',
//     Estimate: 6,
//     Assignee: 'Andrew Fuller',
//     Color: '#673AB8',
//   },
//   {
//     Id: 'Task 3',
//     Title: 'Task - 29003',
//     Status: 'Open',
//     Summary: 'Arrange a web meeting with the customer to get new requirements.',
//     Type: 'Others',
//     Priority: 'Critical',
//     Tags: 'Meeting',
//     Estimate: 5.5,
//     Assignee: 'Janet Leverling',
//     Color: '#1F88E5',
//   },
// ];

// Task component for draggable items
const Task = ({ task, onDragStart }) => (
  <Card
    draggable
    onDragStart={(e) => onDragStart(e, task.Id)}
    sx={{ mb: 2, cursor: 'move', backgroundColor: task.Color }}
  >
    <CardContent>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{task.Title}</Typography>
      <Typography variant="body2">{task.Summary}</Typography>
      <Typography variant="caption">Assignee: {task.Assignee}</Typography>
      <Box mt={1}>
        <Chip label={task.Priority} color="secondary" size="small" />
        <Chip label={task.Type} color="primary" size="small" sx={{ ml: 1 }} />
      </Box>
    </CardContent>
  </Card>
);

// Column component for each Kanban column
const Column = ({ title, tasks, keyField, onDragOver, onDrop }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Box
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, keyField)}
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: '#f4f4f4',
        minHeight: '400px',
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {tasks.map((task) => (
        <Task key={task.Id} task={task} onDragStart={(e, taskId) => e.dataTransfer.setData('taskId', taskId)} />
      ))}
    </Box>
  </Grid>
);

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(kanbanData);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData('taskId');
    setTasks(tasks.map((task) =>
      task.Id === taskId ? { ...task, Status: newStatus } : task
    ));
  };

  const getTasksByStatus = (status) => tasks.filter((task) => task.Status === status);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Kanban" category="App" />
      <Grid container spacing={2}>
        {kanbanGrid.map((column) => (
          <Column
            key={column.keyField}
            title={column.headerText}
            keyField={column.keyField}
            tasks={getTasksByStatus(column.keyField)}
            onDragOver={onDragOver}
            onDrop={onDrop}
          />
        ))}
      </Grid>
    </div>
  );
}
