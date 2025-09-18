import jwr from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  if (!req.headers || !req.headers.authorization) {
    return res
      .status(401)
      .json({ error: "Token não fornecido ou cabeçalho inválido" });
  }

  const token = req.headers.authorization.split(" ")[1];
  console.log(token);

  try {
    const decoded = jwr.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido ou expirado" });
  }
};

export default authMiddleware;
