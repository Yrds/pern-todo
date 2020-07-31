/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production';
      REACT_APP_API_URL: string;
    }
}
