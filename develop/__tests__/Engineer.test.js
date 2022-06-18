const Engineer=require('../lib/Engineer');

test('creates engineer object',()=>{
    const engineer=new Engineer('Jane',2,'email','github')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

})