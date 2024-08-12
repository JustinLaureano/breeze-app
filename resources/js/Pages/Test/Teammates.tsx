import { Head, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@mui/material';

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

                <Button variant="contained" onClick={clockout}>Clock Out</Button>

            </div>
        </GuestLayout>
    );
}
