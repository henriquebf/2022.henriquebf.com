import { classNames } from './classnameHelper';

describe('classNames', () => {
  it('Single classname', () => {
    expect(classNames(['xxx'])).toEqual('xxx');
  });

  it('Multiple classnames', () => {
    expect(classNames(['xxx', 'yyy', 'zzz'])).toEqual('xxx yyy zzz');
  });

  it('Multiple classnames with falsy', () => {
    expect(classNames(['xxx', 'yyy', 'zzz', undefined, 0])).toEqual(
      'xxx yyy zzz'
    );
  });
});
