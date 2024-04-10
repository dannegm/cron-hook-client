import { Badge, Card, Code, Text, Em, Strong, Button, Link } from '@radix-ui/themes';
import { ClockIcon, EyeOpenIcon } from '@radix-ui/react-icons';

import { formatDate } from '@/helpers/dates';
import { getMethodColor } from '@/helpers/utils';

import ToggleCron from './toggle-cron';
import UrlItem from './url-item';

export default function CronItem({ cron }) {
    return (
        <Card>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2 justify-between items-center'>
                    <div className='flex flex-row gap-2 items-center'>
                        <Code className='px-3 py-1 rounded-full' color='indigo' variant='outline'>
                            {cron.pattern}
                        </Code>
                        <Text>
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

                    <div className='flex-1' />

                    <div className='flex flex-col md:self-end'>
                        <Link href={`/cron/${cron.id}`} className='w-full'>
                            <Button variant='soft' className='w-full' radius='full'>
                                <EyeOpenIcon />
                                Watch Logs
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
}
