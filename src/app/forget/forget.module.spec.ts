import { ForgetModule } from './forget.module';

describe('ForgetModule', () => {
  let forgetModule: ForgetModule;

  beforeEach(() => {
    forgetModule = new ForgetModule();
  });

  it('should create an instance', () => {
    expect(forgetModule).toBeTruthy();
  });
});
