import { images } from "../assets/images";
import imageRepresentatif from "../assets/imageRepresentatif.jpg";

const Actualites = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Actualités du 06 mai 2026
        </h2>
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  À LA UNE
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  RÉUNION CONCERNANT MPOX À POL 6 ANTSIRANANA
                </h3>
                <section className="text-gray-600 mb-4 leading-relaxed space-y-4">
                  <h1 className="text-blue-900 font-bold ">Généralité</h1>
                  <p>
                    Il est inauguré aujourd'hui samedi le 02 mai 2026 la route
                    en pavé de 400m vers Atazoalava. Elle a été fait a partir du
                    budget de CIAD de l'année 2025.
                  </p>
                  <p>
                    La cérémonie d’inauguration a été assistée, comme le
                    montrent les images, par les autorités locales. À cette
                    occasion, les habitants ont pu exprimer leur satisfaction et
                    également formuler leurs doléances face au pillage des
                    terrains, en pointant du doigt les responsables du Domaine.
                    Ils ont mentionné que, malgré les titres fonciers qu’ils
                    exhibaient comme preuve devant toutes les autorités,
                    l’administration concernée parvient à effectuer des
                    falsifications et contredit ce qui est écrit sur leurs
                    titres.
                  </p>
                  <p>
                    Après cela, Monsieur le Préfet a directement pris la parole
                    pour rassurer les habitants et citer quelques textes en
                    vigueur concernant l’acquisition des terrains. Il a déclaré
                    : "Tany tandalana ny firenentsika ary tena miady mafy
                    amin'ny tsy maty manota amin'ny halatra tany". Il a
                    poursuivi : "Tokony manaiky ny fandaminana isika eo amin'ny
                    lafiny plan d’urbanisme, mba tsy hanorinorina fahatany
                    amin'ny tany izay efa fantatra izao fa eo no atao ny lalana,
                    atao biraom-pokontany, sns. Satria eo, hoy izy, no
                    mampifanolana ny vahoaka sy ny mpitondra fanjakana,
                    indrindra fa ny Commune.
                  </p>
                  <p>
                    rès la prise de parole de Monsieur le Préfet, Monsieur le
                    Député Bora Réglage a pris la parole et a transmis le
                    message suivant : "Vita ny asa 2025 ary nofaranana tamin'ny
                    fahavitan'ny Pavé izao, fa ny taona 2026 kosa dia lalana any
                    amin'y fokotany Citée ouvrière no hatao ary iarahana amin'ny
                    Région ny ampahany amin'izany." Et il a suivi par :"Efa
                    tonga ny investisseur Chinois izay hamatsy antsika amin'ny
                    herinaratra mandeha amin'ny masoandro izay mahatakatra
                    hatramin'ny 15 MW ka mety hampihena ny vidinjoro ho
                    latsakin'ny 25% raha oharina amin'ny ankehitriny."
                  </p>
                </section>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-5 h-5"
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
                    02 Mai 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-5 h-5"
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
                    5 min de lecture
                  </span>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-48 flex items-center justify-center">
                  <img
                    src={imageRepresentatif}
                    alt="Image représentative"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded"></span>
            Toutes les actualités
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(images).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item}
                alt={`Actualité ${index}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actualites;
