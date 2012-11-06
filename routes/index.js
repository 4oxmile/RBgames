
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'RBgames :: Welcome!!' });
};

exports.login = function(req, res){
  res.render('login', { title: 'RBgames :: Login!!' });
};


