module.exports = {
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/shared/header',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'shared-header',
	reporters: [
		'default',
		[
			'jest-junit',
			{
				outputDirectory: './coverage/libs/shared/header',
				outputName: './test-results-unit.xml',
			}
		]
	]
};
