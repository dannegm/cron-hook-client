import cronHookApi from "@/services/cronHookApi";

import MainContainer from "@/components/main-container";
import MainHeader from "@/components/main-header";
import CronDetails from "@/components/cron-details";
import LogItem from "@/components/log-item";

export const dynamic = "force-dynamic";

export default async function Cron({ params: { id }, searchParams }) {
    const debug = searchParams?.debug !== undefined;

    const { data: cronsData } = await cronHookApi.get(`/crons/${id}`);
    const { data: logsData } = await cronHookApi.get(`/crons/${id}/logs`);

    const logsList = logsData?.data || [];

    return (
        <MainContainer>
            <MainHeader />
            <CronDetails cron={cronsData.data} />

            {logsList.map(log => (
                <LogItem key={log.id} log={log} />
            ))}
        </MainContainer>
    );
}
