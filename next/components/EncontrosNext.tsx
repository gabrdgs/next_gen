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
      "O encontro no BTG Pactual marca a abertura oficial do programa NEXT 2025. Será realizado das 18h às 20h, com painéis de apresentação e uma dinâmica de interação.",
    status: "Concluído",
  },
  {
    nome: "Milbank LLP",
    logo: milbank,
    data: " 9 de maio de 2025",
    descricao:
      "Encontro 1: Com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Durante o encontro no Milbank, teremos uma imersão em soft skills essenciais para lideranças jurídicas modernas, com dinâmicas práticas e interação com sócios do escritório.",
    status: "Em breve",
  },
  {
    nome: "KLA",
    logo: kla,
    data: "06 de junho de 2025",
    descricao:
      "Encontro com foco em competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Durante o encontro no KLA, teremos uma imersão em soft skills essenciais para lideranças jurídicas modernas, com dinâmicas práticas e interação com sócios do escritório.",
    status: "Confirmado",
  },
  {
    nome: "Milbank LLP",
    logo: milbank,
    data: " 13 de junho de 2025",
    descricao:
      "Encontro 2: Com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Durante o encontro no Milbank, teremos uma imersão em soft skills essenciais para lideranças jurídicas modernas, com dinâmicas práticas e interação com sócios do escritório.",
    status: "Confirmado"
  },
  {
    nome: "NETFLIX",
    logo: netflix,
    data: "08 de agosto de 2025",
    descricao:
      "Discussão sobre inovação, comunicação e protagonismo de carreira no Direito.",
    detalhes:
      "Apresentação das principais áreas: Serão três apresentações principais — Litigation, Public Policy e Música e Entretenimento — seguidas por sessões de speed dating, onde os Nexters poderão interagir com diversas áreas utilizando cartões com perguntas.Além disso, haverá um painel sobre trajetórias de carreira: Em resposta ao interesse dos Nexters em LL.M. e diferentes trajetórias profissionais.",
    status: "Confirmado"
  },
  {
    nome: "Milbank LLP",
    logo: milbank,
    data: " 15 de agosto de 2025",
    descricao:
      "Encontro 3: Com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Durante o encontro no Milbank, teremos uma imersão em soft skills essenciais para lideranças jurídicas modernas, com dinâmicas práticas e interação com sócios do escritório.",
    status: "Confirmado"
  },
  {
    nome: "Tozzini  Freire",
    logo: tozzini,
    data: "24 de outubro de 2025",
    descricao:
      "Encontro com foco em trajetórias, competências interpessoais e cases de liderança jurídica.",
    detalhes:
      "Durante o encontro no Tozzini  Freire, teremos uma imersão em soft skills essenciais para lideranças jurídicas modernas, com dinâmicas práticas e interação com sócios do escritório.",
    status: "Confirmado"
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
                <DialogTitle>{encontroSelecionado.nome}</DialogTitle>
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
