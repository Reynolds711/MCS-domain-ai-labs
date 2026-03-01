// Lab Navigation and Event Tracking
document.addEventListener('DOMContentLoaded', function() {
    // Get event parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const event = urlParams.get('event');
    
    if (event) {
        console.log(`Lab accessed via event: ${event}`);
        trackLabEvent(event);
    }
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add copy functionality to code blocks
    document.querySelectorAll('.code-block').forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copy';
        copyButton.style.cssText = 'position: absolute; top: 10px; right: 10px; padding: 5px 10px; background: #8661c5; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;';
        copyButton.onclick = () => copyToClipboard(block.textContent, copyButton);
        
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(copyButton);
        wrapper.appendChild(block);
    });
    
    // Track time spent on lab
    const startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
        console.log(`Time spent on lab: ${timeSpent} minutes`);
    });
});

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function trackLabEvent(eventName) {
    // Placeholder for analytics tracking
    const labData = {
        event: eventName,
        timestamp: new Date().toISOString(),
        path: window.location.pathname
    };
    
    // Store in localStorage for demo purposes
    const labHistory = JSON.parse(localStorage.getItem('labHistory') || '[]');
    labHistory.push(labData);
    localStorage.setItem('labHistory', JSON.stringify(labHistory));
}

// Progress tracking functionality
class LabProgress {
    constructor(labId) {
        this.labId = labId;
        this.storageKey = `lab_progress_${labId}`;
    }
    
    saveProgress(challengeId, completed) {
        const progress = this.getProgress();
        progress[challengeId] = {
            completed: completed,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(this.storageKey, JSON.stringify(progress));
    }
    
    getProgress() {
        return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    }
    
    getCompletionPercentage() {
        const progress = this.getProgress();
        const completed = Object.values(progress).filter(p => p.completed).length;
        const total = Object.keys(progress).length;
        return total > 0 ? Math.round((completed / total) * 100) : 0;
    }
}