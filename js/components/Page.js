var m = angular.module('site.pages', []);

m.factory('PageFactory', PagesFactory);

function PagesFactory($id) {

	var pages = [];

	var r = {};

	r.createPage = createPage;
	r.addPage = addPage;

	return r;

	function Page(pageData) {
		var self = this;
		this.id = $id.generate_uuid();
		this.data = pageData;
	}

	function createPage(pageData) {
		var p = new Page(pageData);
	}

	function addPage(page) {
		pages.push(page);
	}

	function construct(list) {
		angular.forEach(list, function(value, key) {
			r.addPage(r.createPage(value));
		});
		return pages;
	}

}
