import { Rubik } from 'next/font/google';
import { cn } from '@/helpers/utils';
import Fire from '@/icons/fire';

const barlow = Rubik({
    subsets: ['latin'],
    display: 'swap',
    weight: '900',
    style: 'italic',
});

export default function Logo({ className }) {
    return (
        <h1
            className={cn(
                barlow.className,
                'flex flex-row text-3xl uppercase antialiased tracking-tight text-white no-underline',
                className,
            )}
        >
            <Fire />
            <span>CRON</span>
            <span className='text-red-500 no-underline'>HOOK</span>
        </h1>
    );
}
