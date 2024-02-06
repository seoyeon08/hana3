const telfmt = (s) => {
    const len = s?.length;
    if(len < 7) return s;
    if(len <= 8) return `${s.substring(0, 4)}-${s.substring(len - 4)}`;
    
    const a = s.startsWith('02') ? 2 : len - 4 - b;
    // const b = len == 10 ? 3 : 4;
    const b = len - 4 - a;

    const regex = new RegExp('{\\d{${a}})(\\d{${b}})(\\d{${4}})', 'g');
    return s.replace(regex, '$1-$2-$3');
};

assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');

const upperToLower = str => str.replace(/[A-Z]/g, s => s.toLowerCase());
assert.strictEqual(
  upperToLower('Senior Coding Learning JS'),
  'senior coding learning js'
);