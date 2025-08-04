#!/usr/bin/env node

const http = require('http');

const TARGET_URL = process.env.TARGET_URL || 'http://localhost:3000';
const CONCURRENT_REQUESTS = 10;
const TOTAL_REQUESTS = 100;

console.log(`🚀 Starting load test...`);
console.log(`Target: ${TARGET_URL}`);
console.log(`Concurrent: ${CONCURRENT_REQUESTS}`);
console.log(`Total: ${TOTAL_REQUESTS}`);

let completed = 0;
let errors = 0;
const startTime = Date.now();

function makeRequest() {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = http.get(`${TARGET_URL}/api/health`, (res) => {
      const duration = Date.now() - start;
      if (res.statusCode === 200) {
        console.log(`✅ Request completed in ${duration}ms`);
      } else {
        console.log(`❌ Request failed with status ${res.statusCode}`);
        errors++;
      }
      completed++;
      resolve();
    });
    
    req.on('error', (err) => {
      console.log(`❌ Request error: ${err.message}`);
      errors++;
      completed++;
      resolve();
    });
  });
}

async function runLoadTest() {
  const promises = [];
  
  for (let i = 0; i < TOTAL_REQUESTS; i++) {
    if (promises.length >= CONCURRENT_REQUESTS) {
      await Promise.race(promises);
      promises.splice(promises.findIndex(p => p.resolved), 1);
    }
    promises.push(makeRequest());
  }
  
  await Promise.all(promises);
  
  const totalTime = Date.now() - startTime;
  const successRate = ((TOTAL_REQUESTS - errors) / TOTAL_REQUESTS * 100).toFixed(2);
  
  console.log(`\n📊 Load Test Results:`);
  console.log(`Total Requests: ${TOTAL_REQUESTS}`);
  console.log(`Successful: ${TOTAL_REQUESTS - errors}`);
  console.log(`Failed: ${errors}`);
  console.log(`Success Rate: ${successRate}%`);
  console.log(`Total Time: ${totalTime}ms`);
  console.log(`Requests/sec: ${(TOTAL_REQUESTS / (totalTime / 1000)).toFixed(2)}`);
}

runLoadTest().catch(console.error);