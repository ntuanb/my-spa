var CONFIG = {
	AUTHOR_URL: 'ntuanb.com/',
	URL: '#'
};

CONFIG.TIMEOUT = 10000; // 10s

CONFIG.REGISTER = {
	username: 'test',
	email: 'test@test.com',
	password: 'test'
};

CONFIG.LOGIN = {
	email: 'test@test.com',
	password: 'test'
}

CONFIG.PAGES = [
	{name: 'Home', url: '/'},
	{name: 'Book', url: '/book'},
	{name: 'Contact', url: '/contact'},
	{name: 'Gift', url: '/gift'},
	{name: 'About', url: '/about'},
	{name: 'Store', url: '/store'},
	{name: 'Menu', url: '/menu'},
	{name: 'Dashboard', url: '/dashboard'},
	{name: 'Dashboard Client', url: '/dashboard/client'},
	{name: 'Dashboard Admin', url: '/dashboard/admin'}
]

CONFIG.MENU = [
	{p: 'Book', c: 'with us', url: '/book'},
	{p: 'Gift', c: 'surprise someone', url: '/gift'},
	{p: 'Menu', c: 'our services', url: '/menu'},
	{p: 'About', c: 'the beginning', url: '/about'},
	{p: 'Contact', c: 'chat to us', url: '/contact'},
	{p: 'Store', c: 'our products', url: '/store'}
];

CONFIG.PRODUCTS = [
	{name: 'Moisturizer', description: 'This is a description.', price: 19.00, thumb: 'img/prod_01.jpg', preview: true},
	{name: 'Facial', description: 'This is a description.', price: 15.00, thumb: 'img/prod_02.jpg', preview: true},
	{name: 'Cleanser', description: 'This is a description.', price: 40.00, thumb: 'img/prod_03.jpg', preview: true}
];

CONFIG.TREATMENT = [

];
