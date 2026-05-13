export function loginBodyChecker(req, res, next) {
  console.log(req.body);
  if (!req.body) {
    return res.status(404).json({ success: false, message: "body not found" });
  } else if (!req.body.userEmail || !req.body.userPassword) {
    return res
      .status(404)
      .json({ success: false, message: "incomplete data has been provided" });
  } else {
    if (req.body.userEmail == "") {
      return res
        .status(404)
        .json({ success: false, message: "Your user email is empty" });
    } else if (req.body.userPassword == "") {
      return res
        .status(404)
        .json({ success: false, message: "Your user password is empty" });
    } else {
      next();
    }
  }
}
export function signinBodyChecker(req, res, next) {
  if (!req.body) {
    return res.status(404).json({ success: false, message: "body not found" });
  } else if (
    !req.body.userName ||
    !req.body.userEmail ||
    !req.body.userPassword
  ) {
    return res
      .status(404)
      .json({ success: false, message: "incomplete data has been provided" });
  } else {
    if (req.body.userName == "") {
      return res
        .status(404)
        .json({ success: false, message: "Your user name is empty" });
    } else if (req.body.userEmail == "") {
      return res
        .status(404)
        .json({ success: false, message: "Your user email is empty" });
    } else if (req.body.userPassword == "") {
      return res
        .status(404)
        .json({ success: false, message: "Your user password is empty" });
    } else {
      next();
    }
  }
}
