export type TTSAudio = {
  data: ArrayBuffer;
  contentType: string;
};

export interface TTSProvider {
  synthesize(text: string, signal?: AbortSignal): Promise<TTSAudio>;
}

export class TTSConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TTSConfigurationError';
  }
}

export class TTSProviderError extends Error {
  constructor(
    message: string,
    public readonly statusCode = 502
  ) {
    super(message);
    this.name = 'TTSProviderError';
  }
}
