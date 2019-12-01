const isISO8061 = function(dateString) {
    let rex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    return rex.test(dateString);
  };
  
  const isNumeral = function(dateString) {
    let rex = /^[0-9]+$/;
    return rex.test(dateString);
  };
  
  const format = function (dateString){
    const _dateString = isISO8061(dateString)
      ? dateString
      : isNumeral(dateString)
      ? parseInt(dateString)
      : new Error();
    
    return _dateString
  }
  
  module.exports = function parseDate(dateString) {
    if(dateString == null)
      return new Date()
    const formatted = format(dateString)
    
    return formatted instanceof Error? formatted : new Date(formatted);
  };
  