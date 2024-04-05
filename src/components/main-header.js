import Link from "next/link";

import Logo from "./logo";

export default async function MainHeader() {
    return (
        <div className="flex flex-row gap-4 justify-center">
            <Link href="/">
                <Logo />
            </Link>
        </div>
    );
}
