import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Zap, Shield, Smartphone, Globe, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { UnicornBackground } from "@/components/unicorn-background";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Background for Unicorn Studio */}
      <UnicornBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              min<span className="text-muted-foreground">links</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Características</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Precios</Link>
            <Link href="https://docs.minlinks.com" className="hover:text-foreground transition-colors">Docs</Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium">Entrar</Button>
            <Button className="text-sm font-medium rounded-full px-6">Empezar ahora</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end p-8 md:p-24 lg:p-32 overflow-hidden">
        <div className="max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Badge variant="outline" className="px-4 py-1 border-primary/20 bg-primary/5 text-ring">
            V 1.0 — Ya disponible
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-balance animate-title">
            Un solo enlace.<br />
            Sin ruido.<br />
            Sin sobreprecio.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mt-12">
            <div className="relative flex-1 group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-mono">minlinks.com/u/</span>
              <Input

                className="pl-[160px] h-12 bg-background/50 border-white/10 rounded-full focus:ring-primary/20 lowercase font-mono"
              />
            </div>
            <Button size="lg" className="h-12 px-8 rounded-full font-bold group cursor-pointer">
              Reclamar mi link
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4 group">
              <div className="p-3 bg-primary/5 rounded-2xl w-fit border border-primary/10 group-hover:bg-primary/10 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Links ilimitados*</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organiza tu presencia digital sin límites. Todo lo que necesitas en un solo lugar.
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="p-3 bg-primary/5 rounded-2xl w-fit border border-primary/10 group-hover:bg-primary/10 transition-colors">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">URLs cortas y estéticas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enlaces limpios y memorables que elevan tu marca personal.
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="p-3 bg-primary/5 rounded-2xl w-fit border border-primary/10 group-hover:bg-primary/10 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Personalizable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Adapta el diseño a tu identidad visual de forma sencilla y rápida.
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="p-3 bg-primary/5 rounded-2xl w-fit border border-primary/10 group-hover:bg-primary/10 transition-colors">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Mobile first</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimizado para que tus seguidores tengan la mejor experiencia en móviles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight italic">Conecta ya con tus seguidores</h2>
            <p className="text-muted-foreground text-lg">Directo al grano. Sin costes ocultos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Free Plan */}
            <Card className="bg-zinc-950/50 border-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <CardDescription>Para empezar a ordenar tu mundo.</CardDescription>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black">$0</span>
                  <span className="text-muted-foreground">/siempre</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Separator className="bg-white/5" />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500" />
                    5 enlaces en total
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500" />
                    3 URLs acortadas personalizadas
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500" />
                    Personalización básica
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500" />
                    Página pública minlinks.com/u/@user
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-xl hover:bg-white/5 transition-colors cursor-pointer">Empezar gratis</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="relative bg-zinc-900 border-primary/20 shadow-2xl shadow-primary/5 scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground font-bold px-4 py-1">RECOMENDADO</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                <CardDescription className="text-zinc-400">Todo el poder para creadores serios.</CardDescription>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black">$5</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Separator className="bg-white/10" />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    Links ilimitados
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    URLs acortadas ilimitadas
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    Personalización completa (estilos, fuentes)
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    Analíticas avanzadas
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold">
                    <Check className="w-4 h-4 text-primary" />
                    Sin marca de agua de minlinks
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-xl py-6 font-bold text-lg transition-transform hover:scale-[1.02] cursor-pointer">
                  Convertirme en Pro
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold tracking-tighter italic">minlinks.</h2>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto">
            Creado para simplificar la vida de los que crean. Menos configuración, más conexión.
          </p>
          <div className="flex justify-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Twitter</Link>
            <Link href="#" className="hover:text-foreground">Instagram</Link>
            <Link href="#" className="hover:text-foreground">Términos</Link>
          </div>
          <div className="pt-8 text-[10px] uppercase tracking-widest text-zinc-600">
            &copy; 2026 MINLINKS SAAS. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>
      </footer>
    </div>
  );
}
