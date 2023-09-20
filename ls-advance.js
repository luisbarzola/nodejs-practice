// acceder a un directorio pasado por parámetro  y listar su contenido
const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const directory = process.argv[2] ?? ".";

async function ls(directory) {
  let files;
  try {
    files = await fs.readdir(directory);
  } catch {
    console.error(`El directorio no existe: ${directory}`);
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(directory, file);
    const stats = await fs.stat(filePath);

    const fileType = stats.isDirectory() ? "d" : "f";
    const size = stats.size;
    const modified = stats.mtime.toLocaleString();

    return `${pc.white(fileType)} ${pc.blue(file.padEnd(25))} ${pc.red(
      size.toString().padEnd(10)
    )} ${pc.yellow(modified)}`;
  });

  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(directory);
