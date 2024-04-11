import Link from 'next/link';

export default function Footer({ semver, short }) {
    return (
        <footer className='fixed bottom-0 left-0 right-0 flex flex-row gap-2 justify-center p-4 pt-8 text-sm text-white bg-gradient-to-t from-black from-0% via-transparent via-80%'>
            <span className='opacity-75'>v{semver}</span>
            <Link href={`https://github.com/dannegm/cron-hook-client/tree/${short}`}>
                <span className='opacity-50'>#{short}</span>
            </Link>
        </footer>
    );
}
