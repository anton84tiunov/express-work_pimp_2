import winston, { format } from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.label({ label: 'your-service' }),
    format.timestamp(),
    format.printf(({ level, message, label, timestamp, file, line }) => {
      return `${timestamp} [${label}] ${file}:${line} ${level}: ${message}`;
    })
  ),
  defaultMeta: { service: 'your-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;