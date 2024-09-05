import Model from '@ember-data/model';

export default class CommentModel extends Model {
  @attr('string') text;

  @belongsTo('user') user;
  @belongsTo('premise') premise;
}
