// Alpine stores for common functionality
document.addEventListener('alpine:init', () => {
	console.log('alpine:init');

	// Common store with sidebar and dark mode
	Alpine.store('common', {
		sidebar: true,
		dark: false,

		toggleSidebar() {
			this.sidebar = !this.sidebar;
			console.log('Sidebar toggled:', this.sidebar);
		},

		toggleDark() {
			this.dark = !this.dark;
			console.log('Dark mode toggled:', this.dark);
		},
	});
});
