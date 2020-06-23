const sentenceToUpperCase = require('..');

describe('Funkcja sentenceToUpperCase', () => {
  it('powinna zwrócić wartość typu boolean', async () => {
    const result = sentenceToUpperCase('test');

    expect(typeof result).toBe('string');
  });

  it('powinna zwracać powiększony napis gdy tylko jeden wyraz został podany', async () => {
    expect(sentenceToUpperCase('Aga')).toEqual('AGA');
    expect(sentenceToUpperCase('ala')).toEqual('ALA');
    expect(sentenceToUpperCase('@L@')).toEqual('@L@');
    expect(sentenceToUpperCase('neApolItAŃczykOWIANeczka')).toEqual('NEAPOLITAŃCZYKOWIANECZKA');
  });

  it('powinna zwracać co drugi wyraz powiększony, przy co najmniej dwóch przekazanych słowach', async () => {
    expect(sentenceToUpperCase('ala ma kota')).toEqual('ala MA kota');
    expect(sentenceToUpperCase('aLa ma KOta i Psa')).toEqual('aLa MA KOta I Psa');
    expect(sentenceToUpperCase('tester testowy')).toEqual('tester TESTOWY');
    expect(sentenceToUpperCase('r@nd0M t3Xt')).toEqual('r@nd0M T3XT');
  });
});
