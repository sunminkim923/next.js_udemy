import { useRouter } from "next/router";

export default function PortfolioIdPage() {
    const router = useRouter();

    console.log(router.pathname);

    return (
        <div>
            <h1>Portfolio Id Page</h1>
        </div>
    );
}
