import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
}

export default createJestConfig(config)
