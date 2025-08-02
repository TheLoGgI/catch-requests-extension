// import './sw-omnibox.js';
// import './sw-tips.js';
// console.log(chrome.action.enable);

chrome.action.onClicked.addListener(async (tab) => {
    console.log('tab: ', tab, tab.url, tab.id);
    console.log('Extension icon clicked for tab:', tab.url);
    // Save data on web site

    // chrome.runtime.sendMessage // Sends a single message to event listeners within your extension or a different extension/app. 
});

chrome.webRequest.onCompleted.addListener(
    (details) => {
        console.log('details: ', details);
        chrome.action.setBadgeBackgroundColor(
            {color: 'green'},  // Also, also green
            () => {
                const canvas = new OffscreenCanvas(16, 16);
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, 16, 16);
                context.fillStyle = '#00FF00';  // Green
                context.fillRect(0, 0, 16, 16);
                const imageData = context.getImageData(0, 0, 16, 16);
                chrome.action.setIcon({imageData: imageData}, () => { /* ... */ });
            },
        );
        
        
        // if (requestContent) {
        //     const url = new URL(details.url);
        //     url.searchParams.set('request', requestContent);
        //     return { redirectUrl: url.href };
        // }
        return
    }, {
        urls: [
            'https://developer.chrome.com/*',
        ],
        // types: ['main_frame', 'sub_frame']
    },
    );
