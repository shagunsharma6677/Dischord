import clc from 'cli-color';

const log = (message) => {
  console.log(clc.white(`[INFO] ${message}`));
};

const error = (message) => {
  console.error(clc.red(`[ERROR] ${message}`));
};

const warn = (message) => {
  console.warn(clc.yellow(`[WARN] ${message}`));
};

const debug = (message) => {
  if (process.env.NODE_ENV !== 'production') {
    console.debug(clc.blue(`[DEBUG] ${message}`));
  }
};

export { log, error, warn, debug };
