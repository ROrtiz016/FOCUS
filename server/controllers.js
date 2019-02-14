module.exports = {
  register: async(req, res) => {
    const{username, password} = req.body;
      req.app.get('db').registerUser([username, password])
      .then(user => {
            let {id, username} = user[0]
            req.session.username = username;
            req.session.userId = id;
            res.status(200);
        })
          .catch( err => {
            console.log(err)
            res.sendStatus(500)
        })
  },

  login: (req, res) => {
    const db = req.app.get('db')
    let session = req;
    let{username, password} = req.body;
    
      db.userLogin([username, password])
      .then(user => {
        if(user[0]){
          if(user[0].bcrypt_password === password){
            session.user.id = user[0].id
            res.status(200).send(session.user)
            console.log(session.data.config.data)
          }
          if(user[0].bcrypt_password !== password){
            res.status(401).send('Unauthorized')
          }
        }else{
          res.status(401).send('Unauthorized')
        }
      })
      .catch(() => res.send('not a user'))
  },
  
  getUsers: (req, res) => {
    const db = req.app.get('db')
    db.getUsers()
    .then(users => res.status(200).send(users))
  }

}