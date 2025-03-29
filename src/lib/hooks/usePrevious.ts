import { useRef, useEffect } from 'react';

/**
 * usePrevious saves the previous value of a state or prop, 
 * which can be handy for animations, form data, or complex state management.
 *
 * @param value initial value.
 * @returns {value} previous value.
 *
 * @example
 * const previousCount = usePrevious(count);
 */
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
