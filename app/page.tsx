"use client";

import { useMemo, useState } from "react";

const PHONE = "50687969295";

const servicios = [
  {
    title: "Restauración completa",
    price: "Desde ₡20.000",
    text: "Eliminamos opacidad, amarillamiento, rayones y desgaste acumulado para recuperar claridad, brillo y presencia.",
    detail: "Ideal para faros opacos o muy castigados",
  },
  {
    title: "Tratamiento cerámico",
    price: "Desde ₡15.000",
    text: "Sellado profesional con protección UV contra sol, lluvia, polvo y contaminación diaria.",
    detail: "Protección premium hasta por 12 meses",
  },
  {
    title: "Mantenimiento anual",
    price: "Desde ₡10.000",
    text: "Renovamos la capa protectora para conservar el acabado transparente y extender la vida útil del tratamiento.",
    detail: "Recomendado para mantener el resultado",
  },
];

const beneficios = [
  ["Mayor seguridad", "Mejor visibilidad durante noche, lluvia o neblina."],
  ["Más iluminación", "Recupera alcance y potencia visual de las luces."],
  ["Ahorro inteligente", "Evita reemplazos costosos cuando el faro puede restaurarse."],
  ["Mejor apariencia", "El vehículo luce más limpio, moderno y cuidado."],
  ["Protección UV", "Ayuda a retrasar el amarillamiento y el desgaste diario."],
  ["Más valor", "Un frente cuidado mejora la primera impresión del vehículo."],
];

const proceso = [
  ["01", "Diagnóstico", "Revisamos el estado del faro y definimos el nivel de restauración necesario."],
  ["02", "Preparación", "Protegemos el área de trabajo y tratamos la superficie de forma controlada."],
  ["03", "Pulido profesional", "Recuperamos transparencia y brillo con un acabado uniforme."],
  ["04", "Sellado UV", "Aplicamos protección cerámica para extender la durabilidad del resultado."],
];

const testimonios = [
  {
    name: "Cliente en Alajuela",
    text: "El cambio fue inmediato. Los faros quedaron claros y el carro se ve mucho más cuidado.",
  },
  {
    name: "Cliente en Heredia",
    text: "Muy buen acabado y atención rápida. La visibilidad de noche mejoró bastante.",
  },
  {
    name: "Cliente en San José",
    text: "Pensaba cambiar los faros, pero con la restauración quedaron como nuevos.",
  },
];

const zonas = ["Alajuela", "San José", "Heredia"];
const galeria = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg", "/g5.jpg", "/g6.jpg"];
const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

