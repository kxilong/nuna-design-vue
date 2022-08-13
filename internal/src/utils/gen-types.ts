import { buildOutput, projRoot, epRoot } from '@chili-ui/internal/src';
import glob from 'fast-glob';
import { Project, SourceFile } from 'ts-morph';
import path from 'path';
import fs from 'fs/promises';
import { series } from 'gulp';

const outDir = path.resolve(buildOutput, 'types');

export const genEntryTypes = async () => {
  const files = await glob('*.ts', {
    cwd: epRoot,
    absolute: true,
    onlyFiles: true,
  });
  const project = new Project({
    compilerOptions: {
      emitDeclarationOnly: true,
      outDir,
      baseUrl: projRoot,
      preserveSymlinks: true,
      skipLibCheck: true,
      noImplicitAny: false,
    },
    tsConfigFilePath: path.resolve(projRoot, 'tsconfig.web.json'),
    skipAddingFilesFromTsConfig: true,
  });

  const sourceFiles: SourceFile[] = [];
  files.map(f => {
    const sourceFile = project.addSourceFileAtPath(f);
    sourceFiles.push(sourceFile);
  });
  await project.emit({
    emitOnlyDtsFiles: true,
  });
  const tasks = sourceFiles.map(async sourceFile => {
    const emitOutput = sourceFile.getEmitOutput();
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath();
      await fs.mkdir(path.dirname(filepath), { recursive: true });
      await fs.writeFile(filepath, outputFile.getText().replaceAll('@chili-ui', '.'), 'utf8');
    }
  });
  await Promise.all(tasks);
};

export const genTypes = series(genEntryTypes);
