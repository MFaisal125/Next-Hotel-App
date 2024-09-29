const authorization = (...role) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!role.includes(userRole)) {
      return res.send({
        success: false,
        message: "You are not authorized to access this feature",
      });
    }
    next();
  };
};

export default authorization;
