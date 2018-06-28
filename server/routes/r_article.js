const articleController = require('../controllers/article.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();

module.exports = router => {
  /* Get all Articles */

  router.route('/article').get(articleController.getAll);

  /* Add an Article */
  router.route('/article').post(multipartWare, articleController.addArticle);

  /* Clap on an Article */
  router.route('/article/clap').post(articleController.clapArticle);

  /* Comment on an Article */
  router.route('/article/comment').post(articleController.commentArticle);

  /* Get particular Article */
  router.route('/article/:id').get(articleController.getArticle);
  router.route('/article/coba').get(articleController.getSemua);
};
