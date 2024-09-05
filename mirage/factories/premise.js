import { Factory } from 'miragejs';

export default Factory.extend({
  summary(i) {
    return `Premise ${i}`;
  },
  fullText(i) {
    return `This is the full text for premise ${i}`;
  },
  user(i) {
    return { id: i + 1, username: `user${i + 1}` };
  },
  afterCreate(premise, server) {
    if (!premise.comments) {
      premise.update({
        comments: server.createList('comment', 2),
      });
    }
  },
});
