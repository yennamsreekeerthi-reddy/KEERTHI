const homelist=(req, res) => {
  res.render('index', { title: 'Home' });
}
const locationInfo=(req, res) => {
  res.render('index', { title: 'Location Info' });
}
const addReview=(req, res) => {
  res.render('index', { title: 'addReview' });
}

module.exports = {
  homelist,
  locationInfo,
  addReview
};