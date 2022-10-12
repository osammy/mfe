const { readdir } = require('fs/promises');
const { exec } = require('child_process');

const installDeps = (folder) => {
var yourscript = exec(`sh install.sh packages/${folder}`,
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
}
const getDirectories = async source =>
  (await readdir(source, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
        installDeps(dirent.name)
    })

    getDirectories('./packages')

