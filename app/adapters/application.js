import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host:"https://reqres.in",
  namespace: "api"
});
