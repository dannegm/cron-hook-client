'use client';
import { useState } from 'react';
import { Switch, Spinner } from '@radix-ui/themes';

import cronHookApi from '@/services/cronHookApi';

export default function ToggleCron({ id, active }) {
    const [checked, setChecked] = useState(active);
    const [loading, setLoading] = useState(false);

    const setActive = async value => {
        setLoading(true);
        const { data } = await cronHookApi.post(`/crons/${id}/active`, {
            active: value,
        });
        setChecked(data?.data.active || value);
        setLoading(false);
    };

    return (
        <div className='inline-flex flex-row gap-2 items-center'>
            {loading && <Spinner />}
            <Switch color='green' checked={checked} onCheckedChange={setActive} />
        </div>
    );
}
