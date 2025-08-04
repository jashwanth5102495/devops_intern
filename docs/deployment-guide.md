# Production Deployment Guide

## Prerequisites
- Docker Hub account with repository `nodejs-demo-app`
- GitHub repository with Actions enabled
- GitHub Secrets configured:
  - `DOCKER_USERNAME`
  - `DOCKER_PASSWORD`

## Deployment Process

### 1. Automated Deployment (Recommended)
```bash
# Push to main branch triggers automatic deployment
git push origin main
```

### 2. Manual Deployment
```bash
# Build Docker image
docker build -t jashwanth5012495/nodejs-demo-app:latest .

# Push to Docker Hub
docker push jashwanth5012495/nodejs-demo-app:latest

# Run in production
docker run -d -p 80:3000 --name nodejs-demo-app jashwanth5012495/nodejs-demo-app:latest
```

### 3. Local Development
```bash
# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev

# Run load tests
npm run load-test
```

## Monitoring

### Health Checks
- `GET /api/health` - Application health status
- `GET /api/metrics` - System performance metrics

### Pipeline Monitoring
- GitHub Actions: https://github.com/jashwanth5102495/devops_intern/actions
- Docker Hub: https://hub.docker.com/r/jashwanth5012495/nodejs-demo-app

## Security

### Automated Security Scanning
- npm audit for dependency vulnerabilities
- TruffleHog for secret detection
- Weekly scheduled security checks

### Best Practices
- Regular dependency updates
- Environment variable configuration
- Container security scanning
- Access control and authentication

## Performance

### Load Testing
```bash
# Run load test against local server
npm run load-test

# Run against production
TARGET_URL=https://your-production-url.com npm run load-test
```

### Metrics
- Memory usage monitoring
- CPU utilization tracking
- Request/response time analysis
- Error rate monitoring

## Troubleshooting

### Common Issues
1. **Pipeline Fails**: Check GitHub secrets configuration
2. **Docker Build Fails**: Verify Dockerfile syntax
3. **Tests Fail**: Run `npm test` locally first
4. **Security Scan Fails**: Update dependencies with `npm audit fix`

### Debug Commands
```bash
# Check application logs
docker logs nodejs-demo-app

# Inspect container
docker exec -it nodejs-demo-app sh

# View system metrics
curl http://localhost:3000/api/metrics
```