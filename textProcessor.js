var moment = require('moment');

function processText(message){
  message = message.replace('{weekFromToDate}', weekFromToDate());
  return message;
}

function weekFromToDate(){
  const fromDate = moment().startOf('isoWeek');
  const toDate = moment().endOf('isoWeek').subtract(2,'days');
  return fromDate.format('DD.M') + ' - ' + toDate.format('DD.M');
}

exports.processText = processText;
