const client = require('../wdio.setup.js');
const searchView = require('./views/search.view.js');

describe('Searchbox', () => {

	beforeAll(() => {
		jest.setTimeout(60000);
		return this.client = client();
	});

	afterAll(() => {
	    this.client.end();
	});

	afterEach(() => {
		this.client.refresh();
	});

	it('can be set', () => {
	    expect.assertions(1);
	    return this.client
	        .then(() => searchView.setSearchBox(this.client, 'Austin TX'))
	        .then(() => searchView.getSearchBoxValue(this.client))
	        .then((value) => expect(value).toBe('Austin TX'));
	});

});
