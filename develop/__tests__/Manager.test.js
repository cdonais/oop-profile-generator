const Manager=require('../lib/Manager');

test('creates manager object'),()=>{
    const manager=new Manager(name,id,email,office);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
}