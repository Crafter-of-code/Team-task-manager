export function getUsers(req, res) {
  res
    .status(200)
    .json({ success: true, message: "Your are requesting at all user route" });
}
export function getUser(req, res) {
  res.status(200).json({ success: true, message: "you got only one user" });
}
export function deleteUser(req, res) {
  req
    .status(200)
    .json({ success: true, message: "Your requested user has been deleted" });
}
