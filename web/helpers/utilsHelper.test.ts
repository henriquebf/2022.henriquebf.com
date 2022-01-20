import { classNames } from './utilsHelper';

describe('classNames', () => {
  it('Single classname', () => {
    expect(classNames(['xxx'])).toEqual('xxx');
  });

  it('Multiple classnames', () => {
    expect(classNames(['xxx', 'yyy', 'zzz'])).toEqual('xxx yyy zzz');
  });

  it('Multiple classnames with falsy', () => {
    expect(classNames(['xxx', 'yyy', 'zzz', undefined])).toEqual('xxx yyy zzz');
  });
});
