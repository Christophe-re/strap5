export interface LibConfig {
  backendUrl:   string
}

const defaultConfig: LibConfig = {
  backendUrl: 'http://localhost:1337/',
};

let globalConfig: LibConfig = { ...defaultConfig };

export function setGlobalConfig(newConfig: Partial<LibConfig>) {
  globalConfig = { ...globalConfig, ...newConfig };
}

export function getGlobalConfig(): LibConfig {
  return globalConfig;
}