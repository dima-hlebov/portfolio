import { Container } from "@/layouts";
import { InfoCard } from "@/components/cards";

import { EmailIcon, GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/icons";


export function Contacts() {
    return (
        <Container>
            <div className="py-40">
                <h2>Contacts</h2>
                <h3>Get in touch! 💬</h3>
                <div className="grid grid-rows-2 grid-cols-2 gap-5 justify-between mt-10">
                    <InfoCard Icon={EmailIcon} link="emailto:glebov.dymitriy@gmail.com" heading="Email" text="glebov.dymitriy@gmail.com" />
                    <InfoCard Icon={LinkedinIcon} link="www.linkedin.com/in/dmytro-hlebov" heading="Linkedin" text="Dmytro Hlebov" />
                    <InfoCard Icon={GithubIcon} link="https://github.com/dima-hlebov" heading="Gihub" text="@dima-hlebov" />
                    <InfoCard Icon={TelegramIcon} link="https://t.me/ldmytrol" heading="Telegram" text="@ldmytrol" />
                </div>
            </div>
        </Container>
    )
}
