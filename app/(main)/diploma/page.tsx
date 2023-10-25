import { Book } from "@/components/widgets";
import { Container } from "@/layouts";

export default function Diploma() {
    return (
        <Container>
            <div className="pt-20 text-center md:pt-32">
                <h2>Diploma</h2>
                <h3>Proof of study 🎓</h3>
            </div>
            <div className="py-10">
                <Book />
            </div>
        </Container>
    )
}
