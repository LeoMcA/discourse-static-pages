import Page from '../models/page';
import { cook } from 'discourse/lib/text';
import { ajax } from 'discourse/lib/ajax';

export default Discourse.Route.extend({
  model(params) {
    return Page.findById(params.id).then((result) => {
      return result.page;
    });
  },

  setupController(controller, model) {
    model.body = cook(model.body);
    controller.setProperties({ model });
  }
});
