# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
5.times do |i|
  p = Project.create(name: Faker::Company.name, punchline: Faker::Company.bs)
  Random.rand(5).times do |j|
    q = Project.create(name: Faker::Company.name, punchline: Faker::Company.bs, parent_id: p.id)
    Random.rand(3).times do |k|
      w = Project.create(name: Faker::Company.name, punchline: Faker::Company.bs, parent_id: q.id)
    end
  end
end