// Arquivo: src/app/api/contato/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, mensagem } = body;

    // --- A LÓGICA DO BACKEND ACONTECE AQUI ---
    console.log("--- NOVA MENSAGEM DO FORMULÁRIO ---");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);
    console.log("------------------------------------");
    // No futuro, aqui você colocaria o código para enviar um email de verdade.

    return NextResponse.json({ message: "Mensagem recebida com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao processar a mensagem:", error);
    return NextResponse.json({ message: "Erro ao enviar a mensagem." }, { status: 500 });
  }
}