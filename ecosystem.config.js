module.exports = {
  apps: [
    {
      name: 'user-api',
      script: './dist/main.js',
      env: {
        DATABASE_HOST: 'localhost',
      },
    },
  ],
};
