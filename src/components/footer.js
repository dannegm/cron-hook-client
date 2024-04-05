import Link from 'next/link';

export default function Footer({ semver, short }) {
    return (
        <footer className='fixed bottom-4 left-4 right-4 flex flex-row gap-2 justify-center text-sm text-white'>
            <span className='opacity-75'>v{semver}</span>
            <Link href={`https://github.com/dannegm/cron-hook-client/tree/${short}`}>
                <span className='opacity-50'>#{short}</span>
            </Link>
        </footer>
    );
}
