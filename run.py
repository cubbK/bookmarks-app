from subprocess import CREATE_NEW_CONSOLE, Popen


def spawnConsole(command):
    Popen(command,
          creationflags=CREATE_NEW_CONSOLE)


# read parameter does not close the console after the script finishes executing
spawnConsole('bash -c "cd client && yarn start; read"')
spawnConsole('bash -c "cd client && yarn docz:dev; read"')
spawnConsole('bash -c "cd server && yarn start; read"')
spawnConsole('bash -c "docker-compose up; read"')
