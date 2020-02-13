fs.writeFile("/tmp/servegit.pid", process.pid.toString());

process.once("exit", () => fs.unlink("/tmp/servegit.pid")); // delete pid file
