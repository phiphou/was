import {Pipe} from '@angular/core';

/**
 * Truncate a string to the given length and append suffix.
 * @param	length Text max length. Default 20.
 * @param	suffix Appended to the end of the string if truncted. Default '...'.
 * @example Usage:
 * ```html
 * <p>{{ 'Hello world' | truncate:5:'...' }}</p>
 * <!-- Formats to: 'Hello...' -->
 * ```
 */
@Pipe({ name: 'truncate' })
export class TruncatePipe {
  transform(v: string, args: any[] = []): any {
    let len = parseInt(args[0] || '20', 10),
      suffix = args[1] || '...';
    return v.length <= len ? v : v.substring(0, len) + suffix;
  }
}
