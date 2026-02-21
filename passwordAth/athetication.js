const authentication = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "Log in before using");
    return res.redirect("/api/logIn"); 
    // or: return res.redirect("/api/home");
  }
  next();
};
module.exports = authentication;
