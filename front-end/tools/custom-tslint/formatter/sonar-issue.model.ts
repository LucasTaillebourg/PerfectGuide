export interface SonarIssueFormat {
  engineId: string;
  ruleId: string;
  primaryLocation: SonarLocation;
  secondaryLocations?: SonarLocation[];
  type: SonarBugType;
  severity: SonarSeverity;
  effortMinutes: number;
}
export interface SonarLocation {
  message: string;
  filePath: string;
  textRange: SonarTextRange;
}
export interface SonarTextRange {
  startLine: number;
  startColumn?: number;
  endLine?: number;
  endColumn?: number;
}
export enum SonarSeverity {
  BLOCKER='BLOCKER',
  CRITICAL='CRITICAL',
  MAJOR='MAJOR',
  MINOR='MINOR',
  INFO='INFO'
}
export enum SonarBugType {
  BUG='BUG',
  VULNERABILITY='VULNERABILITY',
  CODE_SMELL='CODE_SMELL'
}
