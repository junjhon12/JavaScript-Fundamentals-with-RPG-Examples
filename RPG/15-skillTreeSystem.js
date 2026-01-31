const skills = [
    {name: "Fireball", damage: 20, element:"Fire"},
    {name: "Ice Shard", damage: 15, element:"Ice"},
    {name: "Thunder Strike", damage: 25, element:"Electric"},
];

const fireSkills = skills.filter(skill => skill.element === "Fire");
console.log(fireSkills);

const ultimate = (skills.find(skills => skills.name === "Meteor Strike" )) ? "Skill exist" : skills.push({name: "Meteor Strike", damage: 50, element:"Fire"});
console.log(skills);

const skillNames = skills.map(skill => `Skill: ${skill.name} (Dmg: ${skill.damage})`);
console.log(skillNames);

