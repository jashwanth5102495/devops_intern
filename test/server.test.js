const request = require('supertest');
const { app, server } = require('../server');

describe('Server Tests', () => {
  afterAll(() => {
    server.close();
  });

  test('GET / should return HTML page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.type).toBe('text/html');
  });

  test('GET /api/health should return health status', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('version');
  });

  test('GET /api/info should return app info', async () => {
    const response = await request(app).get('/api/info');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('app', 'Node.js Demo App');
    expect(response.body).toHaveProperty('environment');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('nodeVersion');
  });

  test('GET /api/pipeline should return pipeline info', async () => {
    const response = await request(app).get('/api/pipeline');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('cicd', 'GitHub Actions');
    expect(response.body).toHaveProperty('docker', 'Automated Build & Push');
    expect(response.body).toHaveProperty('status', 'Active');
  });
});