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
Uptime: ${Math.floor(data.uptime)} seconds`;
    } catch (error) {
        infoDiv.innerHTML = `<span class="status-error">❌ ERROR</span>\n${error.message}`;
    }
}

// Load initial data
document.addEventListener('DOMContentLoaded', () => {
    checkHealth();
    getInfo();
});