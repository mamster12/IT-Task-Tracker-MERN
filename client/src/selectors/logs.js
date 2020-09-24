// Get visible logs
export default ({ logs, text }) => {
    return logs !== null
        ? logs.filter((log) => {
              const regex = new RegExp(`${text}`, 'gi');
              return log.message !== undefined && log.tech !== undefined
                  ? log.message.match(regex) ||
                        log.tech.match(regex) ||
                        log.attention.toString().match(regex)
                  : null;
          })
        : null;
};
