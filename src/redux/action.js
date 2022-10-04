
export const ALLOWED = 'ALLOWED';
export const NOTALLOWED = "NOTALLOWED" 

export function allow(){
    return {type:ALLOWED}
}

export function notAllow(){
    return {type:NOTALLOWED}
}
