import './globals.css';

import { getEnvironmentInfo } from '@/helpers/environment';

import RootLayoutClient from '@/components/root-layout';
import Footer from '@/components/footer';

const environmentInfo = getEnvironmentInfo();

export const metadata = {
    title: 'Cron Hook',
    other: {
        ...environmentInfo,
    },
};

export default function RootLayout({ children }) {
    return (
        <RootLayoutClient>
            {children}
            <Footer semver={environmentInfo.semver} short={environmentInfo['commit-short']} />
        </RootLayoutClient>
    );
}
