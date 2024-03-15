import {
  MISC, PROJECTS, SKILLS, WORK,
} from '@/types/constants'
import * as SUT from './images'

describe('getImagePath', () => {
  it('returns the correct image path for a given image name', () => {
    expect(SUT.getImagePath(SKILLS.REACT)).toEqual('/skills/react.png')
    expect(SUT.getImagePath(SKILLS.NODEJS)).toEqual('/skills/node-js.png')
    expect(SUT.getImagePath(WORK.FREELANCE)).toEqual('/work/freelance.png')
    expect(SUT.getImagePath(PROJECTS.BALNS)).toEqual('/projects/balns.png')
    expect(SUT.getImagePath(MISC.PROFILE)).toEqual('/images/profile.jpeg')
  })

  it('returns undefined for an invalid image name', () => {
    expect(SUT.getImagePath('invalid')).toBeUndefined()
  })
})
