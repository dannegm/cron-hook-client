import { Badge, Card, Code, Text, Em, Strong, Separator } from '@radix-ui/themes';
import { ClockIcon } from '@radix-ui/react-icons';

import { formatDate } from '@/helpers/dates';
import { getMethodColor } from '@/helpers/utils';

import RequestViewer from './request-viewer';
import ToggleCron from './toggle-cron';
import FlushCronLogs from './flush-cron-logs';
import DeleteCron from './delete-cron';
import TriggerCron from './trigger-cron';
import UrlItem from './url-item';

export default function CronDetails({ cron }) {
    return (
        <Card>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2 justify-between items-start md:items-center'>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-4 md:items-center'>
                        <Code
                            className='px-3 py-1 rounded-full text-lg'
                            color='indigo'
                            variant='outline'
                        >
                            {cron.pattern}
                        </Code>
                        <Text className='text-xl first-letter:capitalize'>
                            <Em>{cron.patternDescription}</Em>
                        </Text>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                        <ToggleCron id={cron.id} active={cron.active} />
                    </div>
                </div>

                <div className='flex flex-row gap-2 items-center'>
                    <Badge color={getMethodColor(cron.method)} size='2'>
                        {cron.method}
                    </Badge>
                    <UrlItem url={cron.hook} />
                </div>

                <div className='flex flex-col md:flex-row gap-2 md:gap-8 justify-start'>
                    <div className='flex flex-row md:flex-col gap-2 md:gap-0 justify-start text-sm'>
                        <Strong>Created At</Strong>
                        <Text color='gray' className='flex flex-row gap-1 items-center'>
                            <ClockIcon /> {formatDate(cron.createdAt)}
                        </Text>
                    </div>
                    <div className='flex flex-row md:flex-col gap-2 md:gap-0 justify-start text-sm'>
                        <Strong>Last Run</Strong>
                        <Text color='gray' className='flex flex-row gap-1 items-center'>
                            <ClockIcon /> {formatDate(cron.lastRun)}
                        </Text>
                    </div>
                    <div className='flex flex-row md:flex-col gap-2 md:gap-0 justify-start text-sm'>
                        <Strong>Next Run</Strong>
                        <Text color='gray' className='flex flex-row gap-1 items-center'>
                            <ClockIcon /> {formatDate(cron.nextRun)}
                        </Text>
                    </div>
                </div>

                <Separator orientation='horizontal' size='4' />

                <RequestViewer params={cron.params} headers={cron.headers} body={cron.body} />

                <Separator orientation='horizontal' size='4' />

                <div className='flex flex-row gap-4'>
                    <DeleteCron id={cron.id} />
                    <FlushCronLogs id={cron.id} />

                    <div className='flex-1' />
                    <TriggerCron id={cron.id} />
                </div>
            </div>
        </Card>
    );
}
