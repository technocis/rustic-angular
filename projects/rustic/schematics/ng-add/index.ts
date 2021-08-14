import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function ngAdd(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    console.log(options);
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
