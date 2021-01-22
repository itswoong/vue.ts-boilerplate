import chalk from 'chalk'
import child from 'child_process'
import shell from 'shelljs'
import path from 'path'

const projectRoot = path.join(process.cwd())

shell.echo(chalk.green('vuejs type check start!! :)'))

try {
    child.execSync(
        `npx vtc --workspace ${projectRoot} --srcDir ${path.join(
            projectRoot,
            'src'
        )}`,
        {
            cwd: projectRoot,
            encoding: 'utf-8',
            stdio: 'inherit'
        }
    )
} catch (e) {
    shell.echo(chalk.red('an unknown error has occurred.'))
    process.exit(1)
}

process.exit(0)
