module.exports = {
  adminsdk: {
    type: "service_account",
    project_id: "ionic-wealth-fa",
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email:
      "firebase-adminsdk-mt95h@ionic-wealth-fa.iam.gserviceaccount.com",
    client_id: "105592633310072656362",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mt95h%40ionic-wealth-fa.iam.gserviceaccount.com",
  },
};
