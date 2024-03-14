import * as SUT from './text'

describe('utils/text', function () {
  describe('formatWithLineBreaks', function() {
    it('returns a string with line breaks on each /n', () => {
      const element = SUT.formatWithLineBreaks('test\ntest2')
      console.log(element[0].props.children[0])
      expect(element.length).toEqual(2)
      expect(element[0].props.children[0]).toEqual('test')
      expect(element[1].props.children[0]).toEqual('test2')
    })
  })
})
