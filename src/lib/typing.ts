export interface Session {
  id: number
  to_user: {
    id: number
    avatar_url: string
    username: string
    description: string
  }
  unreadCount: number
  last_msg: ChatMessage
  is_created: boolean
  identity?: any
}

type ChatMessageCommon = {
  user_id: number
  msg_seq: number
  updated_on: number
  received?: true
}

export enum MessageType {
  Text = 0,
  URL = 1,
  AUDIO = 2,
}

export type TextContent = {
  Text: string
  TextImage?: string
  TextVoice?: string
  TextVoiceSecond?: number
}
export type URLImageContent = {
  URL: string
  ImageBlur: boolean
}
export type ChatMessage = ChatMessageCommon &
  (
    | {
        content: TextContent
        msg_type: MessageType.Text
        // recommendations: string[]
      }
    | {
        content: URLImageContent
        msg_type: MessageType.URL
        // recommendations: string[]
      }
    | {
        content: {
          URL: string
          Size: number
          Second: number
        }
        msg_type: MessageType.AUDIO
        // recommendations: string[]
      }
  )
export interface Bot {
  user_id: number
  avatar_url: string
  username: string
  tags: string[]
  description: string
  like_number: string
  readable_received_like_number: string
  chat_number: string
  is_favorite: 0 | 1
}

export interface Tag {
  id: number
  label: string
  l10n_label: Record<string, string>
}

export type User = {
  id: number
  username: string
  avatar_url: string
  birthday?: string | null
  city_name?: string | null
  description?: string
  gender?: number
  getui_cid?: string
  has_video_album?: number
  is_contact_block?: boolean
  is_invisible?: boolean
  is_sms_notify?: boolean
  like_number?: number
  my_album?: any[]
  notify?: any | null
  phone_number?: string | null
  received_like_number?: number
  review_avatar?: string
  review_desc?: string
  review_username?: string
  email: string
  diamond: number | null
  diamonds: number
  text_number: number
} & (
  | {
      vip_expire_time: number
      vip_level: 1 | 2 | 3
    }
  | {
      vip_expire_time: null
      vip_level: 0
    }
)

export interface Conversation {
  unreadCount: number
  userProfile: {
    userID: string
  }
}

export interface Album {
  url: string
  is_favorite: 0 | 1
  like_number: number
  id: number
}

export interface MoreData<T> {
  next_url: string | null
  data: T[]
}
