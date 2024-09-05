import Model from '@ember-data/model';
import { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PremiseModel extends Model {
  @attr('string') summary;
  @attr('string') fullText;

  @belongsTo user;

  @hasMany('comment') comments;
}
