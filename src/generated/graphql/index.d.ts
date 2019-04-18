import graphql from "graphql";

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthResponse = {
  accessToken?: Maybe<Token>;
  refreshToken?: Maybe<Token>;
  user?: Maybe<User>;
};

export type ChatMessage = {
  who?: Maybe<Scalars["String"]>;
  response?: Maybe<Array<ChatMessageValue>>;
  answers?: Maybe<Array<ChatMessageValue>>;
};

export type ChatMessageInput = {
  who?: Maybe<Scalars["String"]>;
  response?: Maybe<ChatMessageValueInput>;
};

export type ChatMessageValue = {
  kind?: Maybe<Scalars["String"]>;
  stringValue?: Maybe<Scalars["String"]>;
};

export type ChatMessageValueInput = {
  kind?: Maybe<Scalars["String"]>;
  stringValue?: Maybe<Scalars["String"]>;
};

export type ClientLocation = {
  as?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  isp?: Maybe<Scalars["String"]>;
  lat?: Maybe<Scalars["String"]>;
  lon?: Maybe<Scalars["String"]>;
  org?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  regionName?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  timezone?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
};

export enum Gender {
  Male = "MALE",
  Female = "FEMALE"
}

export type Login = {
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  login?: Maybe<AuthResponse>;
  loginWithToken?: Maybe<AuthResponse>;
  initSession?: Maybe<SessionResponse>;
  sendMessage?: Maybe<ChatMessage>;
};

export type MutationLoginArgs = {
  info: Login;
};

export type MutationLoginWithTokenArgs = {
  token?: Maybe<Scalars["String"]>;
};

export type MutationInitSessionArgs = {
  info: SessionDataInput;
};

export type MutationSendMessageArgs = {
  sessionId: Scalars["String"];
  message: ChatMessageInput;
};

export type PaginationInput = {
  page?: Maybe<Scalars["Int"]>;
  pageSize?: Maybe<Scalars["Int"]>;
};

export type PaginationResult = {
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  totalItems: Scalars["Int"];
  totalPages: Scalars["Int"];
};

export type ProcessResult = {
  success: Scalars["Boolean"];
};

export type Query = {
  health?: Maybe<SystemHealth>;
};

export enum SenderType {
  Bot = "BOT",
  Client = "CLIENT"
}

export type SessionData = {
  sessionId: Scalars["String"];
  directionDomain?: Maybe<Scalars["String"]>;
  referrerDomain?: Maybe<Scalars["String"]>;
  clientLocation?: Maybe<ClientLocation>;
  messages: Array<ChatMessage>;
};

export type SessionDataInput = {
  sessionId?: Maybe<Scalars["String"]>;
  directionDomain?: Maybe<Scalars["String"]>;
  referrerDomain?: Maybe<Scalars["String"]>;
};

export type SessionResponse = {
  session?: Maybe<SessionData>;
  firstMessage?: Maybe<ChatMessage>;
};

export type SystemHealth = {
  healthy?: Maybe<Scalars["Boolean"]>;
  message?: Maybe<Scalars["String"]>;
  greeting?: Maybe<Scalars["String"]>;
  meaningOfLife?: Maybe<Scalars["String"]>;
};

export type TextSearch = {
  searchText?: Maybe<Scalars["String"]>;
};

export type Token = {
  key: Scalars["String"];
  expires: Scalars["String"];
};

export type User = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  fullName?: Maybe<Scalars["String"]>;
  age?: Maybe<Scalars["Int"]>;
  gender?: Maybe<Gender>;
  email?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
};
export type Unnamed_1_MutationVariables = {
  info: SessionDataInput;
};

export type Unnamed_1_Mutation = { __typename?: "Mutation" } & {
  initSession: Maybe<
    { __typename?: "SessionResponse" } & {
      session: Maybe<
        { __typename?: "SessionData" } & Pick<
          SessionData,
          "sessionId" | "directionDomain" | "referrerDomain"
        > & {
            clientLocation: Maybe<
              { __typename?: "ClientLocation" } & Pick<
                ClientLocation,
                "city" | "country" | "countryCode" | "lat" | "lon"
              >
            >;
          }
      >;
      firstMessage: Maybe<
        { __typename?: "ChatMessage" } & Pick<ChatMessage, "who"> & {
            response: Maybe<
              Array<
                { __typename?: "ChatMessageValue" } & Pick<
                  ChatMessageValue,
                  "stringValue"
                >
              >
            >;
          }
      >;
    }
  >;
};
