async function checkHealth() {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Checking...';
    
    try {
        const response = await fetch('/api/health');
        const data = await response.json();
        
        statusDiv.innerHTML = `
<span class="status-healthy">✅ ${data.status.toUpperCase()}</span>
Timestamp: ${data.timestamp}
Version: ${data.version}`;
    } catch (error) {
        statusDiv.innerHTML = `<span class="status-error">❌ ERROR</span>\n${error.message}`;
    }
}

async function getInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.textContent = 'Loading...';
    
    try {
        const response = await fetch('/api/info');
        const data = await response.json();
        
        infoDiv.textContent = `
App: ${data.app}
Environment: ${data.environment}
Uptime: ${Math.floor(data.uptime)} seconds
Build Time: ${data.buildTime}
Node Version: ${data.nodeVersion}`;
    } catch (error) {
        infoDiv.innerHTML = `<span class="status-error">❌ ERROR</span>\n${error.message}`;
    }
}

async function getPipelineInfo() {
    const pipelineDiv = document.getElementById('pipeline');
    pipelineDiv.textContent = 'Loading...';
    
    try {
        const response = await fetch('/api/pipeline');
        const data = await response.json();
        
        pipelineDiv.textContent = `
CI/CD: ${data.cicd}
Docker: ${data.docker}
Testing: ${data.testing}
Deployment: ${data.deployment}
Status: ${data.status}`;
    } catch (error) {
        pipelineDiv.innerHTML = `<span class="status-error">❌ ERROR</span>\n${error.message}`;
    }
}

// Load initial data
document.addEventListener('DOMContentLoaded', () => {
    checkHealth();
    getInfo();
    getPipelineInfo();
});