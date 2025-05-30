(function() {
  // Check if the cdn-root div exists
  const root = document.getElementById('cdn-root');
  if (root) {
    // Create a div with some content
    const content = document.createElement('div');
    content.style.backgroundColor = '#e0f7fa';
    content.style.padding = '20px';
    content.style.borderRadius = '8px';
    content.style.textAlign = 'center';
    content.innerHTML = '<h3>Welcome to the CDN Widget!</h3><p>This is a sample div rendered by the CDN script.</p>';
    root.appendChild(content);
  } else {
    console.error('CDN Error: No element with id="cdn-root" found.');
  }
})();