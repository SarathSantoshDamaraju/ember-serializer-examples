import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let recomputedPayload = {
      data: []
    };

    payload.data.forEach(element => {
      let currentElement = {
        type: 'json-api',
        id: element.id,
        attributes: {
          name: element.name
        }
      }

      recomputedPayload.data.push(currentElement)
    });


    return this._super(store, primaryModelClass, recomputedPayload, id, requestType);
  }
});
