const WorkerPlugin = require('worker-plugin');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
const path = require('path');

module.exports = {
    webpack: {
        plugins: {
            add:
                process.env.NODE_ENV === 'production'
                    ? [
                          new WorkerPlugin(),
                          new UnusedWebpackPlugin({
                              // Source directories
                              directories: [path.join(__dirname, 'src')],
                              // Exclude patterns
                              exclude: ['*.test.ts', '*.stories.tsx'],
                              // Root directory (optional)
                              root: __dirname,
                          }),
                      ]
                    : [new WorkerPlugin()],
        },
    },
};
