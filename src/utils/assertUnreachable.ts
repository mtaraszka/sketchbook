export const assertUnreachable = (variable?: never): never => {
    throw new Error('Should not reach here');
}
