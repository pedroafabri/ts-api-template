import pino from 'pino';
import { env, NODE_ENV } from '@/core';

const isDev = env.NODE_ENV !== NODE_ENV.Production;

const targets: pino.TransportTargetOptions[] = [
  {
    level: 'error',
    target: './slack-transport/slack-transport.js',
    options: {
      webhookUrl: env.SLACK_ERROR_WEBHOOK,
    },
  },
];

if (isDev) {
  targets.push({
    level: 'debug',
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
      ignore: 'pid,hostname',
    },
  });
}

const transport = pino.transport({ targets });

export const logger = pino({ level: env.LOG_LEVEL }, transport);
