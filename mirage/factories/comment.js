import { Factory } from 'miragejs';

export default Factory.extend({
  text(i) {
    return `Comment ${i}`;
  },
  user(i) {
    return { id: i + 1, username: `user${i + 1}` };
  },
  premise(i) {
    return { id: i + 1, summary: `Premise ${i + 1}` };
  },
});
