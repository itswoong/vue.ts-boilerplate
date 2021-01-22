import chalk from 'chalk'
import child from 'child_process'
import fs from 'fs'
import shell from 'shelljs'
import ts from 'typescript'

const args = process.argv.slice(2)
const projectRoot = args[0]
if (!projectRoot) {
    shell.echo(chalk.red('project root params is required.'))
    process.exit(1)
}

process.stdin.resume()

const restoreTsconfig = () => {
    child.execSync('git restore tsconfig.json', { cwd: projectRoot })
}

const exitHandler = () => {
    restoreTsconfig()
    process.exit(1)
}

process.on('SIGINT', exitHandler)
process.on('SIGUSR1', exitHandler)
process.on('SIGUSR2', exitHandler)
process.on('uncaughtException', exitHandler)

shell.echo(chalk.green('tsc type check start!! :)'))

try {
    const stagedFiled = child
        .execSync(
            'git diff --cached --name-only --diff-filter=ACM | grep -E ".*.ts$"',
            { cwd: projectRoot }
        )
        .toString()
        .replace(/\r/g, '')
        .split('\n')
        .filter(t => t.length > 0)

    if (stagedFiled.length > 0) {
        const tsconfig = ts.readConfigFile('tsconfig.json', ts.sys.readFile)
        tsconfig.config.include = stagedFiled

        fs.writeFileSync(
            'tsconfig.json',
            JSON.stringify(tsconfig.config, null, 4)
        )
        child.execSync('npx tsc --noEmit --project .', {
            cwd: projectRoot,
            encoding: 'utf-8',
            stdio: 'inherit'
        })

        restoreTsconfig()
    }
} catch (e) {
    console.log(e)
    shell.echo(chalk.red('an unknown error has occurred.'))
    exitHandler()
}

process.exit(0)
