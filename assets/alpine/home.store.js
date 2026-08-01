// Alpine stores for common functionality
document.addEventListener('alpine:init', () => {
	console.log('alpine:init');
	
	// Dark mode store
	Alpine.store('home', {
		submitForm() {
		}
	});
}); 