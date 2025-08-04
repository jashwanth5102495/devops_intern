const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'Node.js Demo App',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime(),
    buildTime: new Date().toISOString(),
    nodeVersion: process.version
  });
});

app.get('/api/pipeline', (req, res) => {
  res.json({
    cicd: 'GitHub Actions',
    docker: 'Automated Build & Push',
    testing: 'Jest & Supertest',
    deployment: 'Continuous Deployment',
    status: 'Active'
  });
});

app.get('/api/metrics', (req, res) => {
  const memUsage = process.memoryUsage();
  res.json({
    uptime: Math.floor(process.uptime()),
    memory: {
      rss: Math.round(memUsage.rss / 1024 / 1024) + ' MB',
      heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + ' MB',
      heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + ' MB'
    },
    cpu: process.cpuUsage(),
    platform: process.platform,
    arch: process.arch,
    pid: process.pid
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };