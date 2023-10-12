import { OutputTarget } from '../Summary';

export class ConsoleReportim implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
