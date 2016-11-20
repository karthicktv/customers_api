/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUser : (req, res, next) => {
    User.find({id: req.params.id}).exec((err, userFound) => {
      if(userFound.length == 0) return res.notFound();
      Joke.fetchJoke().then(joke => {
        userFound[0].joke = joke;
        return res.json(userFound[0])
      }).catch(error =>{
        userFound[0].joke = '';
        return res.json(userFound[0])
      });
    });
	}
};

