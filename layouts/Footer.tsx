import { Container } from "./Container";

export function Footer() {
    return (
        <footer className="flex py-10 bg-gradient-to-t from-white from-70% ">
            <Container>
                <div className="flex gap-5">
                    Copyright © 2023. All rights are reserved.
                </div>
            </Container>
        </footer>
    )
}
