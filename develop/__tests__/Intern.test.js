const Intern=require('../lib/Intern');

test('creates intern object',()=>{

    const intern=new Intern('Joe',3,'email','sunnydale');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})