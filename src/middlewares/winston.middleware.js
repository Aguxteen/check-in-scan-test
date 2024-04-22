import expressWinston from "express-winston";
import { transports, format } from "winston";
export const winstonMiddleware = expressWinston.logger({
  transports: [
    new transports.Console(),
    new transports.File({
      level: "warn",
      filename: "logsWarnings.log",
    }),
    new transports.File({
      level: "error",
      filename: "errorsWarnings.log",
    }),
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.prettyPrint()
  ),
  statusLevels: true,
});
