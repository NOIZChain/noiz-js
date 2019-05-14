import { IChatMessage } from '@/generated/schema-types';

export interface ChatTheme {
    primaryColor: string,
    secondaryColor: string,
    backgroundImage: string,
    logo: string,
}

export type ChatMessageCallback = (message: IChatMessage) => any