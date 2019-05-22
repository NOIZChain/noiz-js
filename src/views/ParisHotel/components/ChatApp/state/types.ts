import { IChatMessage } from '@/generated/schema-types';

export type Justification = 'left' | 'right' | 'center'
export type NoizCtaPosition = 'above-chat' | 'below-chat' | 'top' | 'bottom'

export interface ChatTheme {
    headerColor?: string,
    headerJustification?: Justification
    headerHeight?: string
    headerMobileHeight?: string
    noizCtaLocation?: NoizCtaPosition
    botColor?: string
    botTextColor?: string
    clientColor?: string
    clientTextColor?: string
    backgroundImage?: string,
    logo?: string,
    answerBorder?: string,
    answerSelectedColor?: string,
    submitColor?: string
}

export type ChatMessageCallback = (message: IChatMessage) => any
