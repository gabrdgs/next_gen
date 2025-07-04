"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import kla from "@/public/logos/kla.png";
import netflix from "@/public/logos/netflix.png";
import next from "@/public/logos/next.png";
import tozzini from "@/public/logos/tozzini.png";
import milbank from "@/public/logos/milbank.png";
import mf from "@/public/logos/mf.png";
import bzcp from "@/public/logos/bzcp.png";
import google from "@/public/logos/google.png";
import demarest from "@/public/logos/demarest.png"
import galdino from "@/public/logos/galdino.png"
import lefosse from "@/public/logos/lefosse.png"
import machadoMeyer from "@/public/logos/machadoMeyer.png"
import pinheiroNeto from "@/public/logos/pinheiroNeto.png"
import pravaler from "@/public/logos/pravaler.png"

interface Encontro {
  nome: string;
  logo: StaticImageData;
  data: string;
  descricao: string;
  detalhes: string;
  status: "Concluído" | "Em breve" | "Confirmado";
}

const encontros: Encontro[] = [
  {
    nome: "Abertura - NEXT 2025 🚀🧡",
    logo: next,
    data: "09 de abril de 2025",
    descricao:
      "Evento de abertura do NEXT com foco em conhecer a nova turma de bolsistas e conectar jovens e mentores",
    detalhes:
      "O encontro no BTG Pactual marcou a abertura oficial do programa NEXT 2025, com painéis de apresentação e dinâmica de interação.",
    status: "Concluído",
  },
  {
    nome: "Milbank LLP",
    logo: milbank,
    data: "09 de maio de 2025",
    descricao:
      "Encontro 1: Com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Imersão em soft skills essenciais para lideranças jurídicas modernas, com dinâmicas práticas e interação com sócios do escritório.",
    status: "Concluído",
  },
  {
    nome: "KLA",
    logo: kla,
    data: "06 de junho de 2025",
    descricao:
      "Encontro com foco em competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Imersão em soft skills essenciais para lideranças jurídicas modernas, com dinâmicas práticas e interação com sócios do escritório.",
    status: "Concluído",
  },
    {
    nome: "Milbank LLP",
    logo: milbank,
    data: "13 de junho de 2025",
    descricao:
      "Encontro 2: Com foco em competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Imersão em soft skills essenciais para lideranças jurídicas modernas, com dinâmicas práticas e interação com sócios do escritório.",
    status: "Concluído",
  },
  {
    nome: "Mattos Filho",
    logo: mf,
    data: "27 de junho de 2025",
    descricao:
      "Encontro com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Encontro com foco em trajetórias, competências interpessoais e cases de liderança jurídica. Tema do encontro: a definir.",
    status: "Concluído",
  },
  {
    nome: "Demarest",
    logo: demarest,
    data: "30 de junho de 2025",
    descricao:
      "Apresentação da área de Life Science.",
    detalhes:
      "Encontro com foco em trajetórias, competências interpessoais e cases de liderança jurídica. Tema do encontro: a definir.",
    status: "Concluído",
  },
  {
    nome: "Pinheiro Neto",
    logo: pinheiroNeto,
    data: "07 de julho de 2025",
    descricao:
      "Encontro com foco em práticas jurídicas e experiências no escritório.",
    detalhes:
      "Encontro para conhecer mais sobre a cultura e práticas do escritório, além de troca com sócios e equipe.",
    status: "Concluído",
  },
  {
    nome: "Machado Meyer",
    logo: machadoMeyer,
    data: "03 de julho de 2025",
    descricao:
      "Tema do encontro: a definir.",
    detalhes:
      "Encontro para conhecer o escritório, cultura e oportunidades para jovens talentos.",
    status: "Concluído",
  },
  {
    nome: "Bronstein",
    logo: bzcp,
    data: "12 de julho de 2025",
    descricao:
      "Encontro com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Imersão em soft skills essenciais para lideranças jurídicas modernas, dinâmicas e bate-papo com sócios do escritório.",
    status: "Confirmado",
  },
  {
    nome: "Galdino",
    logo: galdino,
    data: "14 de julho de 2025",
    descricao:
      "Encontro para conhecer práticas e cases do escritório.",
    detalhes:
      "Palestras, atividades e bate-papo com advogados do escritório. Importante: levar documento de identificação.",
    status: "Confirmado",
  },
  {
    nome: "Lefosse",
    logo: lefosse,
    data: "18 de julho de 2025",
    descricao:
      "Encontro para conhecer práticas e cultura do escritório.",
    detalhes:
      "Troca sobre temas atuais do direito e dinâmicas com o time Lefosse.",
    status: "Confirmado",
  },
  {
    nome: "Pravaler",
    logo: pravaler,
    data: "28 de julho de 2025",
    descricao:
      "Encontro com o Pravaler para conhecer práticas de inovação em serviços financeiros.",
    detalhes:
      "Palestra e dinâmica sobre o mercado financeiro, inovação e oportunidades para jovens profissionais.",
    status: "Confirmado",
  },
  {
    nome: "Google",
    logo: google,
    data: "01 de agosto de 2025",
    descricao:
      "Workshop e troca sobre o setor jurídico e inovação no Google.",
    detalhes:
      "Apresentação do time jurídico e interação com Nexters sobre desafios e oportunidades da área.",
    status: "Confirmado",
  },
  {
    nome: "NETFLIX",
    logo: netflix,
    data: "08 de agosto de 2025",
    descricao:
      "Discussão sobre inovação, comunicação e protagonismo de carreira no Direito.",
    detalhes:
      "Três apresentações principais — Litigation, Public Policy e Música e Entretenimento — seguidas por speed dating. Painel sobre trajetórias de carreira e LL.M.",
    status: "Confirmado",
  },
  {
    nome: "Milbank LLP",
    logo: milbank,
    data: "15 de agosto de 2025",
    descricao:
      "Encontro 3: Com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Imersão em soft skills essenciais para lideranças jurídicas modernas, dinâmicas práticas e interação com sócios do escritório.",
    status: "Confirmado",
  },
  {
    nome: "Tozzini Freire",
    logo: tozzini,
    data: "24 de outubro de 2025",
    descricao:
      "Encontro com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Imersão em soft skills essenciais para lideranças jurídicas modernas, dinâmicas práticas e interação com sócios do escritório.",
    status: "Confirmado",
  }
];



