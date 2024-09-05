import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr username;
  @attr firstName;
  @attr lastName;

  @hasMany('premise', { async: true }) premises;
  @hasMany('comment', { async: true }) comments;
}
