
// Messages are sent to and from the server.
export type Message = {
  type: string,
};

// Messages from the client to the server are called Requests
export type Request = Message;
// Messages from the server to the client are called Responses
export type Response = Message;

// The first request made is the ConfigRequest, but it is optional.
// This asks the server for guidelines on making the certificate
export type ConfigRequest = Request & {
  type: 'CONFIG_REQUEST',
};

// The server returns a Config object to the client
export type ConfigResponse = Response & {
  type: 'CONFIG_RESPONSE',
  data: Config,
};

// Configs will contain the suggested key strength and a suggested name for the key
// Configs are guidelines, however requests not exceed the notBefore and notAfter dates, and not be longer than maxLife
export type Config = {
  keyStrength: number,
  subjectName: string,
  notBefore: string, // ISO 8601
  notAfter: string, // ISO 8601
  maxLife: number, // Max length in seconds
};

// Once the client has created the certificate, it will request server sign the certificate
export type CertificateSigningRequest = Request & {
  type: 'CERTIFICATE_SIGNING_REQUEST',
  data: string, // PEM
};

// Assuming everything is ok the server will respond with a signed certificate
export type SignedCertificateResponse = Request & {
  type: 'SIGNED_CERTIFICATE_RESPONSE',
  data: string, // PEM
};

// If there was a problem with the request it will fail and a reason will be given
export type FailedRequestResponse = Request & {
  type: 'FAILED_REQUEST_RESPONSE',
  data: string, // reason
};
