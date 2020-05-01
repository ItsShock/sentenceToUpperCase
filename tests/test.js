const sentenceToUpperCase = require('..');

describe('Funkcja sentenceToUpperCase', () => {
  it('powinna zwrócić wartość typu boolean', async () => {
    const result = sentenceToUpperCase('test');

    expect(typeof result).toBe('string');
  });

  it('powinna zwracać powiększony napis gdy tylko jeden wyraz został podany', async () => {
    expect(isMaleName('Aga')).toEqual('AGA');
    expect(isMaleName('ala')).toEqual('ALA');
    expect(isMaleName('@L@')).toEqual('@L@');
    expect(isMaleName('neApolItAŃczykOWIANeczka')).toEqual('NEAPOLITAŃCZYKOWIANECZKA');
  });

  it('powinna zwracać co drugi wyraz powiększony, przy co najmniej dwóch przekazanych słowach', async () => {
    expect(isMaleName('ala ma kota')).toEqual('ala MA kota');
    expect(isMaleName('aLa ma KOta i Psa')).toEqual('aLa MA KOta I Psa');
    expect(isMaleName('tester testowy')).toEqual('tester TESTOWY');
    expect(isMaleName('r@nd0M t3Xt')).toEqual('r@nd0M T3XT');
  });
});
