const isISO8061 = function(dateString) {
    let rex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    return rex.test(dateString);
  };
  
  const isNumeral = function(dateString) {
    let rex = /^[0-9]+$/;
    return rex.test(dateString);
  };
  
  const throwError = function(){
    throw new Error()
  }
  
  module.exports = function parseDate(dateString) {
    if(dateString == null)
      return new Date()
    const _dateString = isISO8061(dateString)
      ? dateString
      : isNumeral(dateString)
      ? parseInt(dateString)
      : throwError();
    return new Date(_dateString);
  };
  