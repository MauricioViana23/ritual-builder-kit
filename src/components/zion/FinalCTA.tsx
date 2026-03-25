import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="bg-plum px-6 py-28">
    <div className="fade-up mx-auto max-w-3xl text-center">
      <h2 className="font-display text-4xl font-bold text-warm-white md:text-[56px] md:leading-[1.1]">
        Começa aqui.
        <br />
        <span className="text-pink-lt">Todo dia.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-md text-warm-white/70">
        Antes do café. Antes do celular. Antes de tudo.
        30 segundos que mudam o que vem depois.
      </p>
      <Button variant="heroDark" size="xl" className="mt-10" asChild>
        <a href="#offer">Quero meu Zion Shot →</a>
      </Button>
    </div>
  </section>
);

export default FinalCTA;
