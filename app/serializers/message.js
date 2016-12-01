import ApplicationSerializer from './application';

export default DS.RESTSerializer. extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: {embedded: 'always'}
  }
});