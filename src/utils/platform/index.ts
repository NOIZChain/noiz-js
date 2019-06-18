import platform from 'platform-detect';

const mobileOnlyServices = '^(tel|sms):.+$'

export function shouldDisplayExit(url: string) {
    if (isMobile()) {
        return true
    }
    const regex = new RegExp(mobileOnlyServices)

    return regex.exec(url) === null
}

export function isMobile() {
    return platform.android || platform.ios
}
