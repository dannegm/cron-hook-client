/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Tabs, Box } from '@radix-ui/themes';

import ParamsViewer from './params-viewer';
import CodeViewer from './code-viewer';

export default function RequestViewer({ params, headers, body }) {
    return (
        <Tabs.Root defaultValue='params'>
            <Tabs.List>
                <Tabs.Trigger value='params'>Params</Tabs.Trigger>
                <Tabs.Trigger value='headers'>Headers</Tabs.Trigger>
                <Tabs.Trigger value='body'>Body</Tabs.Trigger>
            </Tabs.List>

            <Box pt='3'>
                <Tabs.Content value='params'>
                    <ParamsViewer params={params} />
                </Tabs.Content>

                <Tabs.Content value='headers'>
                    <ParamsViewer params={headers} />
                </Tabs.Content>

                <Tabs.Content value='body'>
                    <CodeViewer code={body} />
                </Tabs.Content>
            </Box>
        </Tabs.Root>
    );
}
