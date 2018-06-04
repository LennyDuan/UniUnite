import 'babel-polyfill';
import { debug } from '../util/logger';

export
const logOutput = async (payload, context, callback) => {
  debug(payload);
  debug(context);
  debug(callback);
  callback(null, '200');
};
