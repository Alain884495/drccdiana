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
            Vendredi 10 Juillet 2026 de 08h30 à 14h
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
            Actualités du contingence pour lutter contre le feux de brouse
          </span>

          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            ANTRIKASA FANKAN-KEVITRA MAHAKASIKA NY ADY AMIN'NY DORO ATIHALA,
            TANETY, TANANA
          </h2>
        </div>

        {/* Bloc principal */}
        <section className="mb-14">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="grid md:grid-cols-2">
              {/* LEFT POUR CONTENU */}
              <div className="flex flex-col justify-start p-8 sm:p-10 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-0">
                  ANTONY FIVORIANA
                </h3>

                <p className="mx-4 text-slate-600 leading-7 text-justify">
                  Manoloana ny doro tanety, hatiala na koa tanana izay miseho
                  etsy sy eroa, dia nahatsapa ny BNGRC fa misy ny tsy
                  fandraisana andraikitr'ireo manampahefana isan-tsokajiny. Tsy
                  hifanomezan-tsiny anefa izany satria ny rafitra mazava
                  hiadiana amin'izany dia mbola tsy mipetraka tsara ka samy
                  misalasala, mifampiandriandry manolohana ny fandraisana
                  antanana ny zava misy. Ka natao ity hatrikasa ity mba ho teny
                  hifampiherana amin'ny rehetra mba hisian'ny fiaraha-mientan'ny
                  tsirairay ka izay tsy mana-fatambary mba manana sobika fa tsy
                  tokony ankinina amin'ny Pompier (Commune), na DRED, na MNP
                  ihany rehefa misy trangan'afo.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-0">
                  NY ZAVA MISY ANKEHITRINY AMIN'NY RESAKA MATERIALY SY NY VOLA
                </h3>
                <p className="mx-4 text-slate-600 leading-7 text-justify">
                  Natao ny recensement manerana ny faritra ka hatramin'ny any
                  hifotony, ny tsapa dia rantsa-kazo, mesobe, angady no
                  fitaovana ampiasaina rehefa misy doro tanety mitranga, ny afo
                  anefa mijoalajola ka indraidray efa zaham-potsiny "sao de ny
                  mpamono afo indray no may" hoy ry zareo avy ambanja. Nanohy ry
                  zareo avy amin'ny Prefetiora Nosy Be fa ny tsy fahampiany vola
                  sy fotoana hakana azy amin'ny Trésor no mila hankamoraina
                  satria mihazakazaka ny afo. Hatreto alo, hoy ity farany ny
                  partenaire (opérateurs) no tena manampy amin'ny fampindramana
                  fitaovana, ka rehefa tsy nahefa izy dia sahirana isika.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-2xl mb-0">
                  NY TAPAKIN'NY BE SY NY MARO
                </h3>
                <p className="mx-4 text-slate-600 leading-7 text-justify">
                  Manoloana ny ady hevitra mafana dia nandray fitenena Atoa
                  Préfet Antsiranana: andraikitrin'ny rehetra ny ady amin'ny afo
                  na dia eo aza ireo Fitalevam-paritra voakasika mivantana
                  amin'izany. Fa na izany aza hoy izy, tsy izay afo rehetra
                  miseho no efa hanairana antsika rehetra fa manao alo ny
                  "niveau local" tsy voatohitra ny afo mande "niveau régional",
                  ny farany "niveau national". Fa eo indrindra hoy izy jerena
                  koa ny risque, hakaikin'ny trano fonenana ve, Air Protégé ve,
                  Bozaka ve, eo no ahafatarana gros moyen avy hatrany no
                  hampiasaina sa tsia. Satria, vola ny manetsika fiara, olona,
                  sns.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-2xl mb-0">
                  DIVERS
                </h3>
                <p className="mx-4 text-slate-600 leading-7">
                  Nandritra ny pause déjeuner no nanantonan'I PRMP Polutation sy
                  Atao Habibe ny tenako mahakasika ny trangan'ny "Epicerie
                  Casino" izay mameno ny helaketrano manerana ny fokotony.
                  Nitaraina ny iray voalohany fa mampangalatra ny zaniny ny
                  filalaovana Casino eny amin'ny Epicerie, ny faharoa indray
                  nitaraina fa hakaiky Ecole loatra ny Salle des Jeux Vidéo ka
                  tsy tafifantoka ampianarana ny zanany. Hisy hetsika hoy ny avy
                  amin'ny Population ho ataon'ny zareo ka mbola ho tonga hoy izy
                  hiresaka amin'ny Talé mba angataka fiaraha-miasa.
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
