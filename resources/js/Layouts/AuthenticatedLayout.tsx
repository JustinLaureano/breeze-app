import { useState, PropsWithChildren, ReactNode } from 'react';
import { User } from '@/types';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {

    return (
        <div className="min-h-screen">
            <h1 className="pb-12">Authenticated</h1>
            <main>{children}</main>
        </div>
    );
}
