import { cn } from '@/helpers/utils';

export default function MainContainer({ classNames, background, children }) {
    const backgroundImage = background ?? '/img/background.jpg';
    return (
        <main
            className={cn(
                'bg-slate-200 dark:bg-slate-950 bg-cover bg-center flex flex-col min-h-screen',
                classNames?.background,
            )}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div
                className={cn(
                    'backdrop-blur-3xl bg-slate-200/60 dark:bg-slate-950/80 flex min-h-screen flex-col items-center',
                    classNames?.overlay,
                )}
            >
                <div
                    className={cn(
                        'w-full md:w-[44rem] px-2 py-6 md:px-6 flex flex-col gap-4',
                        classNames?.container,
                    )}
                >
                    {children}
                </div>
            </div>
        </main>
    );
}
