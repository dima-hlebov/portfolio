import { Container } from "@/layouts";
import { InfoCard } from "@/components/cards";

import { EmailIcon, GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/icons";


export function Contacts() {
    return (
        <Container>
            <div className="py-28 sm:py-60">
                <h2>Contacts</h2>
                <h3>Get in touch! 💬</h3>
                <div className="grid gap-5 mt-10 sm:grid-cols-2 sm:grid-rows-2">
                    <InfoCard Icon={EmailIcon} link="mailto:dmytro.hlebov@gmail.com" heading="Email" text="dmytro.hlebov@gmail.com" />
                    <InfoCard Icon={LinkedinIcon} link="https://www.linkedin.com/in/dmytro-hlebov" heading="Linkedin" text="Dmytro Hlebov" />
                    <InfoCard Icon={GithubIcon} link="https://github.com/dima-hlebov" heading="Gihub" text="@dima-hlebov" />
                    <InfoCard Icon={TelegramIcon} link="https://t.me/ldmytrol" heading="Telegram" text="@ldmytrol" />
                </div>
            </div>
        </Container>
    )
}
