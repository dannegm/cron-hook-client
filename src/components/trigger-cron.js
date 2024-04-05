'use client';
import { useState } from 'react';
import { Button, Spinner } from '@radix-ui/themes';
import { PlayIcon } from '@radix-ui/react-icons';

import cronHookApi from '@/services/cronHookApi';

export default function TriggerCron({ id }) {
    const [loading, setLoading] = useState(false);

    const triggerCron = async () => {
        setLoading(true);
        await cronHookApi.get(`/crons/${id}/trigger`);
        setLoading(false);
        window.location.reload();
    };

    return (
        <Button disabled={loading} onClick={triggerCron}>
            <Spinner loading={loading}>
                <PlayIcon />
            </Spinner>
            Trigger
        </Button>
    );
}
