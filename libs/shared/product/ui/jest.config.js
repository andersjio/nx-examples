module.exports = {
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../../coverage/libs/shared/product/ui',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'shared-product-ui',
  reporters: [
		'default',
		[
			'jest-junit',
			{
				outputDirectory: './coverage/libs/shared/product/ui',
				outputName: './test-results-unit.xml',
			}
		]
	]
};
