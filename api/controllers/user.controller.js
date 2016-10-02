module.exports = {
  logedIn: logedIn
};
function logedIn(req, res) {
  if (req.session.user) {
    res.render('index.html');
  } else {
    res.redirect('/login');
  }
};