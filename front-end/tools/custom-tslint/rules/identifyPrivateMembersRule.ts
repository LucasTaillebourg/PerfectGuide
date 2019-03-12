import * as Lint from 'tslint';
import * as utils from "tsutils";
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = 'private members should be clearly identified with "_"';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new IndetifyPrivateMembersWalker(sourceFile, this.ruleName, new Set(this.ruleArguments.map(String))));
  }
}

class IndetifyPrivateMembersWalker extends Lint.AbstractWalker<Set<string>> {
  public walk(sourceFile: ts.SourceFile) {
    const cb = (node: ts.Node): void => {
      if (this.shouldCheck(node)) {
        this.checkPrivateMembers(node as ts.ParameterDeclaration | ts.PropertyDeclaration | ts.VariableDeclaration);
      } else {
        // Continue rescursion: call function `cb` for all children of the current node.
        return ts.forEachChild(node, cb);
      }
    };

    // Start recursion for all children of `sourceFile`.
    return ts.forEachChild(sourceFile, cb);
  }

  private checkPrivateMembers(node: ts.ParameterDeclaration | ts.PropertyDeclaration | ts.VariableDeclaration) {
    if (!node.name.getText().startsWith('_')) {
      // Add failures to the Walker.
      // TODO? : add fix avec refactoring des variables (possible?)
      this.addFailureAtNode(node, Rule.FAILURE_STRING);
    }
  }

  private shouldCheck(node: ts.Node): boolean {
    switch (node.kind) {
      case ts.SyntaxKind.Parameter:
      case ts.SyntaxKind.PropertyDeclaration:
      case ts.SyntaxKind.VariableDeclaration:
        return utils.isModifierFlagSet(node, ts.ModifierFlags.Private);
      default:
        return false;
    }
  }

}
