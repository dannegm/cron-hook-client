"use client";
import cronHookApi from "@/services/cronHookApi";
import { Switch, Spinner } from "@radix-ui/themes";
import { useState } from "react";

export default function ToggleCron({ id, active }) {
    const [checked, setChecked] = useState(active);
    const [loading, setLoading] = useState(false);

    const setActive = async (value) => {
        setLoading(true);
        const { data } = await cronHookApi.put(`/crons/${id}`, {
            active: value,
        });
        setChecked(data?.data.active || value);
        setLoading(false);
    };

    return (
        <div className="inline-flex flex-row gap-2 items-center">
            {loading && <Spinner />}
            <Switch
                className="cursor-pointer"
                color="green"
                checked={checked}
                onCheckedChange={setActive}
            />
        </div>
    );
}
