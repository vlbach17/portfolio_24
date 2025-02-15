// postcss.config.js
import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';

export default {
  plugins: [
    autoprefixer,
    cssnanoPlugin({
      preset: 'default',
    }),
  ],
};
