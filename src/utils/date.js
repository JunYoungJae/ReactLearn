const getTodayYYMMDD = () => {
  var _now = new Date();
  var dd = String(_now.getDate()).padStart(2, '0');
  var mm = String(_now.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yy = String(_now.getFullYear()).substr(2, 2);
  var today = yy + mm + dd;

  return today;
};

module.exports = { getTodayYYMMDD };
