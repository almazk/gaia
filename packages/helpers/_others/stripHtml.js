const StripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

export default StripHtml;
