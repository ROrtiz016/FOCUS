const imposter = {
  id: 3,
  user_name: 'ruben1',
  password: 'test'	
}

module.exports = {
  bypassAuthInDevelopment: (req, res, next) => {
    if(!req.session.user && process.env.NODE_ENV === 'development') {
      req.session.user = imposter
    }
    next()
  }
}