export default function EncontrosNext() {
  const [modalAberto, setModalAberto] = useState(false);
  const [encontroSelecionado, setEncontroSelecionado] = useState<Encontro | null>(null);

  const abrirModal = (encontro: Encontro) => {
    setEncontroSelecionado(encontro);
    setModalAberto(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 px-6 py-10 font-sans">
      <div className="w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={next} alt="Logo NEXT" width={220} height={80} />
        </div>

        {/* Título e descrição */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Encontros NEXT 2025</h1>
          <p className="text-neutral-700 text-lg">
            Ao longo de 2025, o NEXT promove encontros exclusivos com empresas e
            escritórios parceiros, com foco no desenvolvimento de{" "}
            <strong>soft skills</strong>,{" "}
            <strong>conectando com escritórios/empresas</strong>,{" "}
            <strong>capacitações práticas</strong> e{" "}
            <strong>cursos executivos</strong>. Uma jornada para fortalecer
            conexões e preparar os talentos do amanhã.
          </p>
        </div>

        {/* Lista de encontros */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {encontros.map((encontro, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={encontro.logo}
                      alt={encontro.nome}
                      layout="fill"
                      objectFit="contain"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold leading-tight">
                      {encontro.nome}
                    </h2>
                    <div className="flex items-center text-sm text-neutral-600">
                      <CalendarIcon className="w-4 h-4 mr-1" /> {encontro.data}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-700">{encontro.descricao}</p>
                <span
                  className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full
    ${encontro.status === "Concluído"
                      ? "bg-green-100 text-green-800"
                      : encontro.status === "Confirmado"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }
  `}
                >
                  {encontro.status === "Concluído"
                    ? "Concluído"
                    : encontro.status === "Confirmado"
                      ? "Confirmado"
                      : "Em breve"}
                </span>
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => abrirModal(encontro)}
                >
                  Saiba mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={modalAberto} onOpenChange={setModalAberto}>
        <DialogContent className="max-w-md">
          {encontroSelecionado && (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">
                  Encontro:
                </DialogTitle>
                <div className="flex justify-center mb-2">
                  <Image
                    src={encontroSelecionado.logo}
                    alt={encontroSelecionado.nome}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <DialogDescription className="text-sm text-neutral-600 mb-2">
                  {encontroSelecionado.data}
                </DialogDescription>
              </DialogHeader>
              <p className="text-neutral-700 text-sm">
                {encontroSelecionado.detalhes}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
