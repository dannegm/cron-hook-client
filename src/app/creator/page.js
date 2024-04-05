import cronHookApi from "@/services/cronHookApi";

import MainContainer from "@/components/main-container";
import MainHeader from "@/components/main-header";
import CronEditor from "@/components/cron-editor";
import CronItem from "@/components/cron-item";

export const dynamic = "force-dynamic";


export default async function Creator() {
    const { data: cronsData } = await cronHookApi.get("/crons");
    const cronsList = cronsData?.data || [];

    return (
        <MainContainer>
            <MainHeader />

            <CronEditor />

            {cronsList.map((cron) => (
                <CronItem key={cron.id} cron={cron} />
            ))}
        </MainContainer>
    );
}
