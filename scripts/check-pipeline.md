# Pipeline Status Check

## GitHub Actions
- URL: https://github.com/jashwanth5102495/devops_intern/actions
- Latest workflow should show: ✅ All checks passed

## Docker Hub
- URL: https://hub.docker.com/r/jashwanth5012495/nodejs-demo-app
- Should contain: `latest` and commit-specific tags

## Local Testing
```bash
# Run tests
npm test

# Start development server
npm run dev

# Build production
npm run build
```

## Pipeline Stages
1. ✅ **Test**: Runs on Node.js 18.x and 20.x
2. ✅ **Build**: Creates Docker image
3. ✅ **Deploy**: Pushes to Docker Hub
4. ✅ **Production**: Simulated deployment

## Troubleshooting
- Check GitHub secrets are set correctly
- Verify Docker Hub repository exists
- Ensure all tests pass locally first