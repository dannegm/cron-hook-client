import cronHookApi from '@/services/cronHookApi';

import MainContainer from '@/components/main-container';
import MainHeader from '@/components/main-header';
import CronEditor from '@/components/cron-editor';
import CronItem from '@/components/cron-item';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

async function CronList() {
    const { data: cronsData } = await cronHookApi.get('/crons');
    const cronsList = cronsData?.data || [];
    return cronsList.map(cron => <CronItem key={cron.id} cron={cron} />);
}

export default async function Creator() {
    return (
        <MainContainer classNames={{ container: 'pb-16' }}>
            <MainHeader />

            <CronEditor />

            <Suspense>
                <CronList />
            </Suspense>
        </MainContainer>
    );
}
