import { logOutput } from '../../src/api/output';

const sinon = require('sinon');

describe('output', () => {
  describe('logOutput', () => {
    describe('log', () => {
      it('Should output log log', async () => {
        const callback = sinon.spy();
        await logOutput(null, null, callback);
      });
    });
  });
});
