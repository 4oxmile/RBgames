
/*
 * GET home page.
 */


exports.index = function(req, res){
  res.render('index', { title: 'RBgames :: Welcome!!' });
};

exports.login = function(req, res){
  res.render('login', { title: 'RBgames :: Login!!' });
};

exports.games = function(req, res){
  res.render('games', { title: 'RBgames :: Games!!' });
};

exports.sumo = function(req, res){
  res.render('sumo', { title: 'RBgames :: Sumo!!' });
};

exports.tail = function(req, res){
  res.render('tail', { title: 'RBgames :: Tail!!' });
};



