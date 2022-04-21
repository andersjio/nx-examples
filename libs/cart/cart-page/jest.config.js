module.exports = {
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/cart/cart-page',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cart-cart-page',
	reporters: [
		'default',
		[
			'jest-junit',
			{
				outputDirectory: './coverage/libs/cart/cart-page',
				outputName: './test-results-unit.xml',
			}
		]
	]
};
