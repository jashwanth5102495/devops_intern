# Node.js Demo App - CI/CD Automation

A sample Node.js web application demonstrating automated CI/CD pipeline using GitHub Actions.

## Features

- Express.js web server
- REST API endpoints
- Automated testing with Jest
- Docker containerization
- CI/CD pipeline with GitHub Actions
- Health check and app info endpoints

## Quick Start

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Start production server
npm start
```

## API Endpoints

- `GET /` - Main web interface
- `GET /api/health` - Health check endpoint
- `GET /api/info` - Application information

## CI/CD Pipeline

The GitHub Actions workflow includes:

1. **Test Stage**: Runs tests on Node.js 18.x and 20.x
2. **Build Stage**: Creates and pushes Docker image
3. **Deploy Stage**: Deploys to production (main branch only)

## Docker

```bash
# Build image
docker build -t nodejs-demo-app .

# Run container
docker run -p 3000:3000 nodejs-demo-app
```

## Setup Instructions

1. Fork this repository
2. Add Docker Hub credentials to GitHub Secrets:
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`
3. Push to main branch to trigger deployment

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)