const jwt = require('jsonwebtoken');



module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //Vient récupérer le token dans headers authorizations, coupe l'infos à l'espace, créer un tableau avec le split puis on récup l'entrée du token qui est en 2eme pos [1]
    const decodedToken = jwt.verify(token, TOKEN_KEY);
    const userId = decodedToken.userId;
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {
      throw "ID invalide";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: "Requête invalide !",
    });
  }
};

