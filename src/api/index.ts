import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { post } from '@/utils/request'

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  })
}

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  })
}

export function fetchChatAPIProcess<T = any>(
  params: {
    chatMessages: Chat.Chat[]
    systemMessage: string
    temperature: number
    top_p: number
    max_tokens: number
    frequency_penalty: number
    presence_penalty: number
    signal?: GenericAbortSignal
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void },
) {
  const data: Record<string, any> = {
    messages: params.chatMessages,
    max_tokens: params.max_tokens,
    systemMessage: params.systemMessage,
    temperature: params.temperature,
    top_p: params.top_p,
    frequency_penalty: params.frequency_penalty,
    presence_penalty: params.presence_penalty,
  }

  return post<T>({
    url: '/chat/conversation',
    data,
    signal: params.signal,
    onDownloadProgress: params.onDownloadProgress,
  })
}

export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  })
}

export function fetchVerify<T>(token: string) {
  return post<T>({
    url: '/verify',
    data: { token },
  })
}
