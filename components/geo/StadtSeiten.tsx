// HR-UPDATER: v1.0
import React from 'react';

interface StadtInfo {
  name: string;
  slug: string;
  beschreibung: string;
  einwohner: string;
  besonderheiten: string;
}

const DEUTSCHE_STAEDTE: StadtInfo[] = [
  {
    name: 'Berlin',
    slug: 'berlin',
    beschreibung: 'Als Hauptstadt und groesste Stadt Deutschlands bietet Berlin eine Vielzahl an Physiotherapie-Stellenangeboten in Praxen, Kliniken und Reha-Zentren.',
    einwohner: '3,7 Mio.',
    besonderheiten: 'Charite, Vivantes, zahlreiche Sportvereine'
  },
  {
    name: 'Hamburg',
    slug: 'hamburg',
    beschreibung: 'Die Hansestadt Hamburg verfuegt ueber eine starke Gesundheitsbranche mit vielen Moeglichkeiten fuer Physiotherapeuten in der Hafenstadt.',
    einwohner: '1,9 Mio.',
    besonderheiten: 'UKE, Asklepios Kliniken, Hafencity-Gesundheitszentren'
  },
  {
    name: 'Muenchen',
    slug: 'muenchen',
    beschreibung: 'Muenchen bietet als wirtschaftsstarke Metropole ueberdurchschnittliche Gehaelter und erstklassige Arbeitsbedingungen fuer Physiotherapeuten.',
    einwohner: '1,5 Mio.',
    besonderheiten: 'TU Muenchen, LMU Klinikum, FC Bayern Sportmedizin'
  },
  {
    name: 'Koeln',
    slug: 'koeln',
    beschreibung: 'Die Domstadt Koeln vereint eine lebendige Kulturszene mit einem wachsenden Gesundheitssektor und zahlreichen Physiotherapie-Praxen.',
    einwohner: '1,1 Mio.',
    besonderheiten: 'Uniklinik Koeln, Deutsche Sporthochschule, zahlreiche Reha-Zentren'
  },
  {
    name: 'Frankfurt am Main',
    slug: 'frankfurt-am-main',
    beschreibung: 'Frankfurt bietet als Finanzmetropole attraktive Verguetungen und eine hohe Dichte an modernen Physiotherapie-Einrichtungen.',
    einwohner: '760.000',
    besonderheiten: 'Uniklinikum Frankfurt, BG Unfallklinik, Sportstadt'
  },
  {
    name: 'Stuttgart',
    slug: 'stuttgart',
    beschreibung: 'Stuttgart und die Region bieten als Wirtschaftszentrum Baden-Wuerttembergs hervorragende Karrierechancen in der Physiotherapie.',
    einwohner: '635.000',
    besonderheiten: 'Klinikum Stuttgart, Robert-Bosch-Krankenhaus, VfB Stuttgart Sportmedizin'
  },
  {
    name: 'Duesseldorf',
    slug: 'duesseldorf',
    beschreibung: 'Die Landeshauptstadt NRWs bietet ein breites Spektrum an Physiotherapie-Stellen von der Praxis bis zur Spezialklinik.',
    einwohner: '620.000',
    besonderheiten: 'Uniklinik Duesseldorf, Florence-Nightingale-Krankenhaus'
  },
  {
    name: 'Leipzig',
    slug: 'leipzig',
    beschreibung: 'Leipzig waechst rasant und bietet immer mehr Stellenangebote fuer Physiotherapeuten in der boomenden ostdeutschen Metropole.',
    einwohner: '600.000',
    besonderheiten: 'Uniklinikum Leipzig, Herzzentrum Leipzig, RB Leipzig Sportmedizin'
  },
  {
    name: 'Dortmund',
    slug: 'dortmund',
    beschreibung: 'Im Ruhrgebiet gelegen bietet Dortmund zahlreiche Moeglichkeiten in der Physiotherapie, besonders im Bereich Sportphysiotherapie.',
    einwohner: '590.000',
    besonderheiten: 'Klinikum Dortmund, BVB Sportmedizin, Westfalenhallen'
  },
  {
    name: 'Essen',
    slug: 'essen',
    beschreibung: 'Essen als Gesundheitsstandort im Ruhrgebiet bietet mit dem Uniklinikum und zahlreichen Reha-Einrichtungen viele Karrierechancen.',
    einwohner: '580.000',
    besonderheiten: 'Uniklinikum Essen, Krupp-Krankenhaus, Alfried-Krupp-Klinik'
  },
  {
    name: 'Bremen',
    slug: 'bremen',
    beschreibung: 'Die Hansestadt Bremen bietet ein angenehmes Arbeitsumfeld mit wachsender Nachfrage nach qualifizierten Physiotherapeuten.',
    einwohner: '570.000',
    besonderheiten: 'Klinikum Bremen-Mitte, DIAKO, Roland-Klinik'
  },
  {
    name: 'Dresden',
    slug: 'dresden',
    beschreibung: 'Dresden verbindet hohe Lebensqualitaet mit einem wachsenden Gesundheitssektor und attraktiven Physiotherapie-Stellenangeboten.',
    einwohner: '560.000',
    besonderheiten: 'Uniklinikum Carl Gustav Carus, Herzzentrum Dresden'
  },
  {
    name: 'Hannover',
    slug: 'hannover',
    beschreibung: 'Hannover bietet als Landeshauptstadt Niedersachsens eine starke medizinische Infrastruktur und vielfaeltige Stellen in der Physiotherapie.',
    einwohner: '540.000',
    besonderheiten: 'MHH - Medizinische Hochschule Hannover, Klinikum Region Hannover'
  },
  {
    name: 'Nuernberg',
    slug: 'nuernberg',
    beschreibung: 'Nuernberg und die Metropolregion bieten eine gute Balance aus Lebensqualitaet und beruflichen Moeglichkeiten in der Physiotherapie.',
    einwohner: '520.000',
    besonderheiten: 'Klinikum Nuernberg, Paracelsus Medizinische Privatuniversitaet'
  },
  {
    name: 'Freiburg',
    slug: 'freiburg',
    beschreibung: 'Die Universitaetsstadt Freiburg im Breisgau ist bekannt fuer ihre hohe Lebensqualitaet und bietet exzellente Karrierechancen im Gesundheitsbereich.',
    einwohner: '230.000',
    besonderheiten: 'Uniklinikum Freiburg, SC Freiburg Sportmedizin, Schwarzwald-Reha'
  },
];

const StadtSeiten: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-900">Physiotherapie-Jobs nach Stadt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEUTSCHE_STAEDTE.map((stadt) => (
          <div key={stadt.slug} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Physiotherapie-Jobs in {stadt.name}
            </h3>
            <p className="text-slate-600 text-sm mb-3">{stadt.beschreibung}</p>
            <div className="text-xs text-slate-500 space-y-1">
              <p><strong>Einwohner:</strong> {stadt.einwohner}</p>
              <p><strong>Bekannte Einrichtungen:</strong> {stadt.besonderheiten}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { DEUTSCHE_STAEDTE };
export default StadtSeiten;
