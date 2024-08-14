import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Home(props: PageProps) {

    console.log(props.currentRequests)

    return (
        <>
            <Head title="Home" />
            <div>
                <h1>Home</h1>

            </div>
        </>
    );
}
