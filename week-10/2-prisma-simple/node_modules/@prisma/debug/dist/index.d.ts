import { Debug, Debugger } from './types';
/**
 * Wrapper on top of the original `Debug` to keep a history of the all last
 * {@link MAX_LOGS}. This is then used by {@link getLogs} to generate an error
 * report url (forGitHub) in the case where the something has crashed.
 * @param namespace
 * @returns
 */
declare function debugCall(namespace: string): Debugger;
/**
 * This essentially mimics the original `debug` api. It is a debug function call
 * that has utility properties on it. We provide our custom {@link debugCall},
 * and expose the original original api as-is.
 */
declare const Debug: typeof debugCall & Debug;
/**
 * We can get the logs for all the last {@link MAX_LOGS} ${@link debugCall} that
 * have happened in the different packages. Useful to generate error report links.
 * @see https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
 * @param numChars
 * @returns
 */
export declare function getLogs(numChars?: number): string;
export declare function clearLogs(): void;
export { Debug };
export default Debug;
