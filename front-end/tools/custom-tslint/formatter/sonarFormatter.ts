import * as Lint from "tslint";
import {SonarIssueFormat,SonarLocation,SonarTextRange,SonarSeverity,SonarBugType} from "./sonar-issue.model";

export class Formatter extends Lint.Formatters.AbstractFormatter {

  public static metadata: Lint.IFormatterMetadata = {
    formatterName: "sonar",
    description: "Formats errors for SONAR.",
    sample: "",
    consumer: "machine",
  };

  mapSeverityByRule(rule): SonarSeverity{
    switch(rule){
      case 'no-invariant-return':
      case 'no-variable-usage-before-declaration':
        return SonarSeverity.BLOCKER;
      case 'cognitive-complexity':
      case 'cyclomatic-complexit':
      case 'no-in-misuse':
      case 'no-duplicate-super':
      case 'no-accessor-field-mismatch':
      case 'no-useless-intersection':
      case 'no-invalid-await':
      case 'prefer-default-last':
      case 'no-same-line-conditional':
      case 'curly':
      case 'no-duplicate-string':
      case 'prefer-const':
      case 'no-duplicate-in-composite':
      case 'no-shadowed-variable':
        return SonarSeverity.CRITICAL;
      case 'no-debugger':
      case 'no-console':
      case 'identify-private-members':
        return SonarSeverity.MINOR;
      default:
        return SonarSeverity.MAJOR;
    }
  }
  mapTypeByRule(rule): SonarBugType{
    switch(rule){
      case 'no-debugger':
      case 'no-console':
      case 'deprecation':
        return SonarBugType.VULNERABILITY;
      case 'no-in-misuse':
      case 'no-duplicate-super':
      case 'no-accessor-field-mismatch':
      case 'no-useless-intersection':
        return SonarBugType.BUG;
      default:
        return SonarBugType.CODE_SMELL;
    }
  }

  // TODO : effortMinutes
  // TODO : secondaryLocations:failure.secondaryLocations
  createIssue(failure: Lint.RuleFailure): SonarIssueFormat{
    return {
      engineId:"tslint",
      ruleId:failure.getRuleName(),
      primaryLocation:this.createLocation(failure),
      type:this.mapTypeByRule(failure.getRuleName()),
      severity:this.mapSeverityByRule(failure.getRuleName()),
      effortMinutes:0
    };
  }
  createLocation(failure: Lint.RuleFailure): SonarLocation{
    return {
      message: failure.getFailure(),
      filePath: failure.getFileName(),
      textRange:this.createTextRange(failure)
    };
  }
  createTextRange(failure: Lint.RuleFailure): SonarTextRange{
    let location : SonarTextRange = {startLine: failure.getStartPosition().getLineAndCharacter().line+1};
    if(failure.getEndPosition().getLineAndCharacter().line !== failure.getStartPosition().getLineAndCharacter().line && failure.getEndPosition().getLineAndCharacter().character !== failure.getStartPosition().getLineAndCharacter().character){
      location.startColumn= failure.getStartPosition().getLineAndCharacter().character;
      location.endLine=failure.getEndPosition().getLineAndCharacter().line+1;
      location.endColumn=failure.getEndPosition().getLineAndCharacter().character;
    }
    return location;
  }

  public format(failures: Lint.RuleFailure[]): string {
    let failuresJSON = failures.map((failure: Lint.RuleFailure) => this.createIssue(failure));
    return JSON.stringify({issues:failuresJSON});
  }
}
