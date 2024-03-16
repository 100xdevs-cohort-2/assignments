/**
 * This function is an optimization for small basic latin strings.
 * @internal
 * @remarks
 * ### Important characteristics:
 * - If the uint8array or distance between start and end is 0 this function returns an empty string
 * - If the byteLength of the string is 1, 2, or 3 we invoke String.fromCharCode and manually offset into the buffer
 * - If the byteLength of the string is less than or equal to 20 an array of bytes is built and `String.fromCharCode.apply` is called with the result
 * - If any byte exceeds 128 this function returns null
 *
 * @param uint8array - A sequence of bytes that may contain basic latin characters
 * @param start - The start index from which to search the uint8array
 * @param end - The index to stop searching the uint8array
 * @returns string if all bytes are within the basic latin range, otherwise null
 */
export function tryLatin(uint8array: Uint8Array, start: number, end: number): string | null {
  if (uint8array.length === 0) {
    return '';
  }

  const stringByteLength = end - start;
  if (stringByteLength === 0) {
    return '';
  }

  if (stringByteLength > 20) {
    return null;
  }

  if (stringByteLength === 1 && uint8array[start] < 128) {
    return String.fromCharCode(uint8array[start]);
  }

  if (stringByteLength === 2 && uint8array[start] < 128 && uint8array[start + 1] < 128) {
    return String.fromCharCode(uint8array[start]) + String.fromCharCode(uint8array[start + 1]);
  }

  if (
    stringByteLength === 3 &&
    uint8array[start] < 128 &&
    uint8array[start + 1] < 128 &&
    uint8array[start + 2] < 128
  ) {
    return (
      String.fromCharCode(uint8array[start]) +
      String.fromCharCode(uint8array[start + 1]) +
      String.fromCharCode(uint8array[start + 2])
    );
  }

  const latinBytes = [];
  for (let i = start; i < end; i++) {
    const byte = uint8array[i];
    if (byte > 127) {
      return null;
    }
    latinBytes.push(byte);
  }

  return String.fromCharCode(...latinBytes);
}
