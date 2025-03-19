import loglevel, { LogLevelNames } from 'loglevel'

loglevel.setLevel((process.env.LOGLEVEL as LogLevelNames) || loglevel.levels.INFO)

export default loglevel
