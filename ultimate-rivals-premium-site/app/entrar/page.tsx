"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, Lock, Eye, EyeOff, Shield, Users } from "lucide-react";

export default function EntrarPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-ur-black text-ur-white min-h-dvh flex flex-col">
      {/* TOP BRAND BAR */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent" />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex items-center justify-center pt-24 pb-16 px-4 relative">




        <div className="relative w-full max-w-5xl">
          {/* HERO HEADLINE */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Acesso</span>
            </div>
            <h1 className="font-display font-black uppercase leading-none">
              <span className="block text-[clamp(1.5rem,4vw,3rem)] text-ur-sand">BEM-VINDO</span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-gold-gradient">DE VOLTA</span>
            </h1>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* LEFT: LOGIN FORM */}
            <div className="bg-card-gold rounded-sm p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent" />
              <h2 className="font-display font-black text-2xl uppercase text-ur-white mb-2">Entrar na sua conta</h2>
              <p className="text-ur-muted text-sm font-body mb-8">Acesse seu perfil, histórico e próximos jogos.</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-xs font-display font-semibold uppercase tracking-wider text-ur-sand mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ur-muted pointer-events-none" />
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="seu@email.com"
                      className="w-full bg-ur-graphite-2 border border-white/10 rounded-sm px-4 py-3 pl-10 text-ur-white text-sm font-body placeholder:text-ur-muted focus:outline-none focus:border-ur-gold/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-display font-semibold uppercase tracking-wider text-ur-sand mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ur-muted pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      className="w-full bg-ur-graphite-2 border border-white/10 rounded-sm px-4 py-3 pl-10 pr-12 text-ur-white text-sm font-body placeholder:text-ur-muted focus:outline-none focus:border-ur-gold/50 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ur-muted hover:text-ur-sand transition-colors"
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* Forgot password */}
                <div className="flex justify-end">
                  <a href="#" className="text-xs text-ur-muted hover:text-ur-gold font-body transition-colors">
                    Esqueceu a senha?
                  </a>
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full justify-center text-sm py-3.5">
                  Entrar
                  <ArrowRight size={15} />
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-ur-muted text-xs font-body">ou</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              <p className="text-center text-ur-muted text-xs font-body">
                Ainda não tem conta?{" "}
                <Link href="/cadastro" className="text-ur-gold hover:text-ur-gold-light transition-colors font-semibold">
                  Criar conta
                </Link>
              </p>
            </div>

            {/* RIGHT: NEW PLAYER CTA */}
            <div className="flex flex-col gap-6">
              {/* New player card */}
              <div className="bg-card rounded-sm p-8 relative hover:shadow-card-hover transition-all group">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent group-hover:via-ur-gold/40 transition-all" />
                <div className="w-12 h-12 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-ur-gold/20 transition-all">
                  <Users size={22} className="text-ur-gold" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-3">
                  Novo no Ultimate Rivals?
                </h3>
                <p className="text-ur-sand text-sm font-body leading-relaxed mb-6">
                  Crie sua conta, escolha sua modalidade e seu polo, e entre para o ecossistema competitivo de esportes de praia mais estruturado de Minas Gerais.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Cadastro gratuito",
                    "3 polos: BH, Betim e Contagem",
                    "Histórico e ranking pessoal",
                    "Individual, Dupla ou Quarteto",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-body text-ur-sand">
                      <div className="w-1 h-1 rounded-full bg-ur-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/cadastro" className="btn-primary w-full justify-center">
                  Criar conta
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Trust signal */}
              <div className="bg-ur-graphite-2 rounded-sm p-6 border border-white/5 relative">
                <div className="flex items-start gap-3">
                  <Shield size={18} className="text-ur-gold mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-ur-white mb-1">Seus dados protegidos</h4>
                    <p className="text-ur-muted text-xs font-body leading-relaxed">
                      Suas informações são usadas exclusivamente para a gestão da sua participação no UR. Nunca compartilhamos dados com terceiros sem consentimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER TAGLINE */}
      <div className="pb-8 text-center">
        <p className="text-ur-muted text-xs font-display uppercase tracking-widest">
          Ultimate Rivals · Temporada 1 · BH · Betim · Contagem
        </p>
      </div>
    </div>
  );
}
