import Model from '@ember-data/model';
import { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PremiseModel extends Model {
  @attr summary;
  @attr fullText;

  @belongsTo('user', { async: true, inverse: 'premises' }) user;

  @hasMany('comment', { async: true }) comments;
}
