const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: [process.env.NODE_ENV === 'production' ? './build' : '.'],
        extensions: ['.ts', '.js', '.json'],
      },
    ],
  ],
};
