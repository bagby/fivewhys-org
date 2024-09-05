import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr text;

  @belongsTo('user', { async: true, inverse: 'comments' }) user;
  @belongsTo('premise', { async: true, inverse: 'premises' }) premise;
}
