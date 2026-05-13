export default function cookieChecker(req, res, next) {
  console.log("we got the request");
  const { _em } = req.cookies;
  console.log(_em);
}
