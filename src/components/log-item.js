import { Badge, Card, Code } from '@radix-ui/themes';
import { ClockIcon } from '@radix-ui/react-icons';

import { formatTimestamp } from '@/helpers/dates';
import { getStatusColor, cn } from '@/helpers/utils';

import Collapsable from './collapsable';
import DefaultViewer from './default-viewer';
import JsonViewer from './json-viewer';
import HtmlViewer from './html-viewer';

const ContentTypes = {
    'application/json': ({ content }) => <JsonViewer data={JSON.parse(content)} expanded />,
    'text/html': ({ content }) => <HtmlViewer content={content} />,
};

const RenderContent = ({ type, content }) => {
    const [contentType] = type.split(';');
    const Component = ContentTypes[contentType] || DefaultViewer;
    return <Component content={content} />;
};

export default function LogItem({ log }) {
    return (
        <Card
            className={cn('bg-slate-900/30', {
                'bg-green-900/30': log.status >= 200,
                'bg-blue-900/30': log.status >= 300,
                'bg-red-900/30': log.status >= 400,
            })}
        >
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div className='flex flex-col md:flex-row gap-2 items-start md:items-center'>
                        <Badge size='2' color={getStatusColor(log.status)}>
                            {log.status}
                        </Badge>
                        <Code color='orange'>{log.id}</Code>
                    </div>

                    <div>
                        <Code color='plum'>
                            <ClockIcon className='inline-block mr-2 -mt-1' />
                            {formatTimestamp(log.executedAt)}
                        </Code>
                    </div>
                </div>

                <Collapsable title='Body' expanded>
                    <RenderContent type={log.contentType} content={log.response} />
                </Collapsable>

                <Collapsable title='Headers'>
                    <JsonViewer data={log.headers} expanded />
                </Collapsable>
            </div>
        </Card>
    );
}
