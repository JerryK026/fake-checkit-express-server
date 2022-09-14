// kor-version

/**
 * ===Korean===
 * language can be replaced by plugin
 */
export default {
  // env errors
  ENV_NOT_FOUND_ERROR: '⚠️ .env 파일을 찾을 수  없습니다! ⚠️',
  ENV_CORS_ERROR: '.env 파일의 corsOrigin은 []로 감싸져야 하며 ""만 허용됩니다.',

  SERVER_RUNNING: function (port: number) {
    return `
    =============Server Listening=============
    ${port}번 포트에서 서버가 실행되었습니다!
    ==========================================
    `;
  },
};
