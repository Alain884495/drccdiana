import { images } from "../assets/images";
import imageRepresentatif from "../assets/imageRepresentatif.jpg";

const actualites = Object.entries(images);

const formatTitle = (key, index) => {
  if (!key) return `Actualité ${index + 1}`;

  return key
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Actualites = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Meta */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
            <svg
              className="h-4 w-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Mardi 07 Juillet 2026 de 10h à 12h
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
            <svg
              className="h-4 w-4 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            2 min de lecture
          </span>
        </div>

        {/* Titre */}
        <div className="mb-10 max-w-4xl">
          <span className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
            Actualités du festival
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            FIVORIANA MAHAKASIKA NY FESTIVAL TSAKOTSAKO SY TOMATE
          </h2>
        </div>

        {/* Bloc principal */}
        <section className="mb-14">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="grid md:grid-cols-2">
              {/* LEFT POUR CONTENU */}
              <div className="flex flex-col justify-start p-8 sm:p-10 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-0">
                  Toerana anaovana Festival
                </h3>

                <ul className="mt-4 text-slate-600 leading-7 list-disc pl-5">
                  <li>
                    Festival TSAKOTSAKO: ANKETRAKABE du 31 juillet au 1er et 2
                    août
                  </li>
                  <li>
                    Festival TOMATE: ANKARONGANA du 31 juillet au 1er et 2 août
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-0">
                  NY TANJON'NY FESTIVAL
                </h3>
                <p className="mx-4 text-slate-600 leading-7">
                  Maniry mafy ireo mpamboly mpisehatra amin'ny fambolena
                  Tsakotsako sy Tomate mba hasiana karaha atao amin'ny
                  sehatran'ny Vanille sy Cacao misy ny campagne sy ny prix
                  planché fa mahatsiaro tena fa voa ry zareo amin'ny resaka
                  Prix.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-2xl mb-0">
                  NY TOERANA MISY NY SEHATRIN'NY TSAKOTSAKO ANKEHITRINY
                </h3>
                <p className="mx-4 text-slate-600 leading-7">
                  Voalaza matetika tao fa ny Distrikan'ny Diégo II dia tsy
                  manana la Vanille, Cacao, Anacarde, Ylang Ylang tahaka ny
                  distrika sasany ao anatin'ny Faritra Diana, fa izy kosa dia
                  manana tany izay tena midadasika tsy hita farany ary mety
                  ambolena tsakotsako avikoa. Ankehitriny, raha ny vokatra no
                  jerena hoy ny fikambanana "ANKETRAKABE VELOTEGNA TSAKOTSAKO",
                  ny mpividy no tsy maharaka fa maro loatra ny tsakotsako
                  vokarina ka miantso ny Ministeran'ny Varotra mba hijery ny
                  lalambarotra tsaratsara kokoa noho izay efa misy ankehitriny
                  fa antokan'ny fandrosoana ny tantsaha sy ny faritra izany.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-2xl mb-0">
                  NY TONTOLO ARA-PANJAKA MISY NY SEHATRIN'NY TSAKOTSAKO
                  ANKEHITRINY
                </h3>
                <p className="mx-4 text-slate-600 leading-7">
                  Ankehitriny, dia mbola tsy "COOPÉRATIVE" no misy fa
                  fikambanana, ny Fitaleavam-paritrin'ny Fambolena no
                  zaman-djaza araka ny voambolana matetika fampiasa nandritra ny
                  fivoriana.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-2xl mb-0">
                  NY ZAVATRA MILA HAREMINA AMIN'NY LAFINY FITANTANANA
                </h3>
                <p className="mx-4 text-slate-600 leading-7">
                  Ity sehatra iray ity mo no sehatra izay nandaniana ny 50% ny
                  fotoana nivoriana ary nalaminan tsy nilamina dia ny
                  sehatrin'ny "ARA-BOLA". Samy te hitantam-bola ny Commune sy ny
                  association ary nanaiky ny Atoa Ben'ny tanana araka ny
                  fifanarahana efa ela fa ny association no hitanana ny vola
                  miditra momba ny Tsakotsako. Kanefa ny hagagana fa tsisy na
                  ariary ny association mahakasika ny TSAKOTSAKO Anketrakabe, fa
                  ny TOMATY Ankarongana kosa dia nilaza fa ampy ny vola izay
                  navory tamin'ny alalany Ristourne alaina amin'ny barrière
                  économique.
                </p>
              </div>

              {/* RIGHT POUR IMAGE DE imageRepresentatif */}
              <div className="relative min-h-[280px]">
                <img
                  src={imageRepresentatif}
                  alt="Image représentative du festival"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                    Festival
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Titre section */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl">
            <span className="h-7 w-1.5 rounded-full bg-blue-600"></span>
            Toutes les actualités
          </h3>
        </div>

        {/* Grille actualités */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {actualites.map(([key, item], index) => (
            <article
              key={key || index}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item}
                  alt={formatTitle(key, index)}
                  className="h-56 w-full object-cover transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-80" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actualites;
