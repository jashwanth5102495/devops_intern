# Node.js Demo App - CI/CD Automation

A sample Node.js web application demonstrating automated CI/CD pipeline using GitHub Actions.

## Features

- Express.js web server with REST API
- Automated testing with Jest & Supertest
- Docker containerization with multi-stage builds
- Advanced CI/CD pipeline with GitHub Actions
- Security scanning and vulnerability detection
- Performance monitoring and metrics collection
- Load testing capabilities
- Health checks and system monitoring
- Production-ready deployment automation

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
- `GET /api/pipeline` - CI/CD pipeline information
- `GET /api/metrics` - System performance metrics

## Advanced CI/CD Pipeline

The GitHub Actions workflow includes:

1. **Test Stage**: Multi-version testing (Node.js 18.x, 20.x)
2. **Security Stage**: Vulnerability scanning and secret detection
3. **Build Stage**: Docker image creation and registry push
4. **Deploy Stage**: Production deployment with health checks
5. **Monitoring**: Automated performance and security monitoring

### Additional Scripts
```bash
npm run test:coverage    # Run tests with coverage report
npm run load-test       # Performance load testing
npm run security-audit  # Security vulnerability scan
npm run docker:build    # Local Docker image build
npm run docker:run      # Run Docker container locally
```

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

## Status

✅ CI/CD Pipeline Ready!
🚀 Deployed to GitHub: https://github.com/jashwanth5102495/devops_intern
🐳 Docker Hub: https://hub.docker.com/r/jashwanth5012495/nodejs-demo-app
🔧 Secrets Configured - Pipeline Active!