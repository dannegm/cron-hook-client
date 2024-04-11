import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import cronHookApi from '@/services/cronHookApi';

import MainContainer from '@/components/main-container';
import MainHeader from '@/components/main-header';
import CronDetails from '@/components/cron-details';
import LogItem from '@/components/log-item';

export const dynamic = 'force-dynamic';

async function Logs({ id }) {
    const { data: logsData } = await cronHookApi.get(`/crons/${id}/logs`);
    const logsList = logsData?.data || [];
    return logsList.map(log => <LogItem key={log.id} log={log} />);
}

export default async function Cron({ params: { id } }) {
    try {
        const { data: cronsData } = await cronHookApi.get(`/crons/${id}`);

        return (
            <MainContainer classNames={{ container: 'pb-16' }}>
                <MainHeader />
                <CronDetails cron={cronsData.data} />

                <Suspense>
                    <Logs id={id} />
                </Suspense>
            </MainContainer>
        );
    } catch (err) {
        return redirect('/404');
    }
}
