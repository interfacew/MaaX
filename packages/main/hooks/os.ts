import {
  getArch,
  getPlatform,
  getSystemInformation,
  reload,
  generateIdempotentKey,
  isInDev,
} from '@main/utils/os'

export default function useOsHooks(): void {
  globalThis.main.Util = {
    getOsArch: getArch,
    getOsPlatform: getPlatform,
    getSystemInformation,
    restart: reload,
    generateIdempotentKey,
    isInDev,
  }
}
