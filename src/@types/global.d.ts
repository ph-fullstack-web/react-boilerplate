/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, ReactNode } from 'react';

declare global {
    export type ApprovedAny = any;

    export interface ComponentWithChildren<T = ReactNode> {
        children?: T;
    }

    export interface ComponentWithRef<T = unknown> {
        ref?: MutableRefObject<T>;
    }
}
