import { Link, Head, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { useEffect } from 'react';

export default function TestIndex(props: PageProps) {

    return (
        <GuestLayout>
            <Head title="Test Index" />
            <div>
                <h1 className="pb-4">Test Index</h1>

            </div>
        </GuestLayout>
    );
}
