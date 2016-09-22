import Page from '../models/page';
import { default as PrettyText } from 'pretty-text/pretty-text';

export default Discourse.Route.extend({
  model(params) {
    return Page.findById(params.id).then((result) => {
      return result.page;
    });
  },

  setupController(controller, model) {
    model.body = new Handlebars.SafeString(new PrettyText({ sanitize: false }).cook(model.body));
    controller.setProperties({ model });
  }
});
