import { Link, Head, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

interface Props {
    auth: any,
    rest: any
}

export default function Teammates({ auth, ...rest } : Props) {
    const clockout = (e: React.MouseEvent<HTMLElement>) => {
        router.post(route('clockout'));
    }

    return (
        <GuestLayout>
            <Head title="Teammates" />
            <div>

                <h1>Teammates Page</h1>

                <button onClick={clockout} className="border border-black p-1 rounded">Clock Out</button>

            </div>
        </GuestLayout>
    );
}
