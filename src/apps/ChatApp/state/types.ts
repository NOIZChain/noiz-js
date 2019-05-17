import { IChatMessage } from '@/generated/schema-types';

export type Justification = 'left' | 'right' | 'center'

export interface ChatTheme {
    headerColor?: string,
    headerJustification?: Justification
    headerHeight?: string
    botColor?: string
    clientColor?: string
    backgroundImage?: string,
    logo?: string,
    answerBorder?: string,
    answerSelectedColor?: string,
    submitColor?: string
}

export type ChatMessageCallback = (message: IChatMessage) => any
