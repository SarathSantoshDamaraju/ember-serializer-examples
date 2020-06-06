import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse (store, primaryModelClass, payload, id, requestType){
		payload = {
      users: payload.data,
      meta: {
        total_pages: 2
      }
    };

		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});