export default function Home() {
  const [servicio, setServicio] = useState("Restauración completa");
  const [estado, setEstado] = useState("Opacos");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [slider, setSlider] = useState(50);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const enviar = () => {
    const text = [
      "Hola FaroFix",
      "",
      "QUIERO AGENDAR:",
      `Servicio: ${servicio}`,
      `Estado: ${estado}`,
      `Fecha: ${fecha || "Por definir"}`,
      `Mensaje: ${mensaje || "Sin mensaje adicional"}`,
      "",
      "Ubicación: Alajuela",
    ].join("\n");

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#070707] pb-20 text-white selection:bg-lime-300 selection:text-black md:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
            <img
              src="/logo.png"
              alt="FaroFix restauración profesional de faros"
              className="h-12 w-12 rounded-full border border-white/15 bg-black object-cover shadow-xl"
            />
            <div className="leading-tight">
              <p className="text-sm font-black tracking-[0.28em] text-white">FAROFIX</p>
              <p className="text-xs text-zinc-400">Alajuela · San José · Heredia</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#proceso" className="hover:text-white">Proceso</a>
            <a href="#resultados" className="hover:text-white">Resultados</a>
            <a href="#zona" className="hover:text-white">Zona</a>
            <a href="#agendar" className="rounded-full bg-lime-300 px-5 py-2 font-bold text-black hover:bg-white">
              Agendar
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-screen items-end overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:pb-20">
        <div className="absolute inset-0">
          <img src="/despues1.jpg" alt="" className="h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(190,255,60,0.18),transparent_32%),linear-gradient(90deg,#070707_0%,rgba(7,7,7,0.86)_40%,rgba(7,7,7,0.42)_100%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-sm font-semibold text-lime-200">
              Restauración de faros en Alajuela, San José y Heredia
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
              Faros claros. Manejo seguro.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Restauración profesional de faros opacos, amarillentos o rayados con pulido técnico,
              protección UV, tratamiento cerámico y atención en Alajuela, San José y Heredia.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 text-sm font-bold text-zinc-200">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Resultados visibles el mismo día</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Protección UV incluida</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Atención con cita previa</span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#agendar"
                className="inline-flex items-center justify-center rounded-full bg-lime-300 px-8 py-4 text-base font-black text-black shadow-[0_20px_60px_rgba(190,255,60,0.22)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#resultados"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white hover:text-black"
              >
                Ver resultados
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-[2rem] border border-white/10 bg-black/35 p-3 backdrop-blur-xl">
            {[
              ["12 meses", "protección"],
              ["3 zonas", "cobertura"],
              ["UV", "sellado"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/[0.07] p-4 text-center">
                <p className="text-2xl font-black text-lime-200">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="border-y border-white/10 bg-[#101010] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-300">Servicios</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Pulido y restauración de faros con acabado profesional</h2>
            </div>
            <p className="max-w-xl leading-7 text-zinc-400">
              Cada servicio está pensado para recuperar visibilidad, proteger el material y mejorar la apariencia del frente del vehículo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {servicios.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-black p-7 transition hover:-translate-y-1 hover:border-lime-300/40">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-bold text-lime-300">{item.detail}</p>
                  <p className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-black text-black">{item.price}</p>
                </div>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-zinc-500">Los precios pueden variar según el estado del faro y el vehículo.</p>
        </div>
      </section>

      <section id="proceso" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-300">Proceso</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Un trabajo claro de inicio a fin</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              Hacemos cada etapa con orden para lograr un resultado limpio, duradero y visualmente consistente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {proceso.map(([step, title, text]) => (
              <article key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-4xl font-black text-lime-300">{step}</p>
                <h3 className="mt-8 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black sm:text-5xl">Por qué restaurar tus faros</h2>
          <p className="mx-auto mt-5 max-w-3xl text-center leading-8 text-zinc-400">
            Un faro claro no solo se ve mejor: también mejora la conducción nocturna, ayuda a cuidar tu inversión y evita gastos innecesarios.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-black p-6">
                <div className="mb-5 h-1.5 w-12 rounded-full bg-lime-300" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="bg-white px-4 py-20 text-black sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-zinc-500">Antes y después</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">La diferencia se nota al instante</h2>
            </div>
            <a href="#agendar" className="inline-flex rounded-full bg-black px-6 py-3 font-bold text-white hover:bg-lime-300 hover:text-black">
              Quiero este resultado
            </a>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-2xl">
              <img src="/despues1.jpg" alt="Faro restaurado" className="absolute inset-0 h-full w-full object-cover" />
              <img
                src="/antes1.jpg"
                alt="Faro antes de restaurar"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ clipPath: `polygon(0 0, ${slider}% 0, ${slider}% 100%, 0 100%)` }}
              />
              <div className="absolute inset-y-0 w-1 bg-lime-300 shadow-[0_0_20px_rgba(190,255,60,0.8)]" style={{ left: `${slider}%` }} />
              <div className="absolute left-4 top-4 rounded-full bg-black/80 px-4 py-2 text-sm font-black text-white">Antes</div>
              <div className="absolute right-4 top-4 rounded-full bg-lime-300 px-4 py-2 text-sm font-black text-black">Después</div>
              <input
                aria-label="Comparar antes y después"
                type="range"
                min="0"
                max="100"
                value={slider}
                onChange={(e) => setSlider(Number(e.target.value))}
                className="absolute inset-x-6 bottom-6 accent-lime-300"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-zinc-500">Comparador interactivo</p>
              <h3 className="mt-3 text-3xl font-black">Desliza para ver el cambio real</h3>
              <p className="mt-5 leading-8 text-zinc-600">
                La restauración elimina la capa deteriorada, recupera transparencia y deja el faro protegido con sellado UV para que el acabado dure más tiempo.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-zinc-100 p-5">
                  <p className="text-2xl font-black">+ claridad</p>
                  <p className="mt-2 text-sm text-zinc-600">Mejor alcance visual al conducir.</p>
                </div>
                <div className="rounded-2xl bg-zinc-100 p-5">
                  <p className="text-2xl font-black">+ presencia</p>
                  <p className="mt-2 text-sm text-zinc-600">El frente del carro se ve renovado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-300">Clientes</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Confianza que se ve en la calle</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonios.map((item) => (
              <article key={item.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <p className="text-3xl font-black text-lime-300">“</p>
                <p className="mt-2 leading-8 text-zinc-300">{item.text}</p>
                <p className="mt-6 font-black text-white">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black sm:text-5xl">Resultados en video</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {videos.map((video, index) => (
              <video key={video} controls preload="metadata" className="aspect-[9/16] w-full rounded-3xl border border-white/10 bg-zinc-900 object-cover shadow-2xl">
                <source src={video} />
                Video de resultado {index + 1}
              </video>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black sm:text-5xl">Galería de trabajos</h2>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {galeria.map((img, index) => (
              <img
                key={img}
                src={img}
                alt={`Trabajo de restauración de faros FaroFix ${index + 1}`}
                className="aspect-square w-full rounded-2xl object-cover transition hover:scale-[1.02]"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="zona" className="border-y border-white/10 bg-[#101010] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-black p-7 sm:p-9">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-300">Zona de atención</p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Atendemos en Alajuela, San José y Heredia
              </h2>
              <p className="mt-5 leading-8 text-zinc-400">
                Coordinamos cada cita por WhatsApp para confirmar disponibilidad, ubicación y el estado de los faros antes del servicio.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {zonas.map((zona) => (
                <div key={zona} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-lg font-black text-white">{zona}</p>
                  <p className="mt-1 text-sm text-zinc-400">Atención con cita previa</p>
                </div>
              ))}
            </div>

            <a
              href="#agendar"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-2xl bg-lime-300 px-6 font-black text-black transition hover:-translate-y-0.5 hover:bg-white"
            >
              Consultar disponibilidad
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
            <iframe
              title="Mapa de zona de atención FaroFix en Alajuela, San José y Heredia"
              src="https://www.google.com/maps?q=Alajuela%2C%20San%20Jose%2C%20Heredia%2C%20Costa%20Rica&output=embed"
              className="h-[28rem] w-full border-0 grayscale invert-[0.92] contrast-125 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="agendar" className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between rounded-[1.5rem] bg-lime-300 p-8 text-black">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em]">Agenda directa</p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">Cotiza y reserva por WhatsApp</h2>
              <p className="mt-5 leading-7 text-black/70">
                Completa los detalles y te abrimos una conversación con el mensaje listo para confirmar disponibilidad.
              </p>
            </div>
            <p className="mt-10 text-sm font-bold text-black/60">Atención en Alajuela, San José y Heredia.</p>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Servicio
              <select value={servicio} className="h-14 w-full rounded-2xl border border-white/10 bg-black px-4 text-white outline-none focus:border-lime-300" onChange={(e) => setServicio(e.target.value)}>
                <option>Restauración completa</option>
                <option>Tratamiento cerámico</option>
                <option>Mantenimiento anual</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Estado del faro
              <select value={estado} className="h-14 w-full rounded-2xl border border-white/10 bg-black px-4 text-white outline-none focus:border-lime-300" onChange={(e) => setEstado(e.target.value)}>
                <option>Opacos</option>
                <option>Amarillentos</option>
                <option>Rayados</option>
                <option>Muy dañados</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Fecha ideal
              <input
                type="date"
                min={today}
                value={fecha}
                className="h-14 w-full rounded-2xl border border-white/10 bg-black px-4 text-white outline-none focus:border-lime-300"
                onChange={(e) => setFecha(e.target.value)}
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Mensaje opcional
              <textarea
                rows={4}
                value={mensaje}
                className="w-full resize-none rounded-2xl border border-white/10 bg-black p-4 text-white outline-none focus:border-lime-300"
                placeholder="Modelo del carro, zona o detalle adicional"
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </label>

            <button
              onClick={enviar}
              className="mt-2 h-14 rounded-2xl bg-lime-300 font-black text-black transition hover:-translate-y-0.5 hover:bg-white"
            >
              Confirmar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} FaroFix. Restauración de faros opacos con protección UV en Alajuela, San José y Heredia.</p>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex">
        <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" aria-label="WhatsApp FaroFix">
          <img src="/whatsapp.png" alt="" className="h-11 w-11 transition hover:scale-110" />
        </a>
        <a href="https://www.instagram.com/faro.fix?igsh=MTNhNWFyMm44NGlxYQ==" target="_blank" rel="noreferrer" aria-label="Instagram FaroFix">
          <img src="/instagram.png" alt="" className="h-11 w-11 transition hover:scale-110" />
        </a>
        <a href="https://www.facebook.com/share/18TGj4pXSD/" target="_blank" rel="noreferrer" aria-label="Facebook FaroFix">
          <img src="/facebook.png" alt="" className="h-11 w-11 transition hover:scale-110" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/85 p-3 backdrop-blur-xl md:hidden">
        <a
          href="#agendar"
          className="flex h-14 items-center justify-center rounded-2xl bg-lime-300 text-base font-black text-black"
        >
          Agendar por WhatsApp
        </a>
      </div>
    </main>
  );
}
