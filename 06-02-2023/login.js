const login = (req, res, next) => {
  const { user } = req.query;

  if (user === "claudio") {
    req.user = { name: "claudio" };
    next();
  } else {
    console.log(user);
    res.status(401).send(`non sei ${user} e quindi non sei  autorizzato`);
  }
};

module.exports = login;
