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
                  RÉUNION CONCERNANT LE MPOX À POL 6 ANTSIRANANA
                </h3>
                <section className="text-gray-600 mb-4 leading-relaxed space-y-4">
                  <h1 className="text-blue-900 font-bold text-xl mb-0">
                    Généralité
                  </h1>
                  <ul className="list-disc pl-6 space-y-2 text-base">
                    <li>
                      <strong>Situation actuelle : </strong>
                      Quatre décès recensés à Madagascar.
                    </li>
                    <li>
                      <strong>Actions prises par l'État: </strong>
                      <br />
                      Augmentation du budget des vaccins, passant de 3 milliards
                      à 23 milliards d’ariary.
                      <br />
                      Vaccination obligatoire pour les militaires et
                      sensibilisation massive des professionnels du sexe.
                    </li>
                    <li>
                      <strong>Autres mesures : </strong>
                      <br />
                      Obligation de mise à disposition de solutions
                      hydroalcooliques ou d’autres dispositifs de lavage des
                      mains, ainsi que d’équipements adaptés pour le lavage de
                      la vaisselle, dans les établissements de restauration et
                      d’hébergement.
                    </li>
                    <li>
                      <strong>Premier signe de la maladie : </strong>
                      <br />
                      Au début, une éruption cutanée apparaît dans les zones
                      génitales, puis elle se propage progressivement à
                      l’ensemble du corps. Ce qui la différencie des autres
                      affections similaires est la présence de lésions cutanées
                      avec suppuration, ainsi que leur persistance au niveau des
                      mains et des pieds.
                    </li>
                    <li>
                      <strong>Mode de transmission : </strong>
                      <br />
                      Par contact direct avec une personne infectée ou par
                      contact avec des objets contaminés. Contrairement au
                      coronavirus, la transmission par voie aérienne est
                      limitée, car le virus survit mal dans un milieu isolé,
                      d'où l'efficacité de cache-bouche. Mais attention, son
                      point fort est la transmission cutanée.
                    </li>
                    <li>
                      <strong>Hevitran'ny maro : </strong>
                      <br />
                      Tsy maladie MST ny Mpox, kanefa voalaza matetika tao ny
                      fomba fifindrany amin'ny halalan'izany ary hatao
                      fanentanana manokana araka ny tapaka tamin'ny fivorina ny
                      quartier Tanambao 5.
                    </li>
                  </ul>
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
                    06 Mai 2026
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
                    2 min de lecture
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
