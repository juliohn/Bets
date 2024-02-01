import moment from 'moment';

export const FormatDateENHour = date => moment(date, 'YYYY-MM-DDTHH:mm:ss[Z]').format('MM-DD-YYYY H:mm:ss');
