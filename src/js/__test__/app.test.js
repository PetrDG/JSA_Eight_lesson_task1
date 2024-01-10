import Team from '../team.js';
import Character from '../character.js';

test('Add character', () => {
    const testChar = new Character('Demo');
    const team = new Team();
    team.add(testChar);
    expect(team.members).toEqual(new Set([{ 'name': 'Demo' }]));
});

test('Add same character', () => {
    const testChar = new Character('Demo');
    const team = new Team();
    team.add(testChar);
    expect(() => team.add(testChar)).toThrow(`Member ${testChar.name} is already in the team`);
});

test('Add multiple characters', () => {
    const testChar = new Character('Demo');
    const testChar2 = new Character('Demo2');
    const testChar3 = new Character('Demo3');
    const team = new Team();
    team.addAll(testChar, testChar2, testChar3);
    expect(team.members).toEqual(new Set([
        { 'name': 'Demo' },
        { 'name': 'Demo2' },
        { 'name': 'Demo3' },
    ]));
});

test('Convert Set to Array', () => {
    const testChar = new Character('Demo');
    const testChar2 = new Character('Demo2');
    const testChar3 = new Character('Demo3');
    const team = new Team();
    team.addAll(testChar, testChar2, testChar3);
    expect(team.toArray()).toEqual([
        { 'name': 'Demo' },
        { 'name': 'Demo2' },
        { 'name': 'Demo3' },
    ]);
});
