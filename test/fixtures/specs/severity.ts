import { Severity } from 'allure2-js-commons';
import { suite, test } from 'mocha-typescript';
import { MochaAllureInterface } from '../../../src/MochaAllureInterface';

// @ts-ignore
const allure: MochaAllureInterface = global.allure;

@suite
class SeveritySubSuite {
  @test
  shouldAssignSeverity() {
    allure.setSeverity(Severity.BLOCKER);
  }
}
