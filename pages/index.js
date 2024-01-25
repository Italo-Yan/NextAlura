import Link from "../src/components/Link";
import LinkEstilizado from "../src/components/LinkEstilizado";

export default function HomePage() {
    return (
        <div>
            <h1>Alura Cases - Home Page</h1>
            <Link href={"/faq"} passHref legacyBehavior> <LinkEstilizado></LinkEstilizado>
                Ir para o FAQ
            </Link>
        </div>
    )
}