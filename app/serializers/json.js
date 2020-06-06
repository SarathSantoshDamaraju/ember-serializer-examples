import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let recomputedPayload = []

    payload.data.forEach(element => {
      let currentElement = {
        type: 'json',
        id: element.id,
        name: element.name
      }

      recomputedPayload.push(currentElement)
    });


    return this._super(store, primaryModelClass, recomputedPayload, id, requestType);
  }
});
