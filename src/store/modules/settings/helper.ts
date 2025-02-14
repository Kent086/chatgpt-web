import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
  max_tokens: number
  frequency_penalty: number
  presence_penalty: number
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: '你是一个帮助用户查找信息的 AI 助手。',
    temperature: 0.7,
    top_p: 0.95,
    max_tokens: 3000,
    frequency_penalty: 0,
    presence_penalty: 0,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